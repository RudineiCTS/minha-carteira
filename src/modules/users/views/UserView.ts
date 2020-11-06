import UserInterface from '../model/UserInterface';

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render(user: UserInterface) {
    return {
      id: user._id,
      name: user.name,
      emai: user.email,
    };
  },
  renderToken(user: UserInterface, token: string) {
    const userFormated = this.render(user);
    return {
      userFormated,
      token,
    };
  },
};
