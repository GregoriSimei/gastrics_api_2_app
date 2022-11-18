import { IDayData } from 'src/application/dtos/IDayData';
import { ICylinderAnalyticsRepository } from 'src/application/repositories/ICylinderAnalytics';
import { IDateManager } from 'src/infra/providers/DateManager/IDateManager';
import { inject, injectable } from 'tsyringe';
import { ValidationError } from 'yup';
import { IGetCurrentCylinderData } from './IGetCurrentCylinderData';

@injectable()
export class GetCurrentCylinderData implements IGetCurrentCylinderData {
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

    const dayDataFound: IDayData | undefined = cylinderAnalyticsFound
      .daysData.find((item) => item.date === onlyStringDate);

    return dayDataFound || null;
  }
}
