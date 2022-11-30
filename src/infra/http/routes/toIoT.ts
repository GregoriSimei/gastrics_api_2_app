import { Router } from 'express';
import { container } from 'tsyringe';
import { CylinderIOTController } from '../controllers/iot/cylinders/CylinderIOTController';

const route = Router();

const cylinderIotController = container.resolve(CylinderIOTController);

route.get('/cylinder', cylinderIotController.findByExId.bind(cylinderIotController));
route.get('/company/cylinder', cylinderIotController.findCompanyByExId.bind(cylinderIotController));

export default route;
