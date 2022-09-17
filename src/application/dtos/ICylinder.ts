import { IDatabaseItem } from "./IDatabaseItem";

export interface ICylinder extends IDatabaseItem {
    ex_id: string;
    type: string;
    weight_actual: number;
    weight_full: number;
    weight_shell: number;
}