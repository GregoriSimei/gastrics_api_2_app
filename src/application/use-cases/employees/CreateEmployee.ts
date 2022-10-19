import { IEmployee } from 'src/application/dtos/IEmployee';
import { IEmployeeRepository } from 'src/application/repositories/IEmployeeRepository';
import { inject, injectable } from 'tsyringe';
import { ICreateEmployee } from './ICreatemployee';

@injectable()
export class CreateEmployeeUseCase implements ICreateEmployee {
  constructor(
        @inject('IEmployeeReposiory')
        private employeeRepository: IEmployeeRepository,
  ) {}

  async execute(employee: IEmployee): Promise<IEmployee> {
    const { cpf, email } = employee;

    const employeeCreated = await this.employeeRepository.create(employee);

    return employeeCreated;
  }
}
