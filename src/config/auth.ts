export default {
  jwt: {
    secret: process.env.KEY_SECRET_TOKEN || 'secret',
    expiresIn: process.env.EXPIRES_IN_TOKEN || '1d',
  },
};
