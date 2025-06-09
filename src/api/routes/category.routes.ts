import express from 'express';
import {
  getAllCategories,
  getCategoryBySlug,
  createCategory,
  updateCategory,
  deleteCategory
} from '../controllers/category.controllers'

const router = express.Router();



router.get('/', getAllCategories);
router.get('/ping', (req, res) => {
  console.log('📡 Recibida petición a /ping');
  res.json({ status: 'ok' });
});
router.get('/:slug', getCategoryBySlug);
router.post('/', createCategory);
router.put('/:slug', updateCategory);
router.patch('/:slug', updateCategory)
router.delete('/:slug', deleteCategory);

export default router;