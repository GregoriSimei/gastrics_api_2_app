import { IDayData } from 'src/application/dtos/IDayData';

export interface IFindAnalyticsByBranch {
    execute(branchId: string): Promise<IDayData[]>;
}
