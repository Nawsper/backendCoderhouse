import CartDaoMongoDB from "../daos/mongodb/cart.dao.js";
const cartDao = new CartDaoMongoDB();

export const getById = async (cid) => {
    try {
        const item = await cartDao.getById(cid);
        if (!item) return false;
        else return item;
    } catch (error) {
        console.log(error);
    }
}

export const create = async (obj) => {
    try {
        const newCart = await cartDao.create(obj);
        if (!newCart) return false;
        else return newCart;
    } catch (error) {
        console.log(error);
    }
}

export const update = async (cid, pid, updatedProduct) => {
    try {
        const cart = await cartDao.getById(cid);
        if (!cart) return false;

        const productIndex = cart.products.findIndex((item) => item.product.toString() === pid);

        if (productIndex === -1) {
            cart.products.push({ product: pid, quantity: updatedProduct.quantity });
        } else {
            cart.products[productIndex].quantity = updatedProduct.quantity;
        }

        const updatedCart = await cart.save();
        return updatedCart;
    } catch (error) {
        console.log(error);
    }
};
