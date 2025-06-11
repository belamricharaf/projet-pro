const stripe = Stripe('pk_test_TA_CLE_PUBLISHABLE');

document.getElementById('checkout-btn').addEventListener('click', async () => {
  const response = await fetch('https://ton-backend.herokuapp.com/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cart, products })
  });
  const data = await response.json();
  window.location = data.url;
});
