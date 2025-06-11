const products = [
  { id: 'p1', name: 'T-shirt Mode', price: 19.99, img: 'images/tshirt.jpg' },
  { id: 'p2', name: 'Robe Élégante', price: 49.99, img: 'images/robe.jpg' },
  { id: 'p3', name: 'Veste Stylée', price: 89.99, img: 'images/veste.jpg' },
  { id: 'p4', name: 'Jean Classique', price: 59.99, img: 'images/jean.jpg' },
];

function renderProducts() {
  const grid = document.getElementById('products-grid');
  products.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product-card';
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.price.toFixed(2)} €</p>
      <button onclick="addToCart('${p.id}')">Ajouter</button>
    `;
    grid.appendChild(div);
  });
}
window.addEventListener('DOMContentLoaded', renderProducts);
