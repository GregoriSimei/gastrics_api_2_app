import { ICylinder } from 'src/application/dtos/ICylinder';
import { ICompanyRepository } from 'src/application/repositories/ICompanyRepository';
import { ICylinderRepository } from 'src/application/repositories/ICylinderRepository';
import { inject, injectable } from 'tsyringe';
import { ValidationError } from 'yup';
import { IUpdateCylinder } from './IUpdateCylinder';

@injectable()
export class UpdateCylinderUseCase implements IUpdateCylinder {
  constructor(
    @inject('ICompanyRepository')
    private companyRepoitory: ICompanyRepository,
    @inject('ICylinderRepository')
    private cylinderRepoitory: ICylinderRepository,
  ) {}

  async execute(
    companyId: string,
    branchId: string,
    cylinder: ICylinder,
  ): Promise<ICylinder> {
    if (!companyId || !branchId || !cylinder || !cylinder?.id) {
      throw new ValidationError('Invalid Parameter');
    }

    const companyFound = await this.companyRepoitory.findById(companyId);
    if (!companyFound) {
      throw new ValidationError('Company not exist');
    }

    const branchFound = companyFound.branches?.find((branch) => branch.id === branchId);
    if (!branchFound) {
      throw new ValidationError('Branch not exist');
    }

    const cylinderFound = branchFound.cylinders?.find((bCylinder) => bCylinder.id === cylinder.id);
    if (!cylinderFound) {
      throw new ValidationError('Cylinder not exist');
    }

    const cylinderTypeInfo = this.cylinderRepoitory.findCylinderInfoByType(cylinder.type);
    if (!cylinderTypeInfo) {
      throw new ValidationError('Type not exist');
    }

    const cylinderToUpdate: ICylinder = {
      ...cylinder,
      branch: branchFound,
      exId: cylinderFound.exId,
      type: cylinderTypeInfo.type,
      weightShell: cylinderTypeInfo.weightShell,
      created_at: cylinderFound.created_at,
    };

    const cylinderUpdated = await this.cylinderRepoitory.update(cylinder.id, cylinderToUpdate);
    if (!cylinderUpdated) {
      throw new Error('Error to update Cylinder');
    }

    return cylinderUpdated;
  }
}
