import { Router } from "express";
import * as controller from '../controllers/message.controllers.js';

const router = Router();

router.post('/', controller.create);

router.get('/chat', async (req, res) => {
    try {
        const messages = await controller.getAll();
        res.render('chat', { messages });
    } catch (error) {
        console.log(error);
        res.status(500).send("Error al obtener los mensajes");
    }
});

export default router;