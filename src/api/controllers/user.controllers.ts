import { Request, Response, NextFunction } from 'express'; 
import bcrypt from 'bcrypt';
import User from '../models/user.model';
import { signToken } from '../config/jwt';

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({ message: 'No hay usuarios.', error: error });
  }
};

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ message: 'El usuario ya existe.'});
   }
    const newUser = new User(req.body);
    const createdUser = await newUser.save();
    return res.status(201).json(createdUser);
  } catch (error) {
    return res.status(400).json({ message: 'Error al registrar el usuario.', error: error });
  }
};

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userDB = await User.findOne({ email: req.body.email });
    if (!userDB) {
      return res.status(400).json(new Error('El usuario no existe.' + Error ));
    }

    if (bcrypt.compareSync(req.body.password, userDB.password)) {
      const token = signToken(userDB._id.toString());
      return res.status(200).json({ token, userDB });
    }
    return res.status(400).json({ message: 'Por favor, comprueba el email y la contraseña y vuelve a intentarlo.', error: Error });
  } catch (error) {
    return res.status(400).json({ message: 'Por favor, comprueba el email y la contraseña y vuelve a intentarlo.', error: error });
  }
};

export const deregisterUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    return res.status(200).json('Usuario eliminado.');
  } catch (error) {
    return res.status(400).json({ message: 'Error al eliminar el usuario.', error: error });
  }
};


 