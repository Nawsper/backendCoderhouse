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

export const addProductToCartService = async (cid, pid) => {
    try {
        const cart = await cartDao.getCartById(cid);
        const product = await productDao.getProductById(pid);

        if (!product) throw new Error("Product not found");
        if (!cart) throw new Error("Cart not found");

        const newProdCart = await cartDao.addProductToCart(cid, pid);
        return newProdCart;
    } catch (error) {
        console.log(error);
    }
};


export const updateCartService = async (cid, productsArray) => {
    try {
        const updatedCart = await cartDao.updateCart(cid, productsArray);
        return updatedCart;
    } catch (error) {
        console.log(error);
    }
}

export const updateQtyProductFromCartService = async (cid, pid, quantity) => {
    try {
        const updatedQty = await cartDao.updateQtyProductInCart(cid, pid, quantity);
        return updatedQty;
    } catch (error) {
        throw error;
    }
};


export const deleteProductFromCartService = async (cid, pid) => {
    try {
        const deleteProdCart = await cartDao.deleteProductFromCart(cid, pid);
        return deleteProdCart;
    } catch (error) {
        console.log(error);
    }
}

export const deleteAllProductFromCartService = async (cid) => {
    try {
        const deleteAllProdCart = await cartDao.deleteAllProductsFromCart(cid);
        return deleteAllProdCart;
    } catch (error) {
        console.log(error);
    }
}
