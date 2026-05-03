let cart = [];
let count = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  count++;

  document.getElementById("cart-count").innerText = count;

  alert(name + " added to cart 🛒");
}