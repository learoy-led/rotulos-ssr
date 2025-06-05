import express from 'express';
const router = express.Router();

import {
  getAllUsers,
  registerUser,
  loginUser,
  deregisterUser
} from '../controllers/user.controllers';

import { isAuth } from '../middlewares/authentication';

router.get('/', [isAuth], getAllUsers);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.delete('/:id', [isAuth], deregisterUser);

export default router;