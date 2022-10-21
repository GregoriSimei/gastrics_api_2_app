import { ICylinder } from 'src/application/dtos/ICylinder';
import { IBranchRepository } from 'src/application/repositories/IBranchRepository';
import { ICompanyRepository } from 'src/application/repositories/ICompanyRepository';
import { ICylinderRepository } from 'src/application/repositories/ICylinderRepository';
import { inject, injectable } from 'tsyringe';
import { IUpdateCylinder } from './IUpdateCylinder';

@injectable()
export class UpdateCylinderUseCase implements IUpdateCylinder {
  constructor(
    @inject('ICompanyRepository')
    private companyRepoitory: ICompanyRepository,
    @inject('ICompanyRepository')
    private branchRepoitory: IBranchRepository,
    @inject('ICompanyRepository')
    private cylinderRepoitory: ICylinderRepository,
  ) {}

  execute(
    companyId: string,
    branchId: string,
    cilynder: ICylinder,
  ): Promise<ICylinder> {
    throw new Error('Method not implemented.');
  }
}
