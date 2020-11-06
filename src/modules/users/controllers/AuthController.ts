import { Request, Response } from 'express';
// import * as Yup from 'yup';
import BcryptProvider from '../providers/HashProvider/implementations/Bcrypt';
import SigInServices from '../services/SigInServices';
import UserRepository from '../repositories/UsersRepository';
import JwtToken from '../providers/TokenProvider/implementations/JwtToken';
import UserView from '../views/UserView';

class AuthController {
  async create(request: Request, response: Response) {
    const { email, password } = request.body;

    // const schema = Yup.object().shape({
    //   email: Yup.string().required(),
    //   password: Yup.string().required(),
    // });

    // await schema.validate(
    //   { email, password },
    //   {
    //     abortEarly: false,
    //   },
    // );

    if (!email) return response.json({ message: 'email is required' });

    if (!password) return response.json({ message: 'password is required' });

    try {
      const userRepository = new UserRepository();
      const bcryptProvider = new BcryptProvider();
      const jwtToken = new JwtToken();
      const sigInServices = new SigInServices(
        userRepository,
        bcryptProvider,
        jwtToken,
      );

      const { user, token } = await sigInServices.execute({ email, password });

      return response.json(UserView.renderToken(user, token));
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}
export default new AuthController();
