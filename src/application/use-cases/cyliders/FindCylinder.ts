import { ICylinder } from 'src/application/dtos/ICylinder';
import { injectable } from 'tsyringe';
import { IFindCylinder } from './IFindCylinder';

@injectable()
export class FindCylinderUseCase implements IFindCylinder {
  execute(
    companyId: string,
    branchId: string,
    cilynderId: string,
  ): Promise<ICylinder | ICylinder[] | null> {
    throw new Error('Method not implemented.');
  }
}
