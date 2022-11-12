import { ICylinder } from 'src/application/dtos/ICylinder';

export interface IFindCylinderIOT {
    execute(exId: string): Promise<ICylinder | null>;
}
