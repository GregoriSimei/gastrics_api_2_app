import { injectable } from 'tsyringe';
import { IDeleteCylinder } from './IDeleteCylinder';

@injectable()
export class DeleteCylinderUseCase implements IDeleteCylinder {
  execute(
    companyId: string,
    branchId: string,
    cilynderId: string,
  ): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
