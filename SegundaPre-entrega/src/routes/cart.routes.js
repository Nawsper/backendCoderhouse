import { Router } from "express";
import * as controller from '../controllers/cart.controllers.js';

const router = Router();

router.post('/', controller.create);

router.get('/:cid', controller.getById);

router.post('/:cid/products/:pid', controller.update);

router.post('/add/:cid/:pid', controller.addProductToCart);

export default router;