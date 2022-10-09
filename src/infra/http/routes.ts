import { Router } from 'express';
import { container } from 'tsyringe';
import '../container/index';
import { createCompanySchema } from '../yup/createCompanyValidation';
import CreateCompanyController from './controllers/companies/CompanyController';
import { validatePayload } from './middlewares/validatePayload';

const routes = Router();

const companyController = container.resolve(CreateCompanyController);

routes.post(
  '/company',
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

routes.get(
  '/company',
  companyController.get.bind(companyController),
);

export { routes };
