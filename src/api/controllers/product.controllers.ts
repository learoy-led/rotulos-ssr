import { Request, Response, NextFunction } from 'express'; 
import Product from '../models/product.model';
//import { deleteImgCloudinary } from '../../middlewares/uploadImg-middleware';

export const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (error) {
    return next(new Error('No se han encontrado productos' + error));
  }
}

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  console.log('se crea', req.body, req.file?.path)
 try {
   if (!Array.isArray(req.body)) {
     const newProduct = new Product(req.body);

 if (req.file) {
       newProduct.images = req.file.path;
     }

     const createdProduct = await newProduct.save();

   return res.status(201).json(createdProduct);
  } else {
    const products = await Product.insertMany(req.body);
    return res.status(201).json(products);
  }
   } catch (error) {
    return next(new Error('Error al añadir el/los productos' + error));
  }
 };


 export const getProductBySlug = async (req: Request, res: Response, next: NextFunction) => {
  try {
  const product = await Product.findOne( { slug: req.params['slug'] });
   return res.status(200).json(product);
} catch (error) {
  return next(new Error('Producto no encontrado' + error));
    }
 };

 export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const { images, ...otherFields } = req.body;

    const updateQuery: any = {};

    if (Object.keys(otherFields).length > 0) {
      updateQuery.$set = otherFields;
    }

    if (images && Array.isArray(images)) {
      updateQuery.$addToSet = {
        images: { $each: images },
      };
    }

    const updatedProduct = await Product.findOneAndUpdate(
      { slug: req.params['slug'] }, 
      updateQuery, 
      {
      new: true
    });
    return res.status(200).json(updatedProduct);
  } catch (error) {
    return next(new Error('Error al actualizar el producto' + error));
  }
};


export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const deletedProduct = await Product.findOneAndDelete({ slug: req.params['slug'] });

   //deleteImgCloudinary(deletedProduct.image);

    return res.status(200).json('Producto eliminado');
  } catch (error) {
    return next(new Error('Producto no encontrado' + error));
  }
};

// export const uploadProductImg = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { id } = req.params;
//     if (req.file) {
//       const originalProduct = await Product.findById(id);
     
//       if (originalProduct.image) {
//         deleteImgCloudinary(originalProduct.image);
//       }

//       const updatedProduct = await Product.findByIdAndUpdate(
//         id,
//         { $set: { image: req.file.path } },
//         { new: true }
//       );
      
//       return res.status(200).json(updatedProduct);
//     }
//   } catch (error) {
//     return next('Error uploading image', error);
//   }
// };
