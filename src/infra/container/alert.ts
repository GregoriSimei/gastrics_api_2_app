import { container, Lifecycle } from 'tsyringe';
import { CreateAlertUseCase } from '../../application/use-cases/alerts/CreateAlert';
import { FindAlertByCompanyUseCase } from '../../application/use-cases/alerts/FindAlertByCompany';
import { AlertRepository } from '../repository/postgress/database/AlertRepository';

container.register(
  'IAlertRepository',
  {
    useClass: AlertRepository,
  },
  { lifecycle: Lifecycle.Singleton },
);

container.register(
  'ICreateAlertUseCase',
  {
    useClass: CreateAlertUseCase,
  },
  { lifecycle: Lifecycle.Singleton },
);

container.register(
  'IFindAlertByCompanyUseCase',
  {
    useClass: FindAlertByCompanyUseCase,
  },
  { lifecycle: Lifecycle.Singleton },
);
