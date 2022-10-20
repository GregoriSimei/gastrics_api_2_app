import { IBranch } from 'src/application/dtos/IBranch';
import { IBranchRepository } from 'src/application/repositories/IBranchRepository';
import { ICompanyRepository } from 'src/application/repositories/ICompanyRepository';
import { inject, injectable } from 'tsyringe';
import { ValidationError } from 'yup';
import { IUpdateBranch } from './IUpdateBranch';

@injectable()
export class UpdateBranchUseCase implements IUpdateBranch {
  constructor(
        @inject('IBranchRepository')
        private branchRepository: IBranchRepository,
        @inject('ICompanyRepository')
        private companyRepository: ICompanyRepository,
  ) {}

  async execute(companyId: string, branch: IBranch): Promise<IBranch> {
    const { id } = branch;

    if (!companyId || !branch || !id) {
      throw new ValidationError('Invalid parameters');
    }

    const branchToUpdate = branch;
    const companyFound = await this.companyRepository.findById(companyId);

    if (!companyFound) {
      throw new ValidationError('Company not exist');
    }

    const branchFound = await this.branchRepository.findById(id);

    if (!branchFound) {
      throw new ValidationError('Branch not found');
    }

    if (companyId !== branchFound.company.id) {
      throw new ValidationError('Branch not found');
    }

    const branchUpdated = await this.branchRepository.update(id, branchToUpdate);

    if (!branchUpdated) {
      throw new Error('Error to update');
    }

    return branchUpdated;
  }
}
