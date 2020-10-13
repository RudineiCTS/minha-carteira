import { Router } from 'express';
import UserController from '../../../modules/users/controllers/UserController';

const userController = UserController;
const userRoutes = Router();

userRoutes.post('/', userController.create);

export default userRoutes;
