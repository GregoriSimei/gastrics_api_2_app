import { IEmployee } from 'src/application/dtos/IEmployee';

export interface IUpdateEmployee {
    execute(companyId: string, employee: IEmployee): Promise<IEmployee>;
}
