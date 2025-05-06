// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {

    // 1. Loop for to the array products to get the item to add to cart
    let selectedProduct = {};
    for (let i = 0; i <= products.length; i++) {
        if (products[i].id == id) {
            selectedProduct = products[i];
            break;
        }
    }
    // 2. Add found product to the cart array
    let selectedIsAtCart = cart.findIndex(obj => obj.id === selectedProduct.id);

    if (selectedIsAtCart == -1) {
        selectedProduct.quantity = 1;
        cart.push(selectedProduct);
    } else {
        let productIndex = cart.findIndex(obj => obj.id === selectedProduct.id);
        cart[productIndex].quantity++;
    }

}


// Exercise 2
function cleanCart() {
    cart = [];
    printCart()
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    const cartTotal = cart.reduce(obj, prevTotal => obj.price + prevTotal);
    console.log(cartTotal)
    return cartTotal;
}

// Exercise 4
function applyPromotionsCart() {
    cart.forEach(product => {
        if (product.offer?.number <= product.quantity) {
            product.subtotalWithDiscount = (product.price / 100) * (100 - product.offer?.percent);
        }
    });
    // Apply promotions to each item in the array "cart"
}

// Exercise 5
function printCart() {
    //Get Output Elements
    let cartList = document.getElementById("cart_list");
    let totalPrice = document.getElementById("total_price")

    //Cleaning previous print
    cartList.innerHTML = '';
    total = 0;

    for (let product of cart) {
        if (product.quantity > 0) {
            cartList.innerHTML += `<tr>
								<th scope="row">${product.name}</th>
								<td>${product.price.toFixed(2)}</td>
								<td>${product.quantity}</td>
								<td>${(product.subtotalWithDiscount) ? (product.quantity * product.subtotalWithDiscount).toFixed(2) : (product.quantity * product.price).toFixed(2)}</td>
							</tr>`;
            (product.subtotalWithDiscount) ? total += product.quantity * product.subtotalWithDiscount : total += product.quantity * product.price
        }
    }
    totalPrice.innerHTML = total.toFixed(2);
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    cart.forEach((product, index) => {
        if (product.id == id && product.quantity == 1) {
            cart.splice(index, 1)
        }
        if (product.id == id && product.quantity > 1) {
            product.quantity--;
        }

    })

}

function open_modal() {
    applyPromotionsCart();
    printCart();
}