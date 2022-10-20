import { Router } from 'express';
import { container } from 'tsyringe';
import '../../container/index';
import { BranchController } from '../controllers/branches/BranchController';

const route = Router();

const branchController = container.resolve(BranchController);

route.post('/:companyId/branch', branchController.create.bind(branchController));
route.put('/:companyId/branch', branchController.update.bind(branchController));
route.get('/:companyId/branch', branchController.find.bind(branchController));

export default route;
