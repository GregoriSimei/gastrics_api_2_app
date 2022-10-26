import { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'yup';

export function ensureEmployeeHasCompanyAcess(request: Request, _: Response, next: NextFunction) {
  const { employee } = request;
  const companyId = request.params.companyId as string;

  const employeeCompanyId = employee.company?.id;

  if (employeeCompanyId !== companyId) {
    throw new ValidationError("Employee don't have permission");
  }

  next();
}
