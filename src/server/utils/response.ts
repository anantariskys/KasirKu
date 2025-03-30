export class ApiResponse {
  static success<T>(data: T, message = "Success") {
    return {
      success: true,
      message,
      data,
    };
  }

  static error(message: string, code = 400) {
    return {
      success: false,
      message,
      code,
    };
  }
}

export type ApiSuccessResponse<T> = ReturnType<typeof ApiResponse.success<T>>;
export type ApiErrorResponse = ReturnType<typeof ApiResponse.error>;
export type ApiResponseType<T> = ApiSuccessResponse<T> | ApiErrorResponse;
