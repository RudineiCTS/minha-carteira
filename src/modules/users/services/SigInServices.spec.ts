import UserRepositoryFake from '../repositories/UsersRepositoryfake';
import SigInService from './SigInServices';
import HashProvider from '../providers/HashProvider/model/HashProviderModel';
import TokenProviderModel from '../providers/TokenProvider/model/TokenProviderModel';

describe('SigInService', () => {
  it('should be able user login if email and password match', async () => {
    const data = {
      email: 'exist@email.com',
      password: 'any_password',
    };

    const userRepositoryFake = new UserRepositoryFake();
    const hashProvider = new HashProvider();
    const tokenProvider = new TokenProviderModel();
    const sigInService = new SigInService(
      userRepositoryFake,
      hashProvider,
      tokenProvider,
    );

    const user = await sigInService.execute(data);
    console.log(user);
    expect(user).toHaveProperty('token');
  });
});
