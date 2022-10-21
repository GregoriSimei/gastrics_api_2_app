import { ICylinder } from 'src/application/dtos/ICylinder';

export interface IFindCylinder {
    execute(
        companyId: string,
        branchId: string,
        cilynderId: string,
    ): Promise<ICylinder[] | ICylinder | null>;
}
