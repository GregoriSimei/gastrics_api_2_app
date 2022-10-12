import { IEmployee } from './IEmployee';
import { IUser } from './IUser';

export interface IUserToCreate extends IUser {
    employee?: IEmployee;
}
