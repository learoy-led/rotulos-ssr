import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env['MONGO_URI'];

if (!MONGO_URI) {
  throw new Error('⚠️ La variable de entorno MONGO_URI no está definida');
}

export const connectDB = async () => {

  try {
    await mongoose.connect(MONGO_URI);
    console.log('Conectado a DB');
  } catch (error) {
    console.log('Error conectando a DB', error);
  }
};