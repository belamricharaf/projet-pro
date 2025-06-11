const products = [
  { id: 'p1', name: 'T-shirt Mode', price: 19.99, img: 'images/tshirt.jpg', category: 'tshirt', sizes: ['S','M','L'] },
  { id: 'p2', name: 'Robe élégante', price: 49.99, img: 'images/robe.jpg', category: 'robe', sizes: ['M','L'] },
  { id: 'p3', name: 'Veste stylée', price: 89.99, img: 'images/veste.jpg', category: 'veste', sizes: ['S','M','L','XL'] },
  { id: 'p4', name: 'Jean classique', price: 59.99, img: 'images/jean.jpg', category: 'jean', sizes: ['M','L','XL'] }
];

function renderProducts(list) {
  const grid = document.getElementById('products-grid');
  grid.innerHTML = '';
  list.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product-card';
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.price.toFixed(2)} €</p>
      <label>Taille :
        <select id="size-${p.id}">
          ${p.sizes.map(s=>`<option value="${s}">${s}</option>`).join('')}
        </select>
      </label>
      <button onclick="addToCart('${p.id}')">Ajouter</button>
    `;
    grid.appendChild(div);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);
});
