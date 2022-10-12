import { Router } from 'express';
import '../container/index';

import company from './routes/company';
import user from './routes/user';

const routes = Router();

routes.use('/company', company);
routes.use('/user', user);

export { routes };
