import { container, Lifecycle } from 'tsyringe';
import { CreateCompanyUseCase } from '../../application/use-cases/companies/CreateCompany';
import { DeleteCompanyUseCase } from '../../application/use-cases/companies/DeleteCompany';
import { FindCompanyUseCase } from '../../application/use-cases/companies/FindCompany';
import { UpdateCompanyUseCase } from '../../application/use-cases/companies/UpdateCompany';
import CompanyRepository from '../repository/database/CompanyRepository';

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

container.register(
  'IDeleteCompanyUseCase',
  {
    useClass: DeleteCompanyUseCase,
  },
  { lifecycle: Lifecycle.Singleton },
);

container.register(
  'IUpdateCompanyUseCase',
  {
    useClass: UpdateCompanyUseCase,
  },
  { lifecycle: Lifecycle.Singleton },
);
