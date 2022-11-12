import { Router } from 'express';
import { container } from 'tsyringe';
import { CylinderIOTController } from '../controllers/iot/cylinders/CylinderIOTController';

const route = Router();

const cylinderIotController = container.resolve(CylinderIOTController);

route.get('/cylinder', cylinderIotController.findByExId.bind(cylinderIotController));

export default route;
