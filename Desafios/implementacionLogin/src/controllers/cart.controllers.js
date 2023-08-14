import * as service from "../services/cart.services.js";

export const create = async (req, res, next) => {
    try {
        const newCart = await service.createCartServices(req.body);
        if (!newCart) res.status(404).json({ msg: "Validation Error!" });
        else res.json(newCart);
    } catch (error) {
        next(error.message);
    }
};

export const getById = async (req, res, next) => {
    try {
        const { cid } = req.params;
        const cart = await service.getCartByIdServices(cid);
        if (!cart) res.status(404).json({ msg: "Cart not found!" });
        else res.json(cart);
    } catch (error) {
        next(error.message);
    }
};

export const addProductToCart = async (req, res, next) => {
    try {
        const { cid, pid } = req.params;
        const newProdCart = await service.addProductToCartService(cid, pid);
        res.json(newProdCart);
    } catch (error) {
        next(error.message);
    }
}

export const updateCart = async (req, res, next) => {
    try {
        const { cid } = req.params;
        const productsArray = req.body;
        const updatedCart = await service.updateCartService(cid, productsArray);
        res.json(updatedCart);
    } catch (error) {
        next(error.message);
    }
}

export const updateQtyProductFromCart = async (req, res, next) => {
    try {
        const { cid, pid } = req.params;
        const { quantity } = req.body;
        const updatedQtyCart = await service.updateQtyProductFromCartService(cid, pid, Number(quantity));
        res.json(updatedQtyCart);
    } catch (error) {
        next(error.message);
    }
};

export const deleteProductFromCart = async (req, res, next) => {
    try {
        const { cid } = req.params;
        const { pid } = req.params;
        const deleteProduct = await service.deleteProductFromCartService(cid, pid);
        res.json(deleteProduct);
    } catch (error) {
        next(error.message);
    }
}

export const deleteAllProductsFromCart = async (req, res, next) => {
    try {
        const { cid } = req.params;
        const deleteAllProducts = await service.deleteAllProductFromCartService(cid);
        res.json(deleteAllProducts);
    } catch (error) {
        next(error.message);
    }
};