import { ICompanyRepository } from 'src/application/repositories/ICompanyRepository';
import { IEmployeeRepository } from 'src/application/repositories/IEmployeeRepository';
import { inject, injectable } from 'tsyringe';
import { ValidationError } from 'yup';
import { IDeleteEmployee } from './IDeleteEmployee';

@injectable()
export class DeleteEmployeeUseCase implements IDeleteEmployee {
  constructor(
        @inject('ICompanyRepository')
        private companyRepository: ICompanyRepository,
        @inject('IEmployeeRepository')
        private employeeRepository: IEmployeeRepository,
  ) {}

  async execute(companyId: string, employeeId: string): Promise<boolean> {
    if (!companyId || !employeeId) {
      throw new ValidationError('Invalid Parameters');
    }

    const companyFound = await this.companyRepository.findById(companyId);
    if (!companyFound) {
      throw new ValidationError('Company not exist');
    }

    const employeeExist = companyFound.employees?.some((employee) => employee.id === employeeId);
    if (!employeeExist) {
      throw new ValidationError('Employee not exist');
    }

    await this.employeeRepository.delete(employeeId);

    return true;
  }
}
