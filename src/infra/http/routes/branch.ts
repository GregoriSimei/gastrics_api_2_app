import { Router } from 'express';
import { container } from 'tsyringe';
import '../../container/index';
import { BranchController } from '../controllers/branches/BranchController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const route = Router();

const branchController = container.resolve(BranchController);

route.post('/:companyId/branch', ensureAuthenticated, branchController.create.bind(branchController));
route.put('/:companyId/branch', ensureAuthenticated, branchController.update.bind(branchController));
route.get('/:companyId/branch', ensureAuthenticated, branchController.find.bind(branchController));
route.delete('/:companyId/branch', ensureAuthenticated, branchController.delete.bind(branchController));

export default route;
