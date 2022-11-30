import { container, Lifecycle } from 'tsyringe';
import { FindAnalyticsByBranchUseCase } from '../../application/use-cases/analytics/branches/FindAnalyticsByBranch';
import { GetCurrentCylinderDataUseCase } from '../../application/use-cases/analytics/GetCurrentCylinderData';
import { CylinderAnalyticsRepository } from '../repository/mongodb/database/CylinderAnalyticsRepository';

container.register(
  'ICylinderAnalyticsRepository',
  {
    useClass: CylinderAnalyticsRepository,
  },
  { lifecycle: Lifecycle.Singleton },
);

container.register(
  'IGetCurrentCylinderDataUseCase',
  {
    useClass: GetCurrentCylinderDataUseCase,
  },
  { lifecycle: Lifecycle.Singleton },
);

container.register(
  'IFindAnalyticsByBranchUseCase',
  {
    useClass: FindAnalyticsByBranchUseCase,
  },
  { lifecycle: Lifecycle.Singleton },
);
