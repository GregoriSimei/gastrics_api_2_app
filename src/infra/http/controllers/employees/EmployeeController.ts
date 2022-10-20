import { Request, Response } from 'express';
import { ICreateEmployee } from 'src/application/use-cases/employees/ICreatemployee';
import { inject, injectable } from 'tsyringe';

@injectable()
export class EmployeeController {
  constructor(
        @inject('ICreateEmployeeUseCase')
        private createEmployeeUseCase: ICreateEmployee,
  ) {}

  async create(request: Request, response: Response) {
    const companyId = request.params.companyId as string;
    const employee = request.body;
    const result = await this.createEmployeeUseCase.execute(companyId, employee);
    response.status(201).json(result);
  }
}
