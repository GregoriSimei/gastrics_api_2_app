export const pubsubConfig = Object.freeze({
  projectId: process.env.GCP_PROJECT_ID || '',
});

export const emulatorConfig = Object.freeze({
  mailTopicName: process.env.MAIL_TOPIC_NAME || '',
  smsTopicName: process.env.SMS_TOPIC_NAME || '',
  whatsAppTopicName: process.env.WHATSAPP_TOPIC_NAME || '',
});
