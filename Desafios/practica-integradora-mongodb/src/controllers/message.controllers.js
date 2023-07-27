import * as service from "../services/message.services.js";

export const getAll = async (req, res, next) => {
    try {
        const response = await service.getAll();
        res.status(200).json(response);
    } catch (error) {
        next(error.message);
    }
};

export const create = async (req, res, next) => {
    try {
        const newMsg = await service.create(req.body);
        if (!newMsg) res.status(404).json({ msg: "Validation Error!" });
        else res.json(newMsg);
    } catch (error) {
        next(error.message);
    }
};
