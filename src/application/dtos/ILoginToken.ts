import { IEmployeeToToken } from './IEmployeeToToken';

export interface ILoginResponse {
    employee: IEmployeeToToken;
    token: string;
}
