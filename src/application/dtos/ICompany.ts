import { IBranch } from './IBranch';
import { IDatabaseItem } from './IDatabaseItem';

export interface ICompany extends IDatabaseItem {
  name: string;
  cnpj: string;
  branches?: IBranch[];
}
