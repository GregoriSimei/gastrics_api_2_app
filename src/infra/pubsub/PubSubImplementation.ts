import { PubSub } from '@google-cloud/pubsub';
import { pubsubConfig } from '../../config/pubsub';
import AppError from '../../shared/errors/AppError';
import { IPubSub } from './IPubSub';
import { initializePubSubEmulator } from './pubsubEmulator';

export class PubSubImplementation implements IPubSub {
  private pubsub: PubSub;

  constructor() {
    this.pubsub = new PubSub({ projectId: pubsubConfig.projectId });

    if (process.env.NODE_ENV === 'development') {
      initializePubSubEmulator(this.pubsub).then(() => console.info('Initialize emulator done!'));
    }
  }

  async publish(message: any, topicName: string) {
    const dataBuffer = Buffer.from(JSON.stringify(message));
    try {
      const topic = await this.pubsub.topic(topicName);
      const messageId = await topic.publishMessage({ data: dataBuffer });
      return messageId;
    } catch (error: any) {
      throw new AppError(error.message, error, 500);
    }
  }
}
