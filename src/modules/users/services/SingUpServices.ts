import UsersRepository from '../repositories/UsersRepository';
import UsersRepositoryfake from '../repositories/UsersRepositoryfake';
import Bcrypt from '../providers/HashProvider/implementations/Bcrypt';
import UserInterface from '../model/UserInterface';

interface UserDataDTO {
  name: string;
  email: string;
  password: string;
}

class SingUpServices {
  userRepository;

  cryptProvider;

  constructor(
    UserRepository: UsersRepository | UsersRepositoryfake,
    CryptProvider: Bcrypt,
  ) {
    this.userRepository = UserRepository;
    this.cryptProvider = CryptProvider;
  }
  /* eslint-disable-next-line */
  async execute({ name, email, password }: UserDataDTO) {
    const emailAlreadyUsed = await this.userRepository.findByEmail(email);
    console.log(emailAlreadyUsed);

    // aqui verifica se houve retorno na função 'findByEmail'
    if (emailAlreadyUsed) {
      // se houve retorno, quer dizer que já existe o email registrado
      return { message: 'Já existe esse email' };
    }

    const passwordHashed = await this.cryptProvider.hash(password);

    // se não houve retorno, o usuário será adicionado no banco
    const user = await this.userRepository.add({
      name,
      email,
      password: passwordHashed,
    });

    return user;
  }
}
export default SingUpServices;
