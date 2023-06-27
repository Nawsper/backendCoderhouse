import { Router } from "express";
import ProductManager from "../products/ProductManager.js";

const productsRouter = Router()
const productManager = new ProductManager("./products.json");

//<--- rutas --->

productsRouter.get('/', async (req, res) => {
  try {
    const limit = req.query.limit;
    const products = await productManager.readProducts();
    if (limit) {
      const limitedProducts = products.slice(0, parseInt(limit));
      res.status(200).json(limitedProducts);
    } else {
      res.status(200).json(products);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

productsRouter.get('/:pid', async (req, res) => {
  try {
    const { pid } = req.params;
    const prod = await productManager.getProductById(parseInt(pid));
    if (prod) {
      res.json(prod);
    } else {
      res.status(400).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});


productsRouter.post('/', async (req, res) => {
  try {
    const product = req.body;
    const prodAdded = await productManager.addProduct(product);
    res.json(prodAdded);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});


productsRouter.put('/:pid', async (req, res) => {
  try {
    const { pid } = req.params;
    const updatedFields = req.body;
    const prod = await productManager.getProductById(parseInt(pid));
    if (prod) {
      await productManager.updateProduct(parseInt(pid), updatedFields);
      res.json({ message: `Product id: ${pid} updated successfully` });
    } else {
      res.status(400).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});


productsRouter.delete('/:pid', async (req, res) => {
  try {
    const { pid } = req.params;
    const prod = await productManager.getProductById(parseInt(pid));
    if (prod) {
      const deletProd = await productManager.deleteProduct(parseInt(pid));
      res.json(deletProd);
    } else {
      res.status(400).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
})

export default productsRouter