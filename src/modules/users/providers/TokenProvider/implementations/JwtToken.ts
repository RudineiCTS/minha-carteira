import { sign } from 'jsonwebtoken';
import authToken from '../../../../../config/auth';

class JwtToken {
  async generate(userId: string): Promise<string> {
    const token = sign({}, String(authToken.jwt.secret), {
      subject: String(userId),
      expiresIn: authToken.jwt.expiresIn || '1d',
    });
    console.log(process.env.KEY_SECRET_TOKEN);
    return token;
  }
}
export default JwtToken;
