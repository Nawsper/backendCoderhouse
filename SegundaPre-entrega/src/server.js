import express from 'express';
import { errorHandler } from './middlewares/errorHandler.js';
import morgan from 'morgan';
import './daos/mongodb/connection.js';
import productRouter from './routes/product.routes.js';
import cartsRouter from './routes/cart.routes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);
app.use(morgan('dev'));

app.use('/api/products', productRouter);
app.use('/api/carts', cartsRouter)

app.listen(8080, () => {
    console.log("Server ok on port 8080");
});