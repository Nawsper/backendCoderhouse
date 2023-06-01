// realizar una clase "ProductManager"

// constructor (products) [arreglo vacio]

// propiedades: -title
//              -description
//              -price
//              -thumbnail (ruta imagen)
//              -code
//              -stock

// metodos: - addProduct() > agregara un producto al arreglo inicial
//                              - no puede repetirse el campo code
//                              - todos los campos deben ser obligatorios
//                              - debe generarse se id automatico
//          - getProducts() > debe devolver un arreglo con todos los productos
//          - getProductById() > encontrar el producto por el id
//                                - si no esta el id del producto mostrar error "Not found"

//<----------------------------- Desafio ----------------------------->

class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    // Verificar que todos los campos sean obligatorios
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      return "Error: All fields are required";
    }

    // Verificar si el código ya existe
    const existingProduct = this.products.find(
      (product) => product.code === code
    );
    if (existingProduct) {
      return "Error: The product has already been added";
    }

    const newProduct = {
      id: this.products.length + 1,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    this.products.push(newProduct);
    return "Product added successfully";
  }

  getProducts() {
    if (this.products.length === 0) {
      return "List empty";
    }
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      return "Not found";
    }
    return product;
  }
}

// Se agregan productos

const productManager = new ProductManager();

console.log(
  productManager.addProduct(
    "Silla",
    "Silla de madera",
    12345,
    "../img1.jpg",
    "prod1",
    6
  )
);
console.log(
  productManager.addProduct(
    "Mesa",
    "Mesa de madera",
    67890,
    "../img2.jpg",
    "prod2",
    3
  )
);
console.log(
  productManager.addProduct(
    "Sillon",
    "Sofa esquinero",
    45632,
    "../img3.jpg",
    "prod3",
    2
  )
);
console.log(
  productManager.addProduct("Cama", "Sommier", 74125, "../img4.jpg", "prod4", 4)
);

// consultas

console.log(productManager.getProducts());
console.log(productManager.getProductById(2));
console.log(productManager.getProductById(5));

// producto repetido

console.log(
  productManager.addProduct("Cama", "Sommier", 74125, "../img4.jpg", "prod4", 4)
);

// prodcuto informacion faltante

console.log(
  productManager.addProduct(
    "Silla",
    "Silla de madera",
    "../img1.jpg",
    "prod1",
    6
  )
);
