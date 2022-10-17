/* eslint-disable import/first */
import * as dotenv from 'dotenv';
import 'reflect-metadata';
import './infra/repository/database/typeORMClient';

dotenv.config();

import express from 'express';
import 'express-async-errors';
import { errorHandler } from './infra/http/middlewares/errorHandler';
import useSwagger from './infra/http/middlewares/swagger';
import { routes } from './infra/http/routes';

export const app = express();
app.use(express.json());
app.use('/gastrics/api', routes);
app.use('/gastrics', express.static('public'));
useSwagger('/gastrics/api-docs', app);
app.all('/gastrics', (_, res) => res.redirect('/gastrics/api-docs'));
app.use(errorHandler);
