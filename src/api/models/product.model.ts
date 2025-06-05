import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["product", "category"],
      required: false,
      trim: true,
    },
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, trim: true },
    images: { type: mongoose.Schema.Types.Mixed, required: true },
    description: { type: String, required: true, trim: true },
    material: { type: String, required: true, trim: true },
    design: { type: String, required: true, trim: true },
    installation: { type: String, required: true, trim: true },
    application: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
    collection: "products",
  }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
