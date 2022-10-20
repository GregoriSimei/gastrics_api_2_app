import { container, Lifecycle } from 'tsyringe';
import { CreateEmployeeUseCase } from '../../application/use-cases/employees/CreateEmployee';
import { EmployeeRepository } from '../repository/database/EmployeeRepository';

container.register(
  'IEmployeeRepository',
  {
    useClass: EmployeeRepository,
  },
  { lifecycle: Lifecycle.Singleton },
);

container.register(
  'ICreateEmployeeUseCase',
  {
    useClass: CreateEmployeeUseCase,
  },
  { lifecycle: Lifecycle.Singleton },
);
