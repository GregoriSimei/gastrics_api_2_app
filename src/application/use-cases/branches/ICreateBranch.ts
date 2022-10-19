import { IBranch } from 'src/application/dtos/IBranch';

export interface ICreateBranch {
    execute(companyId: string, branch: IBranch): Promise<IBranch>;
}
