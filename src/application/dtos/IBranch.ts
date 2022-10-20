import { ICompany } from './ICompany';
import { ICylinder } from './ICylinder';
import { IDatabaseItem } from './IDatabaseItem';

export interface IBranch extends IDatabaseItem {
    name: string;
    address: string;
    cylinders?: ICylinder[];
    company: ICompany;
}
