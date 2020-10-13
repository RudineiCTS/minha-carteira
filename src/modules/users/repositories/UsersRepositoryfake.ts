interface UserDataDTO {
  id: string;
  name: string;
  email: string;
  password: string;
}

class UsersRepositoryfake {
  async add(userDataRequest: Omit<UserDataDTO, 'id'>): Promise<UserDataDTO> {
    const user = {
      id: 'any_id',
      ...userDataRequest,
    };
    return user;
  }
  /* eslint-disable-next-line */
  async findByEmail(email: string):Promise<UserDataDTO> {
    const user =
      email === 'exist@email.com'
        ? {
            id: 'any_id',
            email,
            password: 'any_password',
          }
        : null;
    return user;
  }
}

export default UsersRepositoryfake;
