import { IDatabaseItem } from './IDatabaseItem';

export interface IUser extends IDatabaseItem {
    email: string;
    pass: string;
    active: boolean;
    key: string;
}
