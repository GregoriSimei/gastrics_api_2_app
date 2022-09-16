import { IBranch } from "./IBranch";
import { IDatabaseItem } from "./IDatabaseItem";

export interface IEmployee extends IDatabaseItem {
    name: string;
    last_name: string;
    type: string;
    birth: Date; 
    cpf: string;
    branch: IBranch[];
}