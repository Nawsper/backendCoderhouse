import * as service from "../services/product.services.js";

export const getAll = async (req, res, next) => {
    try {
        const { page = 1, limit = 10, sort, query, status } = req.query;

        const queryParams = {
            page,
            limit,
            sort,
            query,
            status
        };

        const response = await service.getAllProductsServices(queryParams);
        const prevLink = response.hasPrevPage ? `http://localhost:8080/api/products?page=${response.prevPage}` : null;
        const nextLink = response.hasNextPage ? `http://localhost:8080/api/products?page=${response.nextPage}` : null;
        res.status(200).json({
            status: 'success',
            payload: response.docs,
            totalPages: response.totalPages,
            prevPage: response.prevPage,
            nextPage: response.nextPage,
            page: response.page,
            hasPrevPage: response.hasPrevPage,
            hasNextPage: response.hasNextPage,
            prevLink,
            nextLink,
        });
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