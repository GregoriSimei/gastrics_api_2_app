import { IAlert } from 'src/application/dtos/IAlert';
import { IAlertRepository } from 'src/application/repositories/IAlertRepository';
import { ICompanyRepository } from 'src/application/repositories/ICompanyRepository';
import { inject, injectable } from 'tsyringe';
import { ValidationError } from 'yup';
import { IFindAlertByCompany } from './IFindAlertByCompany';

@injectable()
export class FindAlertByCompanyUseCase implements IFindAlertByCompany {
  constructor(
    @inject('IAlertRepository')
    private alertRepository: IAlertRepository,
    @inject('ICompanyRepository')
    private companyRepository: ICompanyRepository,
  ) {}

  async execute(companyId: string): Promise<IAlert[]> {
    if (!companyId) {
      throw new ValidationError('Invalid parameters');
    }

    const companyFound = await this.companyRepository.findById(companyId);

    if (!companyFound) {
      throw new ValidationError('Company not exist');
    }

    const alertsFound = await this.alertRepository.findAllByCompanyId(companyId);

    return alertsFound;
  }
}
