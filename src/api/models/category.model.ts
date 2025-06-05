import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema(
  {
    type: {
        type: String,
        enum: ['product', 'category'],
        required: false,
        trim: true
      },
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, trim: true },
    description: {
        application: { type: String, required: true, trim: true },
        products:     { type: String, required: true, trim: true },
    custom: { type: String, required: true, trim: true },
    cost: { type: String, required: true, trim: true },
},
products: [{ type: mongoose.Types.ObjectId, required: true, trim: true, ref: 'Product' }]
  },
  {
    timestamps: true,
    collection: 'categories'
  }
);

const Category = mongoose.model('Category', CategorySchema);

export default Category;