let cart = [];
let cartCount = 0;
let cartTotal = 0;

const cartItems = document.getElementById("cart-items");
const cartCountEl = document.getElementById("cart-count");
const cartTotalEl = document.getElementById("cart-total");

document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    const name = button.getAttribute("data-name");
    const price = parseFloat(button.getAttribute("data-price"));

    cart.push({ name, price });
    cartCount++;
    cartTotal += price;

    updateCart();
  });
});

function updateCart() {
  cartItems.innerHTML = "";
  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
  });

  cartCountEl.textContent = cartCount;
  cartTotalEl.textContent = cartTotal.toFixed(2);
}
