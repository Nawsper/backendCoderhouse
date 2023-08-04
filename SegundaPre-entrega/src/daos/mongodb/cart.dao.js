import { CartModel } from "./models/cart.model.js";
import { ProductModel } from "./models/product.model.js";

export default class CartDaoMongoDB {

    async getCartById(cid) {
        try {
            const response = await CartModel.findById(cid).populate('products.product');
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async createCart(obj) {
        try {
            const response = await CartModel.create(obj);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async updateCart(cid, obj) {
        try {
            const response = await CartModel.findByIdAndUpdate(cid, obj, { new: true });
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async addProductToCart(cid, pid) {
        try {
            const product = await ProductModel.findById(pid);
            const cart = await CartModel.findById(cid);
            const productInCart = cart.products.find(
                (products) => products.product._id.toString() === product._id.toString()
            );

            if (productInCart) productInCart.quantity++;
            else
                cart.products.push({
                    product,
                    quantity: 1,
                });

            await cart.save();
            return cart;
        } catch (error) {
            console.log(error);
        }
    };
}