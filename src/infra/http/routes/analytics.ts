import { Router } from 'express';
import { container } from 'tsyringe';
import '../../container/index';
import { AnalyticController } from '../controllers/analytics/AnalyticController';

const route = Router();

const analyticController = container.resolve(AnalyticController);

route.get('/cylinder', analyticController.getDayData.bind(analyticController));
route.get('/branch', analyticController.getAnalyticsFromBranch.bind(analyticController));

export default route;
