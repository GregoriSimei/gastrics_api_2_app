export interface IDeleteCylinder {
    execute(companyId: string, branchId: string, cilynderId: string): Promise<boolean>;
}
