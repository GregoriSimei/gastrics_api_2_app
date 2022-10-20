import { IEmployee } from 'src/application/dtos/IEmployee';

export interface ICreateEmployee {
    execute(companyId:string, employee: IEmployee): Promise<IEmployee>;
}
