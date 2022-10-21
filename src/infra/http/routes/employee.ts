import { Router } from 'express';
import { container } from 'tsyringe';
import '../../container/index';
import { EmployeeController } from '../controllers/employees/EmployeeController';

const route = Router();

const employeeController = container.resolve(EmployeeController);

route.post('/:companyId/employee', employeeController.create.bind(employeeController));
route.put('/:companyId/employee', employeeController.update.bind(employeeController));
route.get('/:companyId/employee', employeeController.get.bind(employeeController));

export default route;
