import { IAlert } from 'src/application/dtos/IAlert';
import { IAlertRepository } from 'src/application/repositories/IAlertRepository';
import { ICompanyRepository } from 'src/application/repositories/ICompanyRepository';
import { inject, injectable } from 'tsyringe';
import { ValidationError } from 'yup';
import { ICreateAlert } from './ICreateAlert';

@injectable()
export class CreateAlertUseCase implements ICreateAlert {
  constructor(
    @inject('IAlertRepository')
    private alertRepository: IAlertRepository,
    @inject('ICompanyRepository')
    private companyRepository: ICompanyRepository,
  ) {}

  async execute(companyId: string, alert: IAlert): Promise<IAlert> {
    if (!companyId || !alert) {
      throw new ValidationError('Invalid parameters');
    }

    const alertToCreate = alert;
    const companyFound = await this.companyRepository.findById(companyId);

    if (!companyFound) {
      throw new ValidationError('Company not exist');
    }

    alertToCreate.company = companyFound;
    const alertCreated = await this.alertRepository.create(alertToCreate);

    return alertCreated;
  }
}
