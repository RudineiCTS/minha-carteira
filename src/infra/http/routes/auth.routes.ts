import { Router } from 'express';
import AuthController from '../../../modules/users/controllers/AuthController';

const authenticRoutes = Router();

authenticRoutes.post('/', AuthController.create);

export default authenticRoutes;
