import { Router } from 'express';
import { container } from 'tsyringe';
import '../../container/index';
import { AlertController } from '../controllers/alerts/AlertController';

const route = Router();

const alertController = container.resolve(AlertController);

route.post('/:companyId/alert', alertController.create.bind(alertController));
route.get('/:companyId/alert', alertController.findByCompany.bind(alertController));

export default route;
