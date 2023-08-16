import { Router } from 'express'

const router = Router()

import * as controller from "../controllers/views.controllers.js";

router.get('/login', controller.login);
router.get('/register', controller.register);
router.get('/error-login', controller.errorLogin);
router.get('/error-register', controller.errorRegister);
router.get('/profile', controller.profile);
router.get('/cart/:cid', controller.getCart);
router.get('/products', controller.getProducts);

export default router