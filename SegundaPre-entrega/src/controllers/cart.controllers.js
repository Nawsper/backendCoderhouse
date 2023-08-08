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
        const { cid } = req.params;
        const { pid } = req.params;
        const newProdCart = service.addProductToCartService(cid, pid);
        res.json(newProdCart);
    } catch (error) {
        next(error.message);
    }
}

export const updateCart = async (req, res, next) => {
    try {
        const { cid } = req.params;
        const productsArray = req.body;
        const updatedCart = await cartService.updateCartService(cid, productsArray);
        res.json(updatedCart);
    } catch (error) {
        next(error.message);
    }
};