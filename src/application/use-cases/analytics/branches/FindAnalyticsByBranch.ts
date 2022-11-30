import { ICylinderAnalytics } from 'src/application/dtos/ICylinderAnalytics';
import { IDayData } from 'src/application/dtos/IDayData';
import { IBranchRepository } from 'src/application/repositories/IBranchRepository';
import { ICylinderAnalyticsRepository } from 'src/application/repositories/ICylinderAnalytics';
import { IDateManager } from 'src/infra/providers/DateManager/IDateManager';
import { inject, injectable } from 'tsyringe';
import { IFindAnalyticsByBranch } from './IFindAnalyticsByBranch';

@injectable()
export class FindAnalyticsByBranchUseCase implements IFindAnalyticsByBranch {
  constructor(
    @inject('IBranchRepository')
    private branchRepository: IBranchRepository,
    @inject('ICylinderAnalyticsRepository')
    private cylinderAnalyticsRepository: ICylinderAnalyticsRepository,
    @inject('IDateManager')
    private dateManager: IDateManager,
  ) {}

  async execute(branchId: string): Promise<IDayData[]> {
    const branchFound = await this.branchRepository.findById(branchId);

    if (!branchFound) {
      return [];
    }

    const analytics: ICylinderAnalytics[] = [];
    const { cylinders } = branchFound;

    if (!cylinders) {
      return [];
    }
    // eslint-disable-next-line no-restricted-syntax
    for (const cylinder of cylinders) {
      const cylinderExId = cylinder.exId;

      // eslint-disable-next-line no-await-in-loop
      const analyticsFound = await this.cylinderAnalyticsRepository.findByExId(cylinderExId);

      if (analyticsFound) {
        analyticsFound.name = cylinder.name;
        analytics.push(analyticsFound);
      }
    }

    const dateNow = new Date();
    const onlyStringDate = this.dateManager.getOnlyDateInfo(dateNow);
    const daysDataPerCylinder: IDayData[] = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const analytic of analytics) {
      const { daysData, exId, name } = analytic;

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

      if (dayDataFound) {
        dayDataFound.exId = exId;
        dayDataFound.name = name;
        daysDataPerCylinder.push(dayDataFound);
      }
    }

    return daysDataPerCylinder;
  }
}
