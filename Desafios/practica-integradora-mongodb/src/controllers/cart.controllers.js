import * as service from "../services/cart.services.js";

export const create = async (req, res, next) => {
    try {
        const newCart = await service.create(req.body);
        if (!newCart) res.status(404).json({ msg: "Validation Error!" });
        else res.json(newCart);
    } catch (error) {
        next(error.message);
    }
};

export const getById = async (req, res, next) => {
    try {
        const { cid } = req.params;
        const cart = await service.getById(cid);
        if (!cart) res.status(404).json({ msg: "Cart not found!" });
        else res.json(cart);
    } catch (error) {
        next(error.message);
    }
};

export const update = async (req, res, next) => {
    try {
        const { cid } = req.params;
        const cart = await service.getById(cid);
        if (!cart) {
            res.status(404).json({ message: "Cart not found" });
        } else {
            try {
                const { pid } = req.params;
                const prodUpd = await service.update(cid, pid, req.body);
                res.json(prodUpd);
            } catch (error) {
                next(error.message);
            }
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

