import { ICompany } from 'src/application/dtos/ICompany';

export interface IFindCompany {
    execute(id?: string): Promise<ICompany | ICompany[] | null>
}
