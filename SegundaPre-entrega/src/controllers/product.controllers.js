import * as service from "../services/product.services.js";

export const getAll = async (req, res, next) => {
    try {
        const response = await service.getAllProductsServices();
        res.status(200).json(response);
    } catch (error) {
        next(error.message);
    }
};

export const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const prod = await service.getProductByIdServices(id);
        if (!prod) res.status(404).json({ msg: "Product not found!" });
        else res.json(prod);
    } catch (error) {
        next(error.message);
    }
};

export const create = async (req, res, next) => {
    try {
        const newProd = await service.createProductService(req.body);
        if (!newProd) res.status(404).json({ msg: "Validation Error!" });
        else res.json(newProd);
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

export const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const prodUpd = await service.updateProductService(id, req.body);
        res.json(prodUpd);
    } catch (error) {
        next(error.message);
    }
};

export const remove = async (req, res, next) => {
    try {
        const { id } = req.params;
        const prodDel = await service.removeProductService(id);
        res.json(prodDel);
    } catch (error) {
        next(error.message);
    }
};