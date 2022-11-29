import { container, Lifecycle } from 'tsyringe';
import { AlertRepository } from '../repository/postgress/database/AlertRepository';

container.register(
  'IAlertRepository',
  {
    useClass: AlertRepository,
  },
  { lifecycle: Lifecycle.Singleton },
);
