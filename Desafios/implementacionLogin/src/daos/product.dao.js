import { ProductModel } from "./models/product.model.js";

export default class ProductDaoMongoDB {

    async getAllProducts(queryParams) {
        try {
            const { limit = 10, page = 1, sort, query, status } = queryParams;

            const options = {
                page: parseInt(page),
                limit: parseInt(limit),
            };

            const filter = {};

            if (query) {
                filter.category = { $regex: query, $options: "i" };
            }

            if (status === 'available') {
                filter.stock = { $gt: 0 };
            } else if (status === 'unavailable') {
                filter.stock = { $eq: 0 };
            }


            let sortOptions = {};

            if (sort === "asc") {
                sortOptions.price = 1;
            } else if (sort === "desc") {
                sortOptions.price = -1;
            }

            const response = await ProductModel.paginate(filter, {
                ...options,
                sort: sortOptions,
            });

            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async getProductById(id) {
        try {
            const response = await ProductModel.findById(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async createProduct(obj) {
        try {
            const response = await ProductModel.create(obj);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async updateProduct(id, obj) {
        try {
            const response = await ProductModel.findByIdAndUpdate(id, obj, { new: true });
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteProduct(id) {
        try {
            const response = await ProductModel.findByIdAndDelete(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}