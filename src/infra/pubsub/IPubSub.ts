export interface IPubSub {
  publish(message: any, topicName: string): Promise<string>;
}
