import { Router } from 'express';
import { container } from 'tsyringe';
import '../../container/index';
import { EmployeeController } from '../controllers/employees/EmployeeController';

const route = Router();

const employeeController = container.resolve(EmployeeController);

route.post('/:companyId/employee', employeeController.create.bind(employeeController));

export default route;
