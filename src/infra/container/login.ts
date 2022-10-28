import { container, Lifecycle } from 'tsyringe';
import { LoginUseCase } from '../../application/use-cases/login/Login';

container.register(
  'ILoginUseCase',
  {
    useClass: LoginUseCase,
  },
  { lifecycle: Lifecycle.Singleton },
);
