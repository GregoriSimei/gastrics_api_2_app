import { container, Lifecycle } from 'tsyringe';
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
