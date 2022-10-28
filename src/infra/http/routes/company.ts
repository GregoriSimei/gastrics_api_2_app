import { Router } from 'express';
import { container } from 'tsyringe';
import '../../container/index';
import { createCompanySchema } from '../../yup/createCompanyValidation';
import CreateCompanyController from '../controllers/companies/CompanyController';
import { validatePayload } from '../middlewares/validatePayload';

const route = Router();

const companyController = container.resolve(CreateCompanyController);

route.post(
  '',
  validatePayload(createCompanySchema),
  companyController.create.bind(companyController),
  /* #swagger.tags = ['Company']
       #swagger.description = 'Create Company on Database'
       #swagger.requestBody = {
        required: true,
        schema: { $ref: "#/definitions/Company" }}
       #swagger.responses[400] = {
        description: 'Verify required parameters.'}
       #swagger.responses[500] = {
        description: 'Error to create company!'}
    */
);

route.get(
  '',
  companyController.get.bind(companyController),
);

route.delete(
  '',
  companyController.delete.bind(companyController),
);

route.put(
  '',
  companyController.update.bind(companyController),
);

export default route;
