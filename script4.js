//Creat an Inventory system in javascript to manage products using prototypes. Implements a product constructor function that define properties of a product such as name, category, price and stock. Develop an inventory constructor function that initializes an empty inventory array. etend the inventory prototype with a method addProduct that adds a valid product that adds a valid product object to the inventory and logs a confirmation message. Additionally, implement a method deletProduct that removes a product from the inventory by name and logs whether the delation was successful.// 

// Product constructor function
function Product(name, category, price, stock) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.stock = stock;
  }
  
  // Inventory constructor function
  function Inventory() {
    this.products = []; // Initialize an empty array to store products
  }
  
  // Add a method to the Inventory prototype to add products
  Inventory.prototype.addProduct = function (product) {
    if (
      product instanceof Product &&
      typeof product.name === "string" &&
      typeof product.category === "string" &&
      typeof product.price === "number" &&
      typeof product.stock === "number"
    ) {
      this.products.push(product);
      console.log(`Product '${product.name}' added to inventory.`);
    } else {
      console.error("Invalid product. Product must have valid name, category, price, and stock.");
    }
  };
  
  // Add a method to the Inventory prototype to delete products by name
  Inventory.prototype.deleteProduct = function (productName) {
    const initialLength = this.products.length;
    this.products = this.products.filter((product) => product.name !== productName);
  
    if (this.products.length < initialLength) {
      console.log(`Product '${productName}' successfully deleted from inventory.`);
    } else {
      console.error(`Product '${productName}' not found in inventory.`);
    }
  };
  
  // Example usage
  const inventory = new Inventory();
  
  const product1 = new Product("Laptop", "Electronics", 899, 10);
  const product2 = new Product("Book", "Books", 20, 50);
  
  inventory.addProduct(product1);
  inventory.addProduct(product2);
  
  inventory.deleteProduct("Laptop");
  inventory.deleteProduct("Tablet"); // Trying to delete a non-existent product
  