import { IAlert } from 'src/application/dtos/IAlert';

export interface ICreateAlert {
    execute(companyId: string, alert: IAlert): Promise<IAlert>;
}
