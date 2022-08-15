import { container, Lifecycle } from 'tsyringe';
import { CreateCompany } from '../../application/use-cases/companies/createCompany';
import { FindCompanyById } from '../../application/use-cases/companies/findCompanyById';
import { PubSubImplementation } from '../pubsub/PubSubImplementation';
import CompanyRepository from '../repository/database/CompanyRepository';

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
  'IFindCompanyById',
  {
    useClass: FindCompanyById,
  },
  { lifecycle: Lifecycle.Singleton },
);

container.register(
  'ICreateCompanyRepository',
  {
    useClass: CompanyRepository,
  },
  { lifecycle: Lifecycle.Singleton },
);
