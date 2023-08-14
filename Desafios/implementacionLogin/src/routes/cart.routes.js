import { Router } from "express";
import * as controller from '../controllers/cart.controllers.js';

const router = Router();

router.post('/', controller.create);

router.get('/:cid', controller.getById);

router.put('/:cid', controller.updateCart);

router.put('/:cid/products/:pid', controller.updateQtyProductFromCart);

router.post('/add/:cid/:pid', controller.addProductToCart);

router.delete('/:cid/products/:pid', controller.deleteProductFromCart);

router.delete('/:cid', controller.deleteAllProductsFromCart);

export default router;