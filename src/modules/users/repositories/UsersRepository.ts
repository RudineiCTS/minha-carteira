import databaseconnection from '../../../infra/database/mongoose';

interface UserDataDTO {
  name: string;
  email: string;
  password: string;
}

class UsersRepository {
  /* eslint-disable-next-line */
  async add(userDataRequest: UserDataDTO) {
    const userData = userDataRequest;
    const user = await databaseconnection
      .collection('users')
      .insertOne(userData)
      .then(response => {
        return response;
      });

    const userFormatted = {
      /* eslint-disable-next-line */
      id: user.ops[0]._id,
      ...user.ops[0],
    };

    delete userFormatted.password;
    /* eslint-disable-next-line */
    delete userFormatted._id;
    return userFormatted;
  }
  /* eslint-disable-next-line */
  async findByEmail(email: string) {
    const user = await databaseconnection
      .collection('users')
      .findOne({ email });

    return user;
  }
}

export default UsersRepository;
