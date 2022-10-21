import { ICylinder } from 'src/application/dtos/ICylinder';
import { injectable } from 'tsyringe';
import { IUpdateCylinder } from './IUpdateCylinder';

@injectable()
export class UpdateCylinderUseCase implements IUpdateCylinder {
  execute(
    companyId: string,
    branchId: string,
    cilynder: ICylinder,
  ): Promise<ICylinder> {
    throw new Error('Method not implemented.');
  }
}
