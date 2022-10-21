import { container, Lifecycle } from 'tsyringe';
import { CreateEmployeeUseCase } from '../../application/use-cases/employees/CreateEmployee';
import { DeleteEmployeeUseCase } from '../../application/use-cases/employees/DeleteEmployee';
import { FindEmployeeUseCase } from '../../application/use-cases/employees/FindEmployee';
import { UpdateEmployeeUseCase } from '../../application/use-cases/employees/UpdateEmployee';
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

container.register(
  'IUpdateEmployeeUseCase',
  {
    useClass: UpdateEmployeeUseCase,
  },
  { lifecycle: Lifecycle.Singleton },
);

container.register(
  'IFindEmployeeUseCase',
  {
    useClass: FindEmployeeUseCase,
  },
  { lifecycle: Lifecycle.Singleton },
);

container.register(
  'IDeleteEmployeeUseCase',
  {
    useClass: DeleteEmployeeUseCase,
  },
  { lifecycle: Lifecycle.Singleton },
);
