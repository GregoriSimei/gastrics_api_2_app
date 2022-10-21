import { ICylinder } from 'src/application/dtos/ICylinder';

export interface IUpdateCylinder {
    execute(companyId: string, branchId: string, cilynder: ICylinder): Promise<ICylinder>;
}
