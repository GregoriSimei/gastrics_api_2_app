import { IEmployee } from 'src/application/dtos/IEmployee';
import { ICompanyRepository } from 'src/application/repositories/ICompanyRepository';
import { inject, injectable } from 'tsyringe';
import { ValidationError } from 'yup';
import { IFindEmployee } from './IFindEmployee';

@injectable()
export class FindEmployeeUseCase implements IFindEmployee {
  constructor(
        @inject('ICompanyRepository')
        private companyRepository: ICompanyRepository,
  ) {}

  async execute(companyId: string, employeeId: string): Promise<IEmployee | IEmployee[] | null> {
    if (!companyId) {
      throw new ValidationError('Invalid Parameters');
    }

    const companyFound = await this.companyRepository.findById(companyId);

    if (!companyFound) {
      throw new ValidationError('Company not exist');
    }

    if (employeeId) {
      const employeeFound = companyFound.employees?.find((employee) => employee.id === employeeId);
      return employeeFound || null;
    }

    return companyFound.employees || [];
  }
}
