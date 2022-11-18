import { container, Lifecycle } from 'tsyringe';
import { CreateBranchUseCase } from '../../application/use-cases/branches/CreateBranch';
import { DeleteBranchUseCase } from '../../application/use-cases/branches/DeleteBranch';
import { FindBranchUseCase } from '../../application/use-cases/branches/FindBranch';
import { UpdateBranchUseCase } from '../../application/use-cases/branches/UpdateBranch';
import { BranchRepository } from '../repository/postgress/database/BranchRepository';

container.register(
  'IBranchRepository',
  {
    useClass: BranchRepository,
  },
  { lifecycle: Lifecycle.Singleton },
);

container.register(
  'ICreateBranchUseCase',
  {
    useClass: CreateBranchUseCase,
  },
  { lifecycle: Lifecycle.Singleton },
);

container.register(
  'IUpdateBranchUseCase',
  {
    useClass: UpdateBranchUseCase,
  },
  { lifecycle: Lifecycle.Singleton },
);

container.register(
  'IFindBranchUseCase',
  {
    useClass: FindBranchUseCase,
  },
  { lifecycle: Lifecycle.Singleton },
);

container.register(
  'IDeleteBranchUseCase',
  {
    useClass: DeleteBranchUseCase,
  },
  { lifecycle: Lifecycle.Singleton },
);
