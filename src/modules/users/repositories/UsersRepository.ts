import databaseconnection from '../../../infra/database/mongoose';
import UserInterface from '../model/UserInterface';

class UsersRepository {
  async add(
    userDataRequest: Omit<UserInterface, '_id'>,
  ): Promise<UserInterface> {
    const userData = userDataRequest;
    const user = await databaseconnection
      .collection('users')
      .insertOne(userData);

    const userFomated = { ...user.ops[0] };
    return userFomated;
  }

  async findByEmail(email: string): Promise<UserInterface | null> {
    const user = await databaseconnection
      .collection('users')
      .findOne({ email });

    return user || null;
  }
}

export default UsersRepository;
