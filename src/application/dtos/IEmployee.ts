import { ICompany } from './ICompany';
import { IDatabaseItem } from './IDatabaseItem';

export interface IEmployee extends IDatabaseItem {
    name: string;
    lastName: string;
    type: string;
    birth: Date;
    cpf: string;
    email: string;
    pass: string;
    active?: boolean;
    key?: string;
    company ?: ICompany;
}
