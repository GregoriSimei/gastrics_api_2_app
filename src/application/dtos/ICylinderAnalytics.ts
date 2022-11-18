import { IDayData } from './IDayData';
import { IWeekData } from './IWeekData';

export interface ICylinderAnalytics {
  _id?: string;
  exId: string;
  weeks: IWeekData[];
  daysData: IDayData[];
}
