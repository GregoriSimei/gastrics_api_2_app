import { Router } from 'express';
import '../container/index';

import branch from './routes/branch';
import company from './routes/company';
import cylinder from './routes/cylinder';
import employee from './routes/employee';

const routes = Router();

routes.use('/company', company);
routes.use('/company', branch);
routes.use('/company', employee);
routes.use('/company', cylinder);

export { routes };
