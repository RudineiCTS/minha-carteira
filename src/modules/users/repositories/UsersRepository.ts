import databaseconnection from '../../../infra/database/mongoose';

interface UserDataDTO {
  _id: string;
  name: string;
  email: string;
  password: string;
}

class UsersRepository {
  /* eslint-disable-next-line */
  async add(userDataRequest: Omit<UserDataDTO, '_id'>){
    const userData = userDataRequest;
    const user = await databaseconnection
      .collection('users')
      .insertOne(userData)
      .then(response => {
        return response;
      });

    const userFomated = { ...user.ops[0] };
    return userFomated;
  }
  /* eslint-disable-next-line */
  async findByEmail(email: string):Promise<UserDataDTO | null> {
    const user = await databaseconnection
      .collection('users')
      .findOne({ email });

    return user || null;
  }
}

export default UsersRepository;
