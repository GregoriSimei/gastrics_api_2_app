import { IBranchRepository } from 'src/application/repositories/IBranchRepository';
import { ICompanyRepository } from 'src/application/repositories/ICompanyRepository';
import { ICylinderRepository } from 'src/application/repositories/ICylinderRepository';
import { inject, injectable } from 'tsyringe';
import { IDeleteCylinder } from './IDeleteCylinder';

@injectable()
export class DeleteCylinderUseCase implements IDeleteCylinder {
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
  ): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
