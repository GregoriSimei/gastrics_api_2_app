import { ICompany } from '../dtos/ICompany';

export interface ICompanyRepository {
  create(company: ICompany): Promise<any>;
  delete(id: string): Promise<void>;
  update(id: string, data: object): Promise<ICompany>;
  findById(id: string): Promise<ICompany | null>;
}
