import { Router } from 'express';
import '../container/index';

import branch from './routes/branch';
import company from './routes/company';

const routes = Router();

routes.use('/company', company);
routes.use('/branch', branch);

export { routes };
