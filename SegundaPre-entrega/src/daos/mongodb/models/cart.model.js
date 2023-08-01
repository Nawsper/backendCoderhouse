import mongoose from 'mongoose';

const cartProductSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'products' },
    quantity: { type: Number, default: 1 },
});

const cartSchema = new mongoose.Schema({
    products: [cartProductSchema],
});

export const CartModel = mongoose.model('carts', cartSchema);
