import { IDayData } from 'src/application/dtos/IDayData';

export interface IGetCurrentCylinderData {
    execute(exId: string): Promise<IDayData | null>;
}
