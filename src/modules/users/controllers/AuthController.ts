import { Request, Response } from 'express';
// import * as Yup from 'yup';
import BcryptProvider from '../providers/HashProvider/implementations/Bcrypt';
import SigInServices from '../services/SigInServices';
import UserRepository from '../repositories/UsersRepository';
import JwtToken from '../providers/TokenProvider/implementations/JwtToken';

class AuthController {
  async create(request: Request, response: Response) {
    const { email, password } = request.body;

    if (!email) return response.json({ message: 'email is required' });

    if (!password) return response.json({ message: 'password is required' });

    const userRepository = new UserRepository();
    const bcryptProvider = new BcryptProvider();
    const jwtToken = new JwtToken();
    const sigInServices = new SigInServices(
      userRepository,
      bcryptProvider,
      jwtToken,
    );

    const user = await sigInServices.execute({ email, password });

    return response.json(user);
  }
}
export default new AuthController();
