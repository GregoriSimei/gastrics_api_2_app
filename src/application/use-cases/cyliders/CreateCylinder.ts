import { ICylinder } from 'src/application/dtos/ICylinder';
import { injectable } from 'tsyringe';
import { ICreateCylinder } from './ICreateCylinder';

@injectable()
export class CreateCylinderUseCase implements ICreateCylinder {
  execute(
    companyId: string,
    branchId: string,
    cilynder: ICylinder,
  ): Promise<ICylinder> {
    throw new Error('Method not implemented.');
  }
}
