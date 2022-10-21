export interface IDeleteEmployee {
    execute(companyId: string, employeeId: string): Promise<boolean>;
}
