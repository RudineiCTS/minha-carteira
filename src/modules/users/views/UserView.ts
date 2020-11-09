import UserInterface from '../model/UserInterface';

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render(user: UserInterface) {
    return {
      id: user._id,
      name: user.name,
      email: user.email,
    };
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  renderToken(userDTO: UserInterface, token: string) {
    const user = this.render(userDTO);
    return {
      user,
      token,
    };
  },
};
