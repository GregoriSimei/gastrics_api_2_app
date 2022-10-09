import { container, Lifecycle } from 'tsyringe';
import { CreateCompany } from '../../application/use-cases/companies/createCompany';
import { PubSubImplementation } from '../pubsub/PubSubImplementation';

container.register(
  'IPubSub',
  {
    useClass: PubSubImplementation,
  },
  { lifecycle: Lifecycle.Singleton },
);

container.register(
  'ICompanyRepository',
  {
    useClass: CreateCompany,
  },
  { lifecycle: Lifecycle.Singleton },
);
