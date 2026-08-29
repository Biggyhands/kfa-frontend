import type {
  ApiError,
  ApiErrorResponse,
  ApiSuccessResponse,
} from "@/utils/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL no está configurada.");
}

interface ApiRequestOptions extends RequestInit {
  token?: string;
}

function buildHeaders(options?: ApiRequestOptions): HeadersInit {
  const headers = new Headers(options?.headers);

  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  if (options?.token) {
    headers.set("X-Delegation-Token", options.token);
  }

  return headers;
}

async function parseErrorResponse(response: Response): Promise<ApiError> {
  let payload: ApiErrorResponse | null = null;

  try {
    payload = (await response.json()) as ApiErrorResponse;
  } catch {
    // El backend podría responder sin JSON
  }

  return {
    status: response.status,
    code: payload?.error?.code ?? "UNKNOWN_ERROR",
    message:
      payload?.error?.message ??
      "Ocurrió un error al comunicarse con el servidor.",
    details: payload?.error?.details,
  };
}

export async function apiRequest<T>(
  path: string,
  options?: ApiRequestOptions,
): Promise<T> {
  const url = `${API_URL}${path}`;

  const response = await fetch(url, {
    ...options,
    headers: buildHeaders(options),
  });

  if (!response.ok) {
    throw await parseErrorResponse(response);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  const payload = (await response.json()) as ApiSuccessResponse<T>;

  return payload.data;
}
