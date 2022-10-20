import { IBranch } from 'src/application/dtos/IBranch';

export interface IUpdateBranch {
    execute(companyId: string, branch: IBranch): Promise<IBranch>;
}
