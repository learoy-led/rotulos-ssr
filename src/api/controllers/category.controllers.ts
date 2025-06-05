import { Request, Response, NextFunction } from 'express'; 
import Category from '../models/category.model';


export const getAllCategories = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categories = await Category.find().populate('products');
    return res.status(200).json(categories);
  } catch (error) {
    return next(new Error('Categorías no encontradas' + error));
  }
};

export const createCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newCategory = new Category(req.body);
    const createdCategory = await newCategory.save();
    return res.status(200).json(createdCategory);
  } catch (error) {
    return next(new Error('Error al añadir la categoría' + error));
  }
};

export const getCategoryBySlug = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const category = await Category.findOne({ slug: req.params['slug'] }).populate('products');
    return res.status(200).json(category);
  } catch (error) {
    return next(new Error('Categoría no encontrada' + error));
  }
};


export const updateCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { products, ...otherFields } = req.body;    
   const updateQuery = { ...otherFields };
   
      const updatedCategory = await Category.findOneAndUpdate(
        { slug: req.body.slug },
        updateQuery,
        { new: true}
      ).populate('products');
      console.log('updatedCategory', updatedCategory)
    
   return res.status(200).json(updatedCategory);
  } catch (error) {
    console.log(error)
    return next(new Error('Categoría no encontrada' + error))
  }
};




export const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const deletedCategory = await Category.findOneAndDelete({ slug: req.params['slug'] });
    return res.status(200).json('Categoría eliminada');
  } catch (error) {
    return next(new Error('Categoría no encontrada' + error));
  }
};

