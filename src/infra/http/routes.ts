import { Router } from 'express';
import '../container/index';

import company from './routes/company';

const routes = Router();

routes.use('/company', company);

export { routes };
