import { container, Lifecycle } from 'tsyringe';
import { CreateCylinderUseCase } from '../../application/use-cases/cyliders/CreateCylinder';
import { DeleteCylinderUseCase } from '../../application/use-cases/cyliders/DeleteCylinder';
import { FindCylinderUseCase } from '../../application/use-cases/cyliders/FindCylinder';
import { UpdateCylinderUseCase } from '../../application/use-cases/cyliders/UpdateCylinder';
import { CylinderRepository } from '../repository/postgress/database/CylinderRepository';

container.register(
  'ICylinderRepository',
  {
    useClass: CylinderRepository,
  },
  { lifecycle: Lifecycle.Singleton },
);

container.register(
  'ICreateCylinderUseCase',
  {
    useClass: CreateCylinderUseCase,
  },
  { lifecycle: Lifecycle.Singleton },
);

container.register(
  'IFindCylinderUseCase',
  {
    useClass: FindCylinderUseCase,
  },
  { lifecycle: Lifecycle.Singleton },
);

container.register(
  'IDeleteCylinderUseCase',
  {
    useClass: DeleteCylinderUseCase,
  },
  { lifecycle: Lifecycle.Singleton },
);

container.register(
  'IUpdateCylinderUseCase',
  {
    useClass: UpdateCylinderUseCase,
  },
  { lifecycle: Lifecycle.Singleton },
);
