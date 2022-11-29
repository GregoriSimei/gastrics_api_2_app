import { Router } from 'express';
import '../container/index';

import alert from './routes/alert';
import analytics from './routes/analytics';
import branch from './routes/branch';
import company from './routes/company';
import cylinder from './routes/cylinder';
import employee from './routes/employee';
import login from './routes/login';
import iot from './routes/toIoT';

const routes = Router();

routes.use('/company', company);
routes.use('/company', branch);
routes.use('/company', employee);
routes.use('/company', cylinder);
routes.use('/company', alert);
routes.use('/login', login);
routes.use('/iot', iot);
routes.use('/analytics', analytics);

export { routes };

