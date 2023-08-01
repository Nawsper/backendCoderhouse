import { Router } from "express";
import * as controller from '../controllers/product.controllers.js';

const router = Router();

router.get('/', controller.getAll);

router.get('/:id', controller.getById);

router.post('/', controller.create);

router.post('/add/:cid/:pid', controller.addProductToCart);

router.put('/:id', controller.update);

router.delete('/:id', controller.remove);

export default router;