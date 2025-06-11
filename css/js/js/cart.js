let cart = JSON.parse(localStorage.getItem('cart')) || {};

function updateCartDisplay() {
  const count = Object.values(cart).reduce((a,b) => a + b, 0);
  document.getElementById('cart-count').textContent = count;
  const panel = document.getElementById('cart-panel');
  if (count > 0) panel.classList.remove('hidden');
  
  const list = document.getElementById('cart-items');
  list.innerHTML = '';
  let total = 0;
  for (let id in cart) {
    const qty = cart[id];
    const product = products.find(p => p.id === id);
    total += product.price * qty;
    const li = document.createElement('li');
    li.textContent = `${product.name} x${qty} – ${(product.price*qty).toFixed(2)} €`;
    list.appendChild(li);
  }
  document.getElementById('cart-total').textContent = total.toFixed(2);
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  updateCartDisplay();
}

document.getElementById('cart-btn').addEventListener('click', updateCartDisplay);
window.addEventListener('DOMContentLoaded', updateCartDisplay);
