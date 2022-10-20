import { IBranch } from 'src/application/dtos/IBranch';

export interface IFindBranch {
    execute(companyId: string, branchId: string): Promise<IBranch[] | IBranch | null>;
}
