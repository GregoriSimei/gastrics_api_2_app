import { Router } from 'express';
import { container } from 'tsyringe';
import '../../container/index';
import { CylinderController } from '../controllers/cylinders/CylinderController';

const route = Router();

const cylinderController = container.resolve(CylinderController);

route.post('/:companyId/branch/:branchId', cylinderController.create.bind(cylinderController));
route.put('/:companyId/branch/:branchId', cylinderController.update.bind(cylinderController));
route.get('/:companyId/branch/:branchId', cylinderController.get.bind(cylinderController));
route.delete('/:companyId/branch/:branchId', cylinderController.delete.bind(cylinderController));

export default route;
