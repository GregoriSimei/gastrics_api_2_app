import { IDatabaseItem } from "./IDatabaseItem";

export interface ICylinder extends IDatabaseItem {
    ex_id: string;
    type: string;
    weight_actual: Boolean;
    weight_full: Boolean;
    weight_shell: Boolean;
}