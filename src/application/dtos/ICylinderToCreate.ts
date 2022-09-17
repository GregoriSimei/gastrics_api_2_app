import { IBranch } from "./IBranch";
import { ICylinder } from "./ICylinder";
import { IDatabaseItem } from "./IDatabaseItem";

export interface ICylinderToCreate extends IDatabaseItem, ICylinder {
    branch: IBranch;
}