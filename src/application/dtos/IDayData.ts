export interface IDayData {
  date: string;
  weight: number;
  weightAVG: number;
  cylinderWeight: number;
  consumption: number;
  consumptionAVG: number;
  consumptionTot: number;
  percentWeight: number;
  hoursLeft: number;
  iteration: number;
  updatedAt: Date;
  exId?: string;
  name?: string;
}
