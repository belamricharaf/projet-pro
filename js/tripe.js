const stripe = Stripe('pk_test_TA_CLE_PUBLISHABLE');

document.getElementById('checkout-btn').addEventListener('click', () => {
  fetch('https://ton-backend-pour-créer-session.herokuapp.com/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cart })
  })
  .then(res => res.json())
  .then(data => stripe.redirectToCheckout({ sessionId: data.id }))
  .catch(console.error);
});
