interface UserDataDTO {
  _id?: string;
  name: string;
  email: string;
  password: string;
}

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render(user: UserDataDTO) {
    return {
      id: user._id,
      name: user.name,
      emai: user.email,
    };
  },
};
