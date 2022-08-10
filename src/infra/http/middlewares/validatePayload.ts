import { Request, Response, NextFunction } from 'express';
import { ValidationError, AnyObjectSchema } from 'yup';

export const validatePayload = (schema: AnyObjectSchema) => async (
  request: Request,
  _response: Response,
  next: NextFunction,
) => {
  const payload = request.body;
  if (Object.keys(payload).length === 0) {
    throw new ValidationError('Payload is required');
  }
  request.body = await schema.validate(payload);
  return next();
};
