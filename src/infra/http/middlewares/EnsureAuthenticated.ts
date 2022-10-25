import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { IEmployeeToToken } from 'src/application/dtos/IEmployeeToToken';
import { authConfig } from 'src/config/authConfig';
import { UnauthorizedRequest } from 'src/shared/errors/UnauthorizedRequest';

export function ensureAuthenticated(request: Request, _: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new UnauthorizedRequest(new Error('JWT token is missing'), '');
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const employee = decoded as IEmployeeToToken;

    request.employee = employee;

    return next();
  } catch {
    throw new UnauthorizedRequest(new Error('Invalid JWT token'), '');
  }
}
