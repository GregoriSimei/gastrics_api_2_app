import { container, Lifecycle } from 'tsyringe';
import { CreateCompanyUseCase } from '../../application/use-cases/companies/CreateCompany';
import { FindCompanyUseCase } from '../../application/use-cases/companies/FindCompany';
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
  'ICompanyRepository',
  {
    useClass: CompanyRepository,
  },
  { lifecycle: Lifecycle.Singleton },
);

container.register(
  'ICreateCompanyUseCase',
  {
    useClass: CreateCompanyUseCase,
  },
  { lifecycle: Lifecycle.Singleton },
);

container.register(
  'IFindCompanyUseCase',
  {
    useClass: FindCompanyUseCase,
  },
  { lifecycle: Lifecycle.Singleton },
);
