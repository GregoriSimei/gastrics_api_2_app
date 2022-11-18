import { container, Lifecycle } from 'tsyringe';
import { DateManager } from '../providers/DateManager/DateManager';

container.register(
  'IDateManager',
  {
    useClass: DateManager,
  },
  { lifecycle: Lifecycle.Singleton },
);
