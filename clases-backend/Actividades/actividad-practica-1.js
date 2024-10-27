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
}

// Prueba

const productManager = new ProductManager();

const newProduct = {
    title: "Cámara Digital",
    description: "Cámara digital de alta resolución con zoom óptico.",
    price: 499.99,
    thumbnail: "url_camara.jpg", 
    code: "camara123",
    stock: 50
};

// Agregar el nuevo producto
productManager.addProduct(newProduct);

// Obtener todos los productos
productManager.getProducts();

// Probar obtener un producto por ID
console.log(productManager.getProductById(1)); // Debería mostrar el producto agregado
console.log(productManager.getProductById(999)); // Debería mostrar que no se encontró el producto
