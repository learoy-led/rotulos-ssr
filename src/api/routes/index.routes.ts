import express from 'express';
import productsRouter from './product.routes';
import categoriesRouter from './category.routes';
import contactRouter from './contact.routes';
import sitemapRouter from './sitemap.routes';
import userRouter from './user.routes';

const router = express.Router();

router.use('/sitemap.xml', sitemapRouter);
router.use('/contact', contactRouter);
router.use('/products', productsRouter);
router.use('/categories', categoriesRouter);
router.use('/users', userRouter);

export default router