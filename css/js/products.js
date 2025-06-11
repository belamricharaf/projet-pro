const products = [
  { id: 'p1', name: 'T-shirt mode', price: 19.99, img: 'images/tshirt.jpg' },
  { id: 'p2', name: 'Robe élégante', price: 49.99, img: 'images/robe.jpg' },
  { id: 'p3', name: 'Veste stylée', price: 89.99, img: 'images/veste.jpg' },
];

function renderProducts() {
  const grid = document.getElementById('products-grid');
  products.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}" width="100%">
      <h4>${p.name}</h4>
      <p>${p.price.toFixed(2)} €</p>
      <button onclick="addToCart('${p.id}')">Ajouter</button>
    `;
    grid.appendChild(div);
  });
}

window.addEventListener('DOMContentLoaded', renderProducts);
