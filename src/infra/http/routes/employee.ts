import { Router } from 'express';
import { container } from 'tsyringe';
import '../../container/index';
import { EmployeeController } from '../controllers/employees/EmployeeController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const route = Router();

const employeeController = container.resolve(EmployeeController);

route.post('/:companyId/employee', employeeController.create.bind(employeeController));
route.put('/:companyId/employee', ensureAuthenticated, employeeController.update.bind(employeeController));
route.get('/:companyId/employee', ensureAuthenticated, employeeController.get.bind(employeeController));
route.delete('/:companyId/employee', ensureAuthenticated, employeeController.delete.bind(employeeController));

export default route;
