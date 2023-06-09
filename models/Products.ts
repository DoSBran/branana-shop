import mongoose, { Schema, model, Model } from "mongoose";
import { ProductInterface } from '../interfaces';

const productSchema = new Schema(
  {
    description: { type: String, required: true },
    images: [{ type: String }],
    inStock: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true },
    sizes: [
      {
        type: String,
        enum: {
          values: ["XS", "S", "M", "L", "XL", "XXL"],
          message: "{VALUE} No es una talla permitida",
        },
      },
    ],
    slug: { type: String, required: true, unique: true },
    tags: [{ type: String }],
    title: { type: String, required: true },
    type: {
      type: String,
      enum: {
        values: ["shirts", "pants", "hoodies", "hats"],
        message: "{VALUE} no es un tipo permitido",
      },
    },
    gender: {
      type: String,
      enum: {
        values: ["men", "women", "kid", "unisex"],
        message: "{VALUE} no es  un genero permitido",
      },
    },
  },
  {
    timestamps: true,
  }
);

productSchema.index({title: 'text', tags: 'text'})

const Product: Model<ProductInterface> = mongoose.models.Product || model('Product', productSchema);

export default Product;