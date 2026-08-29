export interface ApiSuccessResponse<T> {
  success: true;
  data: T;
}

export interface ApiErrorDetails {
  field?: string;
  message?: string;
}

export interface ApiErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: ApiErrorDetails[] | Record<string, unknown>;
  };
}

export interface ApiError {
  code: string;
  message: string;
  status: number;
  details?: ApiErrorResponse["error"]["details"];
}
