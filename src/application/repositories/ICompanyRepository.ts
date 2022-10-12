import { ICompany } from '../dtos/ICompany';
import { IGenericRepository } from './IGenericRepository';

export interface ICompanyRepository extends IGenericRepository<ICompany> {
  findByCPNJ(cnpj: string): Promise<ICompany | null>;
  deleteByCNPJ(cnpj: string): Promise<ICompany>;
}
