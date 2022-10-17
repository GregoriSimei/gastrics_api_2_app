import { container, Lifecycle } from 'tsyringe';
import { EmployeeRepository } from '../repository/database/EmployeeRepository';

container.register(
  'IEmployeeRepository',
  {
    useClass: EmployeeRepository,
  },
  { lifecycle: Lifecycle.Singleton },
);
