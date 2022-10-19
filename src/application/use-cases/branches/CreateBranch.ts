import { IBranch } from 'src/application/dtos/IBranch';
import { IBranchRepository } from 'src/application/repositories/IBranchRepository';
import { ICompanyRepository } from 'src/application/repositories/ICompanyRepository';
import { inject, injectable } from 'tsyringe';
import { ValidationError } from 'yup';
import { ICreateBranch } from './ICreateBranch';

@injectable()
export class CreateBranchUseCase implements ICreateBranch {
  constructor(
        @inject('IBranchRepository')
        private branchRepository: IBranchRepository,
        @inject('ICompanyRepository')
        private companyRepository: ICompanyRepository,
  ) {}

  async execute(companyId: string, branch: IBranch): Promise<IBranch> {
    const companyFound = this.companyRepository.findById(companyId);

    if (!companyFound) {
      throw new ValidationError('Company not exist');
    }

    const { address } = branch;

    const branchFound = await this.branchRepository.findByAddress(address);

    if (branchFound) {
      throw new ValidationError('Branch already exist');
    }

    const branchCreated = await this.branchRepository.create(branch);

    return branchCreated;
  }
}
