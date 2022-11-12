import { container, Lifecycle } from 'tsyringe';
import { FindCylinderIOTUseCase } from '../../application/use-cases/iot/cylinder/FindCylinderIOT';

container.register(
  'IFindCylinderIOTUseCase',
  {
    useClass: FindCylinderIOTUseCase,
  },
  { lifecycle: Lifecycle.Singleton },
);
