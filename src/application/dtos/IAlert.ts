import { ICompany } from './ICompany';
import { IDatabaseItem } from './IDatabaseItem';

export interface IAlert extends IDatabaseItem {
    name: string;
    type: string;
    status: string;
    cylinderExId: string;
    company?: ICompany;
}
