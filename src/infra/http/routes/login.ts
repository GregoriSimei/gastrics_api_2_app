import { Router } from 'express';
import { container } from 'tsyringe';
import { LoginController } from '../controllers/login/LoginController';

const route = Router();

const loginController = container.resolve(LoginController);

route.post('', loginController.login.bind(loginController));

export default route;
