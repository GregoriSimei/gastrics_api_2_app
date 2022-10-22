import { ICylinder } from '../dtos/ICylinder';
import { ICylinderInfo } from '../dtos/ICylinderInfo';
import { IGenericRepository } from './IGenericRepository';

export interface ICylinderRepository extends IGenericRepository<ICylinder> {
    findByExId(exId: string): Promise<ICylinder | null>;
    findCylinderInfoByType(type: string): ICylinderInfo | null;
}
