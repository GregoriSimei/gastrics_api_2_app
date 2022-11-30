import { ICompany } from 'src/application/dtos/ICompany';

export interface IFindCompanyByExId {
    execute(exId: string): Promise<ICompany | null>;
}
