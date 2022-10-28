import AppError from './AppError';

export class UnauthorizedRequest extends AppError {
  constructor(error: Error, message: string) {
    super(message, error, 401);
  }
}
