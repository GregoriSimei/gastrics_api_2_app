import { IEmployee } from 'src/application/dtos/IEmployee';
import { ICompanyRepository } from 'src/application/repositories/ICompanyRepository';
import { IEmployeeRepository } from 'src/application/repositories/IEmployeeRepository';
import { inject, injectable } from 'tsyringe';
import { ValidationError } from 'yup';
import { IUpdateEmployee } from './IUpdateEmployee';

@injectable()
export class UpdateEmployeeUseCase implements IUpdateEmployee {
  constructor(
    @inject('IEmployeeRepository')
    private employeeRepository: IEmployeeRepository,
    @inject('ICompanyRepository')
    private companyRepository: ICompanyRepository,
  ) {}

  async execute(companyId: string, employee: IEmployee): Promise<IEmployee> {
    if (!companyId || !employee) {
      throw new ValidationError('Invalid Parameters');
    }

    const { id, type } = employee;
    if (!id) {
      throw new ValidationError('Invalid Parameters');
    }

    const companyFound = await this.companyRepository.findById(companyId);
    if (!companyFound) {
      throw new ValidationError('Company not Exist');
    }

    const employeeFound = await this.employeeRepository.findById(id);
    if (!employeeFound) {
      throw new ValidationError('Employee not exist');
    }

    if (employeeFound.company?.id !== companyId) {
      throw new ValidationError("Employee don't exist in this company");
    }

    const availablesType = ['employee', 'owner'];
    const validType = availablesType.some((typeAvailable) => typeAvailable === type);

    if (!validType && type) {
      throw new ValidationError('Invalid Type');
    }

    const employeeToUpdate: IEmployee = {
      ...employee,
      type: employee.type === '' ? employeeFound.type : employee.type,
      cpf: employeeFound.cpf,
      company: employeeFound.company,
      created_at: employeeFound.created_at,
      key: employeeFound.key,
    };

    const employeeUpdated = await this.employeeRepository.update(id, employeeToUpdate);

    if (!employeeUpdated) {
      throw new ValidationError('Error to update');
    }

    return employeeUpdated;
  }
}
