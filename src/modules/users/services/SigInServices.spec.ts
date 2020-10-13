import UserRepositoryFake from '../repositories/UsersRepositoryfake';
import SigInService from './SigInServices';
import HashProvider from '../providers/HashProvider/model/HashProviderModel';

describe('SigInService', () => {
  it('should be able user login if email and password match', async () => {
    const data = {
      email: 'exist@email.com',
      password: 'any_pass',
    };

    const userRepositoryFake = new UserRepositoryFake();
    const hashProvider = new HashProvider();
    const sigInService = new SigInService(userRepositoryFake, hashProvider);

    const user = await sigInService.execute(data);
    console.log(user);
    expect(user).toHaveProperty('id');
  });
});
