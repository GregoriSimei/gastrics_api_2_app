import { IAlert } from 'src/application/dtos/IAlert';

export interface IFindAlertByCompany {
    execute(companyId: string): Promise<IAlert[]>;
}
