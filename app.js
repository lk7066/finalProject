/*PRODUCT CLASS */
class Product {
    constructor(productID, name, description, price, stockQuantity, ecoFriendly) {
        this.productID = productID;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stockQuantity = stockQuantity;
        this.ecoFriendly = ecoFriendly;
    }
}

/*CART ITEM CLASS*/
class CartItem {
    constructor(cartItemID, product, quantity) {
        this.cartItemID = cartItemID;
        this.product = product;
        this.quantity = quantity;
    }

    getSubTotal() {
        return this.product.price * this.quantity;
    }
}

/* SHOPPING CART CLASS*/
class ShoppingCart {
    constructor(cartID, clientID) {
        this.cartID = cartID;
        this.clientID = clientID;
        this.cartItems = [];
    }

    addItem(product) {
        const existing = this.cartItems.find(item => item.product.productID === product.productID);

        if (existing) existing.quantity++;
        else this.cartItems.push(new CartItem(Date.now(), product, 1));
    }

    removeItem(cartItemID) {
        this.cartItems = this.cartItems.filter(item => item.cartItemID !== cartItemID);
    }

    calculateTotal() {
        return this.cartItems.reduce((sum, item) => sum + item.getSubTotal(), 0);
    }

    clearCart() {
        this.cartItems = [];
    }
}

/* PAYMENT CLASS*/
class Payment {
    constructor(paymentID, orderID, amount, paymentMethod) {
        this.paymentID = paymentID;
        this.orderID = orderID;
        this.amount = amount;
        this.paymentMethod = paymentMethod;
        this.isSuccessful = false;
    }

    processPayment() {
        this.isSuccessful = true;
        return true;
    }
}

/*  FACTORY PATTERN FOR PRODUCTS*/
const ProductFactory = {
    create(id, name, desc, price, stock) {
        return new Product(id, name, desc, price, stock, true);
    }
};

/* PRODUCT MODULE*/
const ProductModule = (() => {
    const products = [
        ProductFactory.create(1, "Eco Cleanser", "Gentle skin cleanser", 12.99, 50),
        ProductFactory.create(2, "Glow Serum", "Hydrating glow serum", 18.99, 40),
        ProductFactory.create(3, "Hydra Cream", "Deep moisture cream", 15.50, 30)
    ];

    return {
        getAll: () => products
    };
})();
