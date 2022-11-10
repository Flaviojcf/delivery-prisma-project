import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface PayloadProps {
  sub: string;
}

export async function ensureAuthenticateDeliveryman(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ message: 'Token missing' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub } = verify(token,'1e0e091617e2e3356d0d3f602e4becc3') as PayloadProps;
  
    request.id_deliveryman = sub;

    return next();
  } catch (error) {
    console.log(token)
    return response.status(401).json({ message: 'Invalid token!' });
  }
}