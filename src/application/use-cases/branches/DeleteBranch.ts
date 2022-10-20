import { IBranchRepository } from 'src/application/repositories/IBranchRepository';
import { ICompanyRepository } from 'src/application/repositories/ICompanyRepository';
import { inject, injectable } from 'tsyringe';
import { ValidationError } from 'yup';
import { IDeleteBranch } from './IDeleteBranch';

@injectable()
export class DeleteBranchUseCase implements IDeleteBranch {
  constructor(
    @inject('ICompanyRepository')
    private companyRepository: ICompanyRepository,
    @inject('IBranchRepository')
    private branchRepository: IBranchRepository,
  ) {}

  async execute(companyId: string, branchId: string): Promise<boolean> {
    if (!companyId || !branchId) {
      throw new ValidationError('Invalid Parameters');
    }

    const companyFound = await this.companyRepository.findById(companyId);

    if (!companyFound) {
      throw new ValidationError('Company not exist');
    }

    const branchFound = await this.branchRepository.findById(branchId);

    if (!branchFound) {
      throw new ValidationError('Branch not exist');
    }

    await this.branchRepository.delete(branchId);

    return true;
  }
}
