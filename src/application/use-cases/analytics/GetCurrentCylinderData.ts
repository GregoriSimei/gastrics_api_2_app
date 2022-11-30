import { IDayData } from 'src/application/dtos/IDayData';
import { ICylinderAnalyticsRepository } from 'src/application/repositories/ICylinderAnalytics';
import { IDateManager } from 'src/infra/providers/DateManager/IDateManager';
import { inject, injectable } from 'tsyringe';
import { ValidationError } from 'yup';
import { IGetCurrentCylinderData } from './IGetCurrentCylinderData';

@injectable()
export class GetCurrentCylinderDataUseCase implements IGetCurrentCylinderData {
  constructor(
    @inject('IDateManager')
    private dateManager: IDateManager,
    @inject('ICylinderAnalyticsRepository')
    private cylinderAnalyticsRepository: ICylinderAnalyticsRepository,
  ) {}

  async execute(exId: string): Promise<IDayData | null> {
    const cylinderAnalyticsFound = await this.cylinderAnalyticsRepository.findByExId(exId);

    if (!cylinderAnalyticsFound) {
      throw new ValidationError('Id dont has analytics');
    }

    const dateNow = new Date();
    const onlyStringDate = this.dateManager.getOnlyDateInfo(dateNow);

    const { daysData } = cylinderAnalyticsFound;

    let dayDataFound: IDayData | null = null;
    let oldDate = null;

    // eslint-disable-next-line no-restricted-syntax
    for (const dayData of daysData) {
      if (dayData.date === onlyStringDate) {
        dayDataFound = dayData;
        break;
      }

      const actualDateSplited = dayData.date.split('-');
      const actualDay = parseInt(actualDateSplited[2], 10);
      const actualMonth = parseInt(actualDateSplited[1], 10) + 1;
      const actualYear = parseInt(actualDateSplited[0], 10);
      const actualDate = new Date(actualYear, actualMonth, actualDay);

      if (!oldDate) {
        oldDate = actualDate;
        dayDataFound = dayData;
      }

      if (actualDate > oldDate) {
        oldDate = actualDate;
        dayDataFound = dayData;
      }
    }

    return dayDataFound || null;
  }
}
