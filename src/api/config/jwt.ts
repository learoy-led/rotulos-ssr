import jwt, { JwtPayload } from 'jsonwebtoken';

const SECRET = process.env['JWT_SECRET']

if (!SECRET) {
  throw new Error('⚠️ La variable de entorno SECRET no está definida');
}

interface TokenPayload extends JwtPayload {
  email: string;
}


export const signToken = (email: string): string => {
 return jwt.sign( {email}, SECRET, { expiresIn: 60 * 60 });
};

export const verifyToken = (token: string): TokenPayload => {
  return jwt.verify(token, SECRET) as TokenPayload;
};