import { Router } from 'express';
import UserController from '../../../modules/users/controllers/UserController';

const userRoutes = Router();

userRoutes.post('/', UserController.create);

export default userRoutes;
