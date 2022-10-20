export interface IDeleteBranch {
    execute(companyId: string, branchId: string): Promise<boolean>;
}
