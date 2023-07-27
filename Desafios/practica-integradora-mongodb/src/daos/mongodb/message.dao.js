import { MessageModel } from "./models/message.model.js";

export const getAll = async () => {
    try {
        const response = await MessageModel.find({});
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const create = async (message) => {
    try {
        const response = await MessageModel.create(message);
        return response;
    } catch (error) {
        console.log(error);
    }
};
