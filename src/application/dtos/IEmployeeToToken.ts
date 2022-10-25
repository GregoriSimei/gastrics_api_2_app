import { ICompany } from './ICompany';
import { IDatabaseItem } from './IDatabaseItem';

export interface IEmployeeToToken extends IDatabaseItem {
    name: string;
    lastName: string;
    type: string;
    birth: Date;
    cpf: string;
    email: string;
    company ?: ICompany;
}
