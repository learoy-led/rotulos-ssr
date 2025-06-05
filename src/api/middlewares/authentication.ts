import { Request, Response, NextFunction } from 'express'; 
import User from '../models/user.model';
import { verifyToken } from '../config/jwt';


  interface AuthRequest extends Request {
    user?: any;
  }


export const isAuth = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({message: 'No hay token'});
    }

    const parsedToken: string = token?.replace('Bearer ', '');
    const validToken = verifyToken(parsedToken);
    const userLogued = await User.findById(validToken.email);

    console.log(userLogued)
    //userLogued.password = '';
    req.user = userLogued;
    return next();
  } catch (error) {
    return res.status(401).json('Se ha producido un error iniciando sesión. Por favor, vuelve a intentarlo.');
  }
};
