export interface ApiErrorDetails {
  [key: string]: unknown;
}

export interface ApiError {
  status: number;
  code: string;
  message: string;
  details?: ApiErrorDetails;
}

export interface ApiErrorResponse {
  success: false;

  error: {
    code: string;
    message: string;
    details?: ApiErrorDetails;
  };
}

export interface ApiSuccessResponse<T> {
  success: true;
  data: T;
}

export interface ApiRequestOptions extends RequestInit {
  token?: string;
}
