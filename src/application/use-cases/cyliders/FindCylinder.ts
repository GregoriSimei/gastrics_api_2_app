import { ICylinder } from 'src/application/dtos/ICylinder';
import { IBranchRepository } from 'src/application/repositories/IBranchRepository';
import { ICompanyRepository } from 'src/application/repositories/ICompanyRepository';
import { ICylinderRepository } from 'src/application/repositories/ICylinderRepository';
import { inject, injectable } from 'tsyringe';
import { IFindCylinder } from './IFindCylinder';

@injectable()
export class FindCylinderUseCase implements IFindCylinder {
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
    cilynderId: string,
  ): Promise<ICylinder | ICylinder[] | null> {
    throw new Error('Method not implemented.');
  }
}
