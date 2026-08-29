"use client";

import { useMutation } from "@tanstack/react-query";
import { CheckCircle2, LoaderCircle, Mail } from "lucide-react";
import { type FormEvent, useState } from "react";

import { requestDelegationRecoveryLink } from "@/lib/api/delegations";

import type { DelegationRecoveryFormProps } from "@/utils/types";

const neutralMessage =
  "Si existe una delegación registrada con este correo, recibirás un nuevo enlace de gestión.";

export function DelegationRecoveryForm({ slug }: DelegationRecoveryFormProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [email, setEmail] = useState("");

  const [emailError, setEmailError] = useState<string | null>(null);

  const [submitted, setSubmitted] = useState(false);

  const recoveryMutation = useMutation({
    mutationFn: (recoveryEmail: string) =>
      requestDelegationRecoveryLink(slug, {
        email: recoveryEmail.trim(),
      }),

    onSuccess: () => {
      setSubmitted(true);
      setEmailError(null);
    },

    /*
     * Intencionalmente mostramos
     * exactamente el mismo resultado
     * aunque el backend rechace la
     * solicitud.
     *
     * Así no revelamos si un correo
     * pertenece a una delegación.
     */
    onError: () => {
      setSubmitted(true);
      setEmailError(null);
    },
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedEmail = email.trim();

    setSubmitted(false);

    if (!normalizedEmail) {
      setEmailError("Ingresa tu correo electrónico.");

      return;
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail);

    if (!emailIsValid) {
      setEmailError("Ingresa un correo electrónico válido.");

      return;
    }

    setEmailError(null);

    recoveryMutation.mutate(normalizedEmail);
  }

  function closeRecoveryForm() {
    if (recoveryMutation.isPending) {
      return;
    }

    setIsOpen(false);
    setSubmitted(false);
    setEmailError(null);
    setEmail("");
  }

  if (!isOpen) {
    return (
      <div className="mt-5 text-center">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="min-h-11 cursor-pointer px-3 text-[10px] font-bold uppercase tracking-[0.12em] text-black/45 underline-offset-4 transition-colors hover:text-(--kfa-blue) hover:underline"
        >
          ¿Perdiste tu enlace de gestión?
        </button>
      </div>
    );
  }

  return (
    <div className="mt-5 border border-black/10 bg-(--kfa-blue)/[0.025] p-4 min-[360px]:p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center bg-white text-(--kfa-blue) shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
          <Mail aria-hidden="true" size={16} />
        </div>

        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-(--kfa-blue)">
            Recuperar enlace de gestión
          </p>

          <p className="mt-2 text-xs leading-5 text-black/55">
            Ingresa el correo utilizado al registrar la delegación.
          </p>
        </div>
      </div>

      {submitted ? (
        <div
          role="status"
          className="mt-5 border-l-4 border-(--kfa-blue) bg-white p-4"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2
              aria-hidden="true"
              size={18}
              className="mt-0.5 shrink-0 text-(--kfa-blue)"
            />

            <p className="text-sm leading-6 text-black/65">{neutralMessage}</p>
          </div>

          <div className="mt-4 flex flex-col gap-2 min-[360px]:flex-row min-[360px]:items-center min-[360px]:justify-between">
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setEmail("");
              }}
              className="min-h-11 cursor-pointer text-[10px] font-bold uppercase tracking-[0.12em] text-(--kfa-blue) underline-offset-4 hover:underline"
            >
              Solicitar otro enlace
            </button>

            <button
              type="button"
              onClick={closeRecoveryForm}
              className="min-h-11 cursor-pointer text-[10px] font-bold uppercase tracking-[0.12em] text-black/40 transition-colors hover:text-black"
            >
              Cerrar
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="mt-5">
          <label
            htmlFor="delegation-recovery-email"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.12em] text-black"
          >
            Correo de la delegación
          </label>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="delegation-recovery-email"
              type="email"
              inputMode="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              disabled={recoveryMutation.isPending}
              aria-invalid={Boolean(emailError)}
              placeholder="correo@ejemplo.com"
              className="min-h-12 min-w-0 flex-1 border-b border-black/20 bg-transparent px-0 text-base text-black outline-none transition-colors placeholder:text-black/35 focus:border-(--kfa-blue) disabled:opacity-50"
            />

            <button
              type="submit"
              disabled={recoveryMutation.isPending}
              className="inline-flex min-h-12 shrink-0 cursor-pointer items-center justify-center gap-2 bg-(--kfa-blue) px-5 text-[10px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-(--kfa-blue-dark) disabled:cursor-not-allowed disabled:opacity-60"
            >
              {recoveryMutation.isPending ? (
                <>
                  <LoaderCircle
                    aria-hidden="true"
                    size={15}
                    className="animate-spin"
                  />
                  Enviando...
                </>
              ) : (
                <>
                  <Mail aria-hidden="true" size={15} />
                  Reenviar enlace
                </>
              )}
            </button>
          </div>

          {emailError && (
            <p role="alert" className="mt-2 text-xs leading-5 text-(--kfa-red)">
              {emailError}
            </p>
          )}

          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={closeRecoveryForm}
              disabled={recoveryMutation.isPending}
              className="min-h-11 cursor-pointer px-2 text-[10px] font-bold uppercase tracking-[0.12em] text-black/40 transition-colors hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
            >
              Cancelar
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
