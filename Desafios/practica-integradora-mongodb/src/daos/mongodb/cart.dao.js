import { CartModel } from "./models/cart.model.js";

export default class CartDaoMongoDB {

    async getById(cid) {
        try {
            const response = await CartModel.findById(cid);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async create(obj) {
        try {
            const response = await CartModel.create(obj);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async update(cid, obj) {
        try {
            const response = await CartModel.findByIdAndUpdate(cid, obj, { new: true });
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}