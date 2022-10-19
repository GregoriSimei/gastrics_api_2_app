import { IBranch } from './IBranch';
import { IDatabaseItem } from './IDatabaseItem';
import { IEmployee } from './IEmployee';

export interface ICompany extends IDatabaseItem {
  name: string;
  cnpj: string;
  branches?: IBranch[];
  employees?: IEmployee[];
}
