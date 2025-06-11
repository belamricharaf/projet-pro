const catFilter = document.getElementById('catFilter');
const sizeFilter = document.getElementById('sizeFilter');

function applyFilters(){
  let filtered = products;
  if(catFilter.value !== 'all') filtered = filtered.filter(p => p.category === catFilter.value);
  if(sizeFilter.value !== 'all') filtered = filtered.filter(p => p.sizes.includes(sizeFilter.value));
  renderProducts(filtered);
}

catFilter.addEventListener('change', applyFilters);
sizeFilter.addEventListener('change', applyFilters);
