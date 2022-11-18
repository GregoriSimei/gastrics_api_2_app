import { container, Lifecycle } from 'tsyringe';
import { CylinderAnalyticsRepository } from '../repository/mongodb/database/CylinderAnalyticsRepository';

container.register(
  'ICylinderAnalyticsRepository',
  {
    useClass: CylinderAnalyticsRepository,
  },
  { lifecycle: Lifecycle.Singleton },
);
