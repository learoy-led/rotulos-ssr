import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid';
import { NextFunction } from 'express';
import streamifier from 'streamifier'

dotenv.config();

const storage = multer.memoryStorage();
export const uploadImgCloudinary = multer({ storage });
//export const uploadImgCloudinary = upload.single('image');

interface MulterRequest extends Request {
  file: Express.Multer.File;
}


//  export const handleCloudinaryUpload  = async (req: MulterRequest, res: Response, next: NextFunction) => {
//     if (!req.file) return next();
  
//     try {
//       const streamUpload = (): Promise<{ secure_url: string }> => {
//         return new Promise((resolve, reject) => {
//           const stream = cloudinary.uploader.upload_stream(
//             {
//               folder: 'rotuloslearoy',
//               public_id: uuidv4(),
//               resource_type: 'image',
//             },
//             (error, result) => {
//               if (result) resolve(result);
//               else reject(error);
//             }
//           );
//           streamifier.createReadStream(req.file.buffer).pipe(stream);
//         });
//       };
  
//       const result = await streamUpload();
  
//       // Sobrescribe req.file.path con la URL de Cloudinary
//       req.file.path = result.secure_url;
//       next();
//     } catch (error) {
//       next(new Error('Error al subir imagen a Cloudinary: ' + error));
//     }
//   };
 
export const deleteImgCloudinary = (imgUrl: string) => {
  const imgSplitted = imgUrl.split('/');
  const nameSplitted = imgSplitted[imgSplitted.length - 1].split('.');
  const folderSplitted = imgSplitted[imgSplitted.length - 2];
  const public_id = `${folderSplitted}/${nameSplitted[0]}`;
  cloudinary.uploader.destroy(public_id, () => {
    console.log('image deleted');
  });
};

export const configCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env['CLOUDINARY_CLOUD_NAME'],
    api_key: process.env['CLOUDINARY_API_KEY'],
    api_secret: process.env['CLOUDINARY_API_SECRET']
  });
};

