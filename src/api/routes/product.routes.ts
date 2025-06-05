import express from 'express';
import {
  getAllProducts,
  getProductBySlug,
createProduct,
 updateProduct,
   deleteProduct,
} from '../controllers/product.controllers';
import { uploadImgCloudinary} from '../middlewares/uploadImage';

const router = express.Router();


router.get('/', getAllProducts);
router.get('/:slug', getProductBySlug);
//router.post('/', uploadImgCloudinary.single('image'), createProduct);
router.post('/', uploadImgCloudinary.single('image'), createProduct);
router.put('/:slug', updateProduct)
router.patch('/:slug', uploadImgCloudinary.single('image'), updateProduct)
router.delete('/:slug', deleteProduct);

export default router;