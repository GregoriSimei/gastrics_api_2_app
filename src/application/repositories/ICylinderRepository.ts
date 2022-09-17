import { ICylinder } from "../dtos/ICylinder";
import { IGenericRepository } from "./IGenericRepository";

export interface ICylinderRepository extends IGenericRepository<ICylinder> {
    findByExId(exId: string): Promise<ICylinder | null>;
}