"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import type {
  DelegationSession,
  DelegationSessionState,
  UseDelegationSessionOptions,
} from "@/utils/types";

const SESSION_STORAGE_PREFIX = "kfa-delegation-session";

function getStorageKey(slug: string): string {
  return `${SESSION_STORAGE_PREFIX}:${slug}`;
}

function isDelegationSession(value: unknown): value is DelegationSession {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const candidate = value as Record<string, unknown>;

  return (
    typeof candidate.delegationId === "string" &&
    candidate.delegationId.length > 0 &&
    typeof candidate.token === "string" &&
    candidate.token.length > 0
  );
}

export function useDelegationSession({
  slug,
}: UseDelegationSessionOptions): DelegationSessionState {
  const router = useRouter();

  const [session, setSession] = useState<DelegationSession | null>(null);

  const [isReady, setIsReady] = useState(false);

  const storageKey = getStorageKey(slug);

  const saveSession = useCallback(
    (nextSession: DelegationSession) => {
      if (typeof window === "undefined") {
        return;
      }

      sessionStorage.setItem(storageKey, JSON.stringify(nextSession));

      setSession(nextSession);
    },
    [storageKey],
  );

  const clearSession = useCallback(() => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem(storageKey);
    }

    setSession(null);
  }, [storageKey]);

  /*
   * Este efecto inicializa la sesión desde
   * la URL o sessionStorage.
   *
   * Los setState son intencionales porque
   * estamos sincronizando el estado React
   * con almacenamiento/URL del navegador.
   */
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const currentUrl = new URL(window.location.href);

    const delegationId = currentUrl.searchParams.get("delegationId");

    const token = currentUrl.searchParams.get("token");

    /*
     * Prioridad 1:
     * si el enlace trae delegationId
     * + token, usamos esa sesión.
     */
    if (delegationId && token) {
      const urlSession: DelegationSession = {
        delegationId,
        token,
      };

      sessionStorage.setItem(storageKey, JSON.stringify(urlSession));

      setSession(urlSession);

      /*
       * Quitamos las credenciales de
       * la URL visible inmediatamente.
       */
      currentUrl.searchParams.delete("delegationId");

      currentUrl.searchParams.delete("token");

      const nextSearch = currentUrl.searchParams.toString();

      const cleanUrl = `${currentUrl.pathname}${
        nextSearch ? `?${nextSearch}` : ""
      }${currentUrl.hash}`;

      router.replace(cleanUrl, {
        scroll: false,
      });

      setIsReady(true);

      return;
    }

    /*
     * Si llega solo uno de los dos
     * parámetros, la URL no es válida.
     * Limpiamos cualquier credencial
     * incompleta.
     */
    if (delegationId || token) {
      currentUrl.searchParams.delete("delegationId");

      currentUrl.searchParams.delete("token");

      const nextSearch = currentUrl.searchParams.toString();

      const cleanUrl = `${currentUrl.pathname}${
        nextSearch ? `?${nextSearch}` : ""
      }${currentUrl.hash}`;

      router.replace(cleanUrl, {
        scroll: false,
      });
    }

    /*
     * Prioridad 2:
     * intentamos recuperar la sesión
     * guardada en sessionStorage.
     */
    const storedSession = sessionStorage.getItem(storageKey);

    if (!storedSession) {
      setSession(null);

      setIsReady(true);

      return;
    }

    try {
      const parsedSession: unknown = JSON.parse(storedSession);

      if (!isDelegationSession(parsedSession)) {
        sessionStorage.removeItem(storageKey);

        setSession(null);

        setIsReady(true);

        return;
      }

      setSession(parsedSession);
    } catch {
      sessionStorage.removeItem(storageKey);

      setSession(null);
    }

    setIsReady(true);
  }, [router, storageKey]);
  /* eslint-enable react-hooks/set-state-in-effect */

  return {
    session,
    isReady,
    saveSession,
    clearSession,
  };
}
