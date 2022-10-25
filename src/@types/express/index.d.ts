import { IEmployeeToToken } from 'src/application/dtos/IEmployeeToToken';

declare global {
    namespace Express {
        export interface Request {
            employee: IEmployeeToToken
        }
    }
}
