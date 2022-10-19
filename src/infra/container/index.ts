import { container, Lifecycle } from 'tsyringe';
import { PubSubImplementation } from '../pubsub/PubSubImplementation';
import './branch';
import './company';

container.register(
  'IPubSub',
  {
    useClass: PubSubImplementation,
  },
  { lifecycle: Lifecycle.Singleton },
);
