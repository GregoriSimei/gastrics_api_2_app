import { IEmployee } from 'src/application/dtos/IEmployee';

export interface IFindEmployee {
    execute(companyId: string, employeeId: string): Promise<IEmployee[] | IEmployee | null>;
}
