import { IBranch } from 'src/application/dtos/IBranch';
import { IBranchRepository } from 'src/application/repositories/IBranchRepository';
import { ICompanyRepository } from 'src/application/repositories/ICompanyRepository';
import { inject, injectable } from 'tsyringe';
import { ValidationError } from 'yup';
import { IFindBranch } from './IFindBranch';

@injectable()
export class FindBranchUseCase implements IFindBranch {
  constructor(
      @inject('ICompanyRepository')
      private companyRepository: ICompanyRepository,
      @inject('IBranchRepository')
      private branchRepository: IBranchRepository,
  ) {}

  async execute(companyId: string, branchId: string): Promise<IBranch[] | IBranch | null> {
    if (!companyId) {
      throw new ValidationError('Invalid Parameters');
    }

    const companyFound = await this.companyRepository.findById(companyId);

    if (!companyFound) {
      throw new ValidationError('Company not exist');
    }

    if (branchId) {
      const branchIsInsideCompany = companyFound.branches?.some((branch) => branch.id === branchId);
      if (!branchIsInsideCompany) {
        throw new ValidationError('Branch not exist');
      }

      const branchFound = await this.branchRepository.findById(branchId);
      return branchFound || null;
    }

    return companyFound.branches || [];
  }
}
