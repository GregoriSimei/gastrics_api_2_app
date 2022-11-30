import { container, Lifecycle } from 'tsyringe';
import { FindCompanyByExId } from '../../application/use-cases/iot/company/FindCompanyByExId';
import { FindCylinderIOTUseCase } from '../../application/use-cases/iot/cylinder/FindCylinderIOT';

container.register(
  'IFindCylinderIOTUseCase',
  {
    useClass: FindCylinderIOTUseCase,
  },
  { lifecycle: Lifecycle.Singleton },
);

container.register(
  'IFindCompanyByExId',
  {
    useClass: FindCompanyByExId,
  },
  { lifecycle: Lifecycle.Singleton },
);
