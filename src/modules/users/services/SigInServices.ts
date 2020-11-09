import UserRepository from '../repositories/UsersRepository';
import Bcrypt from '../providers/HashProvider/implementations/Bcrypt';
import UsersRepositoryfake from '../repositories/UsersRepositoryfake';
import TokenProviderModel from '../providers/TokenProvider/model/TokenProviderModel';

interface UserAuthDTO {
  email: string;
  password: string;
}
class SigInServices {
  repository;

  cryptPovider;

  Token;

  constructor(
    Repository: UserRepository | UsersRepositoryfake,
    CryptProvider: Bcrypt,
    jwtToken: TokenProviderModel,
  ) {
    this.repository = Repository;
    this.cryptPovider = CryptProvider;
    this.Token = jwtToken;
  }
  // eslint-disable-next-line
  async execute({ email, password }: UserAuthDTO): Promise<any >   {
    const user = await this.repository.findByEmail(email);

    if (!user) {
      throw Error('email is not found');
    }
    const passwordMatch = await this.cryptPovider.compare(
      password,
      user.password,
    );
    if (!passwordMatch) {
      throw Error('password incorrect');
    }

    const token = await this.Token.generate(String(user._id));

    return { user, token };
  }
}
export default SigInServices;
