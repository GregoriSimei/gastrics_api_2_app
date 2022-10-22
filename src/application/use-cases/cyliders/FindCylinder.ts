import { ICylinder } from 'src/application/dtos/ICylinder';
import { ICompanyRepository } from 'src/application/repositories/ICompanyRepository';
import { inject, injectable } from 'tsyringe';
import { ValidationError } from 'yup';
import { IFindCylinder } from './IFindCylinder';

@injectable()
export class FindCylinderUseCase implements IFindCylinder {
  constructor(
    @inject('ICompanyRepository')
    private companyRepoitory: ICompanyRepository,
  ) {}

  async execute(
    companyId: string,
    branchId: string,
    cylinderId: string,
  ): Promise<ICylinder | ICylinder[] | null> {
    if (!companyId || !branchId) {
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

    if (cylinderId) {
      const cylinderFound = branchFound.cylinders?.find((cylinder) => cylinder.id === cylinderId);
      return cylinderFound || null;
    }

    return branchFound.cylinders || [];
  }
}
