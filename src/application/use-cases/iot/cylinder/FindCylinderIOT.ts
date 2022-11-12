import { ICylinder } from 'src/application/dtos/ICylinder';
import { ICylinderRepository } from 'src/application/repositories/ICylinderRepository';
import { inject, injectable } from 'tsyringe';
import { IFindCylinderIOT } from './IFindCylinderIOT';

@injectable()
export class FindCylinderIOTUseCase implements IFindCylinderIOT {
  constructor(
    @inject('ICylinderRepository')
    private cylinderRepository: ICylinderRepository,
  ) {}

  async execute(exId: string): Promise<ICylinder | null> {
    const cylinderFound = await this.cylinderRepository.findByExId(exId);
    return cylinderFound;
  }
}
