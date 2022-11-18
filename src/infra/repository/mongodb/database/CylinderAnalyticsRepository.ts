import { ICylinderAnalytics } from 'src/application/dtos/ICylinderAnalytics';
import { ICylinderAnalyticsRepository } from 'src/application/repositories/ICylinderAnalytics';
import { injectable } from 'tsyringe';
import { CylinderAnalitcsModel } from '../models/CylinderAnalytics';

@injectable()
export class CylinderAnalyticsRepository implements ICylinderAnalyticsRepository {
  constructor(
        private repository = CylinderAnalitcsModel,
  ) {}

  async findByExId(exId: string): Promise<ICylinderAnalytics | null> {
    return this.repository.findOne({ exId });
  }
}
