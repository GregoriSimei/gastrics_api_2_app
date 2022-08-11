import { container, Lifecycle } from 'tsyringe';
import { CreateCompany } from '../../application/use-cases/createCompany';
import { FirebaseImplementation } from '../firebase/FirebaseImplementation';
import { PubSubImplementation } from '../pubsub/PubSubImplementation';

container.register(
  'IPubSub',
  {
    useClass: PubSubImplementation,
  },
  { lifecycle: Lifecycle.Singleton },
);

container.register(
  'ICreateCompany',
  {
    useClass: CreateCompany,
  },
  { lifecycle: Lifecycle.Singleton },
);

container.register(
  'ICreateCompanyRepository',
  {
    useClass: FirebaseImplementation,
  },
  { lifecycle: Lifecycle.Singleton },
);
