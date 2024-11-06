
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}


class ShoppingCart {
    constructor() {
        this.items = [];
    }

    
    addItem(product, quantity = 1) {

        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    
    displayItems() {
        this.items.forEach(item => {
            console.log(`Produit: ${item.product.name} | Quantité: ${item.quantity} | Prix total: ${item.getTotalPrice()}`);
        });
    }

    
    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
}



const product1 = new Product(1, 'Ordinateur portable', 1000);
const product2 = new Product(2, 'Souris', 50);
const product3 = new Product(3, 'Clavier', 80);


const cart = new ShoppingCart()

cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 1);


console.log("Éléments du panier:");
cart.displayItems();


console.log(`Nombre total d'éléments: ${cart.getTotalItems()}`);


console.log(`Prix total du panier: ${cart.getTotalPrice()}€`);


cart.removeItem(2);


console.log("Éléments du panier après suppression:");
cart.displayItems();
console.log(`Prix total après suppression: ${cart.getTotalPrice()}€`);
