import { Router } from 'express';
import { container } from 'tsyringe';
import '../../container/index';
import { AnalyticController } from '../controllers/analytics/AnalyticController';

const route = Router();

const analyticController = container.resolve(AnalyticController);

route.post('/cylinder', analyticController.getDayData.bind(analyticController));

export default route;
