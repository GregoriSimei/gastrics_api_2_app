import { ICompany } from 'src/application/dtos/ICompany';

export interface IUpdateCompany {
    execute(company: ICompany): Promise<ICompany>;
}
