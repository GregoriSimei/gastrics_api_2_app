import { IAlert } from 'src/application/dtos/IAlert';
import { IAlertRepository } from 'src/application/repositories/IAlertRepository';
import { ICompanyRepository } from 'src/application/repositories/ICompanyRepository';
import { IDateManager } from 'src/infra/providers/DateManager/IDateManager';
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
    @inject('IDateManager')
    private dateManager: IDateManager,
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

    const {
      type,
      cylinderExId,
    } = alert;

    const dateNow = new Date();
    const dateString = this.dateManager.getOnlyDateInfo(dateNow);

    const alertAlreadyCreated = await this.alertRepository
      .findOneByProperties(
        companyId,
        type,
        dateString,
        cylinderExId,
      );

    if (alertAlreadyCreated) {
      throw new ValidationError('Already created alert !');
    }

    alertToCreate.company = companyFound;
    alertToCreate.dayDescription = dateString;
    const alertCreated = await this.alertRepository.create(alertToCreate);

    return alertCreated;
  }
}
