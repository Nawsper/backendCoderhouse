import mongoose from 'mongoose';

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

export const ProductModel = mongoose.model('products', productSchema);
