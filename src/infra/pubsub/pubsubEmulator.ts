import { PubSub } from '@google-cloud/pubsub';
import { emulatorConfig } from '../../config/pubsub';

export const initializePubSubEmulator = async (pubsub: PubSub) => {
  const {
    mailTopicName,
    smsTopicName,
    whatsAppTopicName,
  } = emulatorConfig;

  let mailTopic = pubsub.topic(mailTopicName);
  const [mailTopicExists] = await mailTopic.exists();
  if (!mailTopicExists) [mailTopic] = await pubsub.createTopic(mailTopicName);

  let smsTopic = pubsub.topic(smsTopicName);
  const [smsTopicExists] = await smsTopic.exists();
  if (!smsTopicExists) [smsTopic] = await pubsub.createTopic(smsTopicName);

  let whatsAppTopic = pubsub.topic(whatsAppTopicName);
  const [whatsAppTopicExists] = await whatsAppTopic.exists();
  if (!whatsAppTopicExists) [whatsAppTopic] = await pubsub.createTopic(whatsAppTopicName);
};
