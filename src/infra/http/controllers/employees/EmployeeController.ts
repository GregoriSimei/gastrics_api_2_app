import { Request, Response } from 'express';
import { ICreateEmployee } from 'src/application/use-cases/employees/ICreatemployee';
import { IFindEmployee } from 'src/application/use-cases/employees/IFindEmployee';
import { IUpdateEmployee } from 'src/application/use-cases/employees/IUpdateEmployee';
import { inject, injectable } from 'tsyringe';

@injectable()
export class EmployeeController {
  constructor(
        @inject('ICreateEmployeeUseCase')
        private createEmployeeUseCase: ICreateEmployee,
        @inject('IUpdateEmployeeUseCase')
        private updateEmployeeUseCase: IUpdateEmployee,
        @inject('IFindEmployeeUseCase')
        private findEmployeeUseCase: IFindEmployee,
  ) {}

  async create(request: Request, response: Response) {
    const companyId = request.params.companyId as string;
    const employee = request.body;
    const result = await this.createEmployeeUseCase.execute(companyId, employee);
    response.status(201).json(result);
  }

  async update(request: Request, response: Response) {
    const companyId = request.params.companyId as string;
    const employee = request.body;
    const result = await this.updateEmployeeUseCase.execute(companyId, employee);
    response.status(201).json(result);
  }

  async get(request: Request, response: Response) {
    const companyId = request.params.companyId as string;
    const employeeId = request.query.id as string;
    const result = await this.findEmployeeUseCase.execute(companyId, employeeId);
    response.status(201).json(result);
  }
}
