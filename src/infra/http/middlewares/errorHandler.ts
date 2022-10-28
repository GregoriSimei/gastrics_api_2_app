import { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'yup';
import AppError from '../../../shared/errors/AppError';

export const errorHandler = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  if (error instanceof ValidationError) {
    return response.status(400).json({
      status: 'Validation Error',
      message: error.message,
    });
  }

  if (error instanceof AppError) {
    if (error.statusCode === 500) {
      console.error(error.message, error.error);
    }
    return response.status(error.statusCode).json({
      status: 'Error',
      message: error.message,
    });
  }

  console.error(error.stack);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
};
