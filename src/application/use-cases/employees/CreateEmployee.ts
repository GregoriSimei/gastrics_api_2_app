import { IEmployee } from 'src/application/dtos/IEmployee';
import { ICompanyRepository } from 'src/application/repositories/ICompanyRepository';
import { IEmployeeRepository } from 'src/application/repositories/IEmployeeRepository';
import { inject, injectable } from 'tsyringe';
import { ValidationError } from 'yup';
import { ICreateEmployee } from './ICreatemployee';

@injectable()
export class CreateEmployeeUseCase implements ICreateEmployee {
  constructor(
        @inject('IEmployeeRepository')
        private employeeRepository: IEmployeeRepository,
        @inject('ICompanyRepository')
        private companyRepoitory: ICompanyRepository,
  ) {}

  async execute(companyId: string, employee: IEmployee): Promise<IEmployee> {
    if (!companyId || !employee) {
      throw new ValidationError('Invalid Parameters');
    }

    const {
      cpf, email, pass, birth, lastName, name, type,
    } = employee;

    if (!pass || !birth || !lastName || !name || !type || !email || !cpf) {
      throw new ValidationError('Invalid Parameters');
    }

    const availablesType = ['employee', 'owner'];
    const validType = availablesType.some((typeAvailable) => typeAvailable === type);

    if (!validType) {
      throw new ValidationError('Invalid Type');
    }

    const companyFound = await this.companyRepoitory.findById(companyId);

    if (!companyFound) {
      throw new ValidationError('Company not exist');
    }

    const employeeFoundByCPF = await this.employeeRepository.findByCPF(companyId, cpf);

    if (employeeFoundByCPF) {
      throw new ValidationError('Employee already exist');
    }

    const employeeFoundByEmail = await this.employeeRepository.findByEmail(companyId, email);

    if (employeeFoundByEmail) {
      throw new ValidationError('Employee already exist');
    }

    const employeeToCreate: IEmployee = employee;
    employeeToCreate.active = true;
    employeeToCreate.key = '';
    employeeToCreate.company = companyFound;

    const employeeCreated = await this.employeeRepository.create(employee);

    return employeeCreated;
  }
}
