import { Router } from 'express';
import { container } from 'tsyringe';
import '../../container/index';
import { UserController } from '../controllers/users/UserController';

const route = Router();

const userController = container.resolve(UserController);

export default route;
