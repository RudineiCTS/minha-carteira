import { sign } from 'jsonwebtoken';

class JwtToken {
  async generate(userId: string): Promise<string> {
    const token = sign({}, String(process.env.KEY_SECRET_TOKEN), {
      subject: String(userId),
      expiresIn: process.env.EXPIRES_IN_TOKEN || '1d',
    });
    console.log(process.env.KEY_SECRET_TOKEN);
    return token;
  }
}
export default JwtToken;
