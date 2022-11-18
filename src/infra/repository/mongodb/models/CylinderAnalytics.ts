import { model, Schema } from 'mongoose';
import { ICylinderAnalytics } from 'src/application/dtos/ICylinderAnalytics';

const CylinderAnalitcsSchema = new Schema<ICylinderAnalytics>({
  exId: String,
  daysData: [],
  weeks: [],
});

export const CylinderAnalitcsModel = model<ICylinderAnalytics>(
  'CylinderAnalytics',
  CylinderAnalitcsSchema,
  'CylinderAnalytics',
);
