import CartDaoMongoDB from "../daos/mongodb/cart.dao.js";
import ProductDaoMongoDB from "../daos/mongodb/product.dao.js";

const cartDao = new CartDaoMongoDB();
const productDao = new ProductDaoMongoDB();


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


export const addProductToCartService = async (cid, pid) => {
    try {
        const cart = await cartDao.getCartById(cid);
        const product = await productDao.getProductById(pid);

        if (!product) throw new Error("Product not found");
        if (!cart) throw new Error("Cart not found");

        const newCart = await cartDao.addProductToCart(cid, pid);
        return newCart;
    } catch (error) {
        console.log(error);
    }
}

export async function updateCartService(cid, productsArray) {
    try {
        const updatedCart = await cartDao.updateCart(cid, productsArray);
        return updatedCart;
    } catch (error) {
        console.log(error);
    }
}