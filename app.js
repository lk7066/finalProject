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

/* OBSERVER PATTERN */
const CartObservers = [];

function notifyCartObservers() {
    CartObservers.forEach(cb => cb());
}

/* UI MODULE (Render Products + Cart) */
const UIModule = (() => {

    const renderProducts = () => {
        const container = document.getElementById("productContainer");
        container.innerHTML = "";

        ProductModule.getAll().forEach(product => {
            const card = document.createElement("div");
            card.className = "productCard";

            card.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p><strong>$${product.price}</strong></p>
                <button data-id="${product.productID}">Add to Cart</button>
            `;

            container.appendChild(card);
        });
    };

    const renderCart = () => {
        const list = document.getElementById("cartList");
        const total = document.getElementById("cartTotal");

        list.innerHTML = "";
        cart.cartItems.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `
                ${item.product.name} x ${item.quantity} = $${item.getSubTotal().toFixed(2)}
                <button class="removeBtn" data-remove="${item.cartItemID}">X</button>
            `;
            list.appendChild(li);
        });

        total.textContent = `Total: $${cart.calculateTotal().toFixed(2)}`;
    };

    return { renderProducts, renderCart };

})();
