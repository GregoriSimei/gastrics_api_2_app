import { IDatabaseItem } from "./IDatabaseItem";
import { IEmployee } from "./IEmployee";

export interface IUser extends IDatabaseItem {
    email: string;
    pass: string;
    active: Boolean;
    key: string;
    employee?: IEmployee;
}