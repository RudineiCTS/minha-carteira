import { Request, Response } from 'express';
import BcryptProvider from '../providers/HashProvider/implementations/Bcrypt';
import SigInServices from '../services/SigInServices';
import UserRepository from '../repositories/UsersRepository';
import UserView from '../views/UserView';

class AuthController {
  async create(request: Request, response: Response) {
    const { email, password } = request.body;

    if (!email) return response.json({ message: 'email is required' });

    if (!password) return response.json({ message: 'password is required' });

    const userRepository = new UserRepository();
    const bcryptProvider = new BcryptProvider();
    const sigInServices = new SigInServices(userRepository, bcryptProvider);

    const user = await sigInServices.execute({ email, password });

    return response.json(UserView.render(user));
  }
}
export default new AuthController();
