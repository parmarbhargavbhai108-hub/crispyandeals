let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(name + " added to cart!");
}

function updateCartCount() {
    document.getElementById("cartCount").innerText = cart.length;
}

updateCartCount();

// Load cart in cart page
if (document.getElementById("cartItems")) {
    let display = "";
    let total = 0;

    cart.forEach((item, i) => {
        display += `<p>${item.name} - ₹${item.price}</p>`;
        total += item.price;
    });

    document.getElementById("cartItems").innerHTML = display;
    document.getElementById("totalAmount").innerText = total;
}

// Login Function
function login() {
    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;

    if (u === "admin" && p === "123") {
        alert("Login Successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid Credentials");
    }
}