import { CylinderTypes } from './CylinderTypes';
import { ICylinderInfo } from './ICylinderInfo';

export type CylinderInfoTypes = {
    [Property in CylinderTypes]: ICylinderInfo;
}
