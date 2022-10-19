import { IEmployee } from 'src/application/dtos/IEmployee';

export interface ICreateEmployee {
    execute(employee: IEmployee): Promise<IEmployee>;
}
