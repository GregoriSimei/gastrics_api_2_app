import { inject, injectable } from 'tsyringe';
import { IPubSub } from '../../infra/pubsub/IPubSub';
import { ICreateCompany } from './ICreateCompany';

@injectable()
export class CreateCompany implements ICreateCompany {
  constructor(
    @inject('IPubSub')
    private pubSub: IPubSub,
  ) { }

  async execute(company: any): Promise<any> {
    // salvar no firebase
    return {};
  }
}
