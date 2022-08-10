class AppError extends Error {
  readonly error;

  readonly statusCode;

  constructor(
    message: string,
    error: Error,
    statusCode: number,
  ) {
    super(message);
    this.statusCode = statusCode;
    this.error = error;
  }
}

export default AppError;
