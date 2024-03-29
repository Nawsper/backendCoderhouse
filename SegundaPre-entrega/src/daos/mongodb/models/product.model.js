import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2'

const productsCollection = 'products'

const productSchema = new mongoose.Schema({
    title: { type: String, required: true, index: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    thumbnails: { type: Array, default: [] },
    code: { type: String, required: true, unique: true },
    stock: { type: Number, required: true },
    category: { type: String, required: true, index: true },
    status: { type: Boolean, required: true, default: true },
});

productSchema.plugin(mongoosePaginate)

export const ProductModel = mongoose.model(productsCollection, productSchema);
