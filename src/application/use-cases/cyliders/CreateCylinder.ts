import { ICylinder } from 'src/application/dtos/ICylinder';
import { ICompanyRepository } from 'src/application/repositories/ICompanyRepository';
import { ICylinderRepository } from 'src/application/repositories/ICylinderRepository';
import { inject, injectable } from 'tsyringe';
import { ValidationError } from 'yup';
import { ICreateCylinder } from './ICreateCylinder';

@injectable()
export class CreateCylinderUseCase implements ICreateCylinder {
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
    if (!companyId || !branchId || !cylinder) {
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

    const cylinderFound = await this.cylinderRepoitory.findByExId(cylinder.exId);
    if (cylinderFound) {
      throw new ValidationError('Cylinder already created');
    }

    const cylinderTypeInfo = this.cylinderRepoitory.findCylinderInfoByType(cylinder.type);
    if (!cylinderTypeInfo) {
      throw new ValidationError('Type not exist');
    }

    const { type, weightShell, maxWeight } = cylinderTypeInfo;

    const cylinderToCreate = cylinder;
    cylinderToCreate.branch = branchFound;
    cylinderToCreate.type = type;
    cylinderToCreate.weightShell = weightShell;
    cylinderToCreate.maxWeight = maxWeight;
    delete cylinderToCreate.id;

    const cylinderCreated = await this.cylinderRepoitory.create(cylinderToCreate);

    return cylinderCreated;
  }
}
