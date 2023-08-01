import { ProductModel } from "./models/product.model.js";
import { CartModel } from "./models/cart.model.js";

export default class ProductDaoMongoDB {
    async getAllProducts() {
        try {
            const response = await ProductModel.find({});
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async getProductById(id) {
        try {
            const response = await ProductModel.findById(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async createProduct(obj) {
        try {
            const response = await ProductModel.create(obj);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async updateProduct(id, obj) {
        try {
            const response = await ProductModel.findByIdAndUpdate(id, obj, { new: true });
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async addProductToCart(cid, pid) {
        try {
            const cart = await CartModel.findById(cid);
            cart.products.push(pid);
            cart.save();
            return cart;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteProduct(id) {
        try {
            const response = await ProductModel.findByIdAndDelete(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}