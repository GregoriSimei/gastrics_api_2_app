import { ICylinderAnalytics } from '../dtos/ICylinderAnalytics';

export interface ICylinderAnalyticsRepository {
    findByExId(exId: string): Promise<ICylinderAnalytics | null>;
}
