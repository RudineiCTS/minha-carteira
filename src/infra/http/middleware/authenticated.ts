import { verify } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

// eslint-disable-next-line
function authenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.json({ message: 'Token is not found!' });
  }
  return next();
}

export default authenticated;
