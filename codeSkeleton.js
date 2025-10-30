
// Class: Client

class Client {
    constructor(clientID, name, email, address, phone, username, password) {
      this.clientID = clientID;
      this.name = name;
      this.email = email;
      this.address = address;
      this.phone = phone;
      this.username = username;
      this.password = password;
    }
  
    register() {
      // logic for registering client
    }
  
    login() {
      // logic for login
    }
  
    updateProfile() {
      // logic to update profile details
    }
  
    viewOrderHistory() {
      // logic to view previous orders
    }
  
    changePassword() {
      // logic to change password
    }
  }

  // Class: Order

  class Order {
    constructor(orderID, clientID, orderDate, status, totalAmount) {
      this.orderID = orderID;
      this.clientID = clientID;
      this.orderDate = orderDate;
      this.status = status;
      this.totalAmount = totalAmount;
    }
  
    placeOrder() {
      // logic to create a new order
    }
  
    updateStatus() {
      // logic to update order status
    }
  
    generateInvoice() {
      // logic to generate order invoice
    }
  }
  

  // Class: Payment

  class Payment {
    constructor(paymentID, orderID, amount, paymentMethod, paymentDate, isSuccessful) {
      this.paymentID = paymentID;
      this.orderID = orderID;
      this.amount = amount;
      this.paymentMethod = paymentMethod;
      this.paymentDate = paymentDate;
      this.isSuccessful = isSuccessful;
    }
  
    processPayment() {
      // logic to process payment
    }
  
    refundPayment() {
      // logic to handle refunds
    }
  }
  

  // Class: Product

  class Product {
    constructor(productID, name, description, price, stockQuantity, ecoFriendly) {
      this.productID = productID;
      this.name = name;
      this.description = description;
      this.price = price;
      this.stockQuantity = stockQuantity;
      this.ecoFriendly = ecoFriendly;
    }
  
    updateStockQuantity() {
      // logic to modify product stock
    }
  
    getProductInfo() {
      // logic to display product details
    }
  
    updatePrice() {
      // logic to update product price
    }
  }
  

  // Class: ShoppingCart

  class ShoppingCart {
    constructor(cartID, clientID, totalAmount = 0, noOfItems = 0) {
      this.cartID = cartID;
      this.clientID = clientID;
      this.totalAmount = totalAmount;
      this.noOfItems = noOfItems;
      this.cartItems = []; // composition of CartItem
    }
  
    addItem(cartItem) {
      // logic to add an item
    }
  
    removeItem(cartItemID) {
      // logic to remove an item
    }
  
    calculateTotal() {
      // logic to calculate total
    }
  
    clearCart() {
      // logic to empty the cart
    }
  }

  // Class: CartItem

  class CartItem {
    constructor(cartItemID, product, quantity) {
      this.cartItemID = cartItemID;
      this.product = product; // reference to Product object
      this.quantity = quantity;
    }
  
    getSubTotal() {
      // logic to calculate subtotal = product.price * quantity
    }
  }
  

 
  