import { ICompanyRepository } from 'src/application/repositories/ICompanyRepository';
import { ICylinderRepository } from 'src/application/repositories/ICylinderRepository';
import { inject, injectable } from 'tsyringe';
import { ValidationError } from 'yup';
import { IDeleteCylinder } from './IDeleteCylinder';

@injectable()
export class DeleteCylinderUseCase implements IDeleteCylinder {
  constructor(
    @inject('ICompanyRepository')
    private companyRepoitory: ICompanyRepository,
    @inject('ICylinderRepository')
    private cylinderRepoitory: ICylinderRepository,
  ) {}

  async execute(
    companyId: string,
    branchId: string,
    cylinderId: string,
  ): Promise<boolean> {
    if (!companyId || !branchId || !cylinderId) {
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

    const cylinderFound = branchFound.cylinders?.some((cylinder) => cylinder.id === cylinderId);
    if (!cylinderFound) {
      throw new ValidationError('Cylinder not exist');
    }

    await this.cylinderRepoitory.delete(cylinderId);

    return true;
  }
}
