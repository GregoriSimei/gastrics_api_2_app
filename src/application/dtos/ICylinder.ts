import { IBranch } from './IBranch';
import { IDatabaseItem } from './IDatabaseItem';

export interface ICylinder extends IDatabaseItem {
    exId: string;
    name: string;
    gasType: string;
    type: string;
    maxWeight: number;
    weightShell: number;
    branch: IBranch;
    alertWhen: number;
}
