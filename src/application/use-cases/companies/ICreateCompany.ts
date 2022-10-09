import { ICompany } from 'src/application/dtos/ICompany';

export interface ICreateCompany {
  execute(company: ICompany): Promise<ICompany>;
}
