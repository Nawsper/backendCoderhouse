import ProductDaoMongoDB from "../daos/product.dao.js";
const prodDao = new ProductDaoMongoDB();

export const getAllProductsServices = async (queryParams) => {
    try {
        const products = await prodDao.getAllProducts(queryParams);
        if (!products) return false;
        else return products
    } catch (error) {
        console.log(error);
    }
}

export const getProductByIdServices = async (id) => {
    try {
        const item = await prodDao.getProductById(id);
        if (!item) return false;
        else return item;
    } catch (error) {
        console.log(error);
    }
}

export const createProductService = async (obj) => {
    try {
        const newProd = await prodDao.createProduct(obj);
        if (!newProd) return false;
        else return newProd;
    } catch (error) {
        console.log(error);
    }
}


export const updateProductService = async (id, obj) => {
    try {
        const item = await prodDao.updateProduct(id, obj);
        return item;
    } catch (error) {
        console.log(error);
    }
}

export const removeProductService = async (id) => {
    try {
        const item = await prodDao.deleteProduct(id);
        return item;
    } catch (error) {
        console.log(error);
    }
}