import { ILoginRequest } from 'src/application/dtos/ILoginRequest';
import { ILoginResponse } from 'src/application/dtos/ILoginToken';

export interface ILogin {
    execute(loginRequest: ILoginRequest): Promise<ILoginResponse>
}
