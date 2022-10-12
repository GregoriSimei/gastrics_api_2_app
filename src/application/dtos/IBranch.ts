import { ICylinder } from './ICylinder';
import { IDatabaseItem } from './IDatabaseItem';
import { IEmployee } from './IEmployee';

export interface IBranch extends IDatabaseItem {
    name: string;
    address: string;
    employees?: IEmployee[];
    cylinders?: ICylinder[];
}
