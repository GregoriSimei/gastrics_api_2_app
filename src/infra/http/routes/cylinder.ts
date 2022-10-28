import { Router } from 'express';
import { container } from 'tsyringe';
import '../../container/index';
import { CylinderController } from '../controllers/cylinders/CylinderController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const route = Router();

const cylinderController = container.resolve(CylinderController);

route.post('/:companyId/branch/:branchId/cylinder', ensureAuthenticated, cylinderController.create.bind(cylinderController));
route.put('/:companyId/branch/:branchId/cylinder', ensureAuthenticated, cylinderController.update.bind(cylinderController));
route.get('/:companyId/branch/:branchId/cylinder', ensureAuthenticated, cylinderController.get.bind(cylinderController));
route.delete('/:companyId/branch/:branchId/cylinder', ensureAuthenticated, cylinderController.delete.bind(cylinderController));

export default route;
