import { IAlert } from '../dtos/IAlert';
import { IGenericRepository } from './IGenericRepository';

export interface IAlertRepository extends IGenericRepository<IAlert> {
    findAllByCompanyId(companyId: string): Promise<IAlert[]>;
    findOneByProperties(
        companyId: string,
        type: string,
        dayDescription: string,
        cylinderExId: string
    ): Promise<IAlert | null>;
}
