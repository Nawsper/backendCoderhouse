import CartDaoMongoDB from "../daos/mongodb/cart.dao.js";
const cartDao = new CartDaoMongoDB();

export const getCartByIdServices = async (cid) => {
    try {
        const item = await cartDao.getCartById(cid);
        if (!item) return false;
        else return item;
    } catch (error) {
        console.log(error);
    }
}

export const createCartServices = async (obj) => {
    try {
        const newCart = await cartDao.createCart(obj);
        if (!newCart) return false;
        else return newCart;
    } catch (error) {
        console.log(error);
    }
}

export const updateCartServices = async (cid, pid, updatedProduct) => {
    try {
        const cart = await cartDao.getCartById(cid);
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
