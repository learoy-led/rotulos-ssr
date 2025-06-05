import express from 'express';
import { getSitemap } from '../controllers/sitemap.controllers';

const router = express.Router();

router.get('/', getSitemap);


export default router;