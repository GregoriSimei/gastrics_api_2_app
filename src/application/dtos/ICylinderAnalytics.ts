import { IDayData } from './IDayData';
import { IWeekData } from './IWeekData';

export interface ICylinderAnalytics {
  _id?: string;
  exId: string;
  name?: string;
  weeks: IWeekData[];
  daysData: IDayData[];
}
