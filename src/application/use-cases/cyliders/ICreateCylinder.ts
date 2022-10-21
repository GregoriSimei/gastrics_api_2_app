import { ICylinder } from 'src/application/dtos/ICylinder';

export interface ICreateCylinder {
    execute(companyId: string, branchId: string, cilynder: ICylinder): Promise<ICylinder>;
}
