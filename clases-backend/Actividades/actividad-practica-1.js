class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        const { title, description, price, thumbnail, code, stock } = product;

        // Esta constante verifica si el producto ya existe en base a su código
        const exists = this.products.find(prod => prod.code === code);
        if (exists) {
            return console.log(`El código del producto ${code} ya existe.`);
        }

        // Valida que todos los campos sean obligatorios
        if (!title || !description || !price || !thumbnail || !code || stock === undefined) {
            return console.log('Todos los campos son obligatorios.');
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
        console.log(`Producto agregado: ${JSON.stringify(newProduct)}`);
    }

    getProducts() {
        console.log(this.products); // devuelve todos los productos
    }

    getProductById(id) {
        const product = this.products.find(prod => prod.id === id);
        if (!product) {
            return console.log(`Producto no encontrado con el id ${id}`);
        }
        return product; // devuelve el producto buscado por id
    }

    deleteProductById(id) {
        const index = this.products.findIndex(prod => prod.id === id);
        if (index === -1) {
            return console.log(`Producto no encontrado con el id ${id}`);
        }
        const deletedProduct = this.products.splice(index, 1);
        console.log(`Producto con id ${deletedProduct[0].id} ha sido eliminado.`); // Mensaje de confirmación
    }
}

// Pruebas

// Crear una instancia de ProductManager
const productManager = new ProductManager();

// Prueba `addProduct`
console.log("Prueba de `addProduct`:");
productManager.addProduct({
    title: "Producto 1",
    description: "Descripción del producto 1",
    price: 100,
    thumbnail: "url1",
    code: "P001",
    stock: 10,
}); // Debe agregar el producto

productManager.addProduct({
    title: "Producto 2",
    description: "Descripción del producto 2",
    price: 200,
    thumbnail: "url2",
    code: "P002",
    stock: 5,
}); // Debe agregar el producto

productManager.addProduct({
    title: "Producto 1", // Mismo código
    description: "Descripción duplicada",
    price: 150,
    thumbnail: "url1",
    code: "P001",
    stock: 20,
}); // Debe mostrar un mensaje de error

// Prueba `getProducts`
console.log("\nPrueba de `getProducts`:");
productManager.getProducts(); // Debe mostrar los productos añadidos

// Prueba `getProductById`
console.log("\nPrueba de `getProductById`:");

// Debe encontrar el producto con id 1
console.log(productManager.getProductById(1));

// Debe mostrar un mensaje de error
console.log(productManager.getProductById(3));

//Prueba `deleteProductById`
console.log("\nPrueba de `deleteProductById`:");

// Debe eliminar el producto con id 1
productManager.deleteProductById(1);

// Debe mostrar un mensaje de error
productManager.deleteProductById(3);

// Comprobar productos restantes
console.log("\nProductos restantes después de eliminar:");
productManager.getProducts(); // Debe mostrar el producto con id 2