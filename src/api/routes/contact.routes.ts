import express from 'express';
import { sendEmail } from '../controllers/contact.controllers';

const router = express.Router();

router.post('/', sendEmail);


export default router;