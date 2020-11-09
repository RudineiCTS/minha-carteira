import { verify } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface IGetUserAuthRequest extends Request {
  user: string | any;
}

// eslint-disable-next-line
function authenticated(request: IGetUserAuthRequest, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.json({ message: 'Token is not found!' });
  }
  try {
    const [, token] = authHeader.split(' ');
    const decoded = verify(token, String(process.env.KEY_SECRET_TOKEN));

    request.user = {
      id: decoded,
    };
  } catch (err) {
    return response.json('invalid token');
  }

  return next();
}

export default authenticated;
