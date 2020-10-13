import { Router } from 'express';
import AuthController from '../../../modules/users/controllers/AuthController';

const authController = AuthController;
const authenticRoutes = Router();

authenticRoutes.post('/', authController.create);

export default authenticRoutes;
