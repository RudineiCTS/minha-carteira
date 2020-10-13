import UserRepositoryFake from '../repositories/UsersRepositoryfake';
import SingUpService from './SingUpServices';
import HashProvider from '../providers/HashProvider/model/HashProviderModel';

describe('SignUpService', () => {
  it('should be able to create a new user', async () => {
    const data = {
      name: 'any_user',
      email: 'any_email@email',
      password: 'any_pass',
    };

    const userRepositoryFake = new UserRepositoryFake();
    const hashProvider = new HashProvider();
    const singUpService = new SingUpService(userRepositoryFake, hashProvider);

    const user = await singUpService.execute(data);
    console.log(user);
    expect(user).toHaveProperty('id');
  });
});
