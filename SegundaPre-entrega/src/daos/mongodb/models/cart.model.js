import mongoose from 'mongoose';

const cartCollection = 'carts'

const cartSchema = new mongoose.Schema({
    products: {
        type: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'products'
                },
                quantity: { type: Number, default: 1 },
                _id: false
            }
        ],

        default: []
    }
});

export const CartModel = mongoose.model(cartCollection, cartSchema);