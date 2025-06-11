let cartTotal = 0;
function updateCartDisplay() {
  cartTotal = 0;
  /* ton calcul total ici */
}

paypal.Buttons({
  createOrder: (data, actions) => actions.order.create({
    purchase_units: [{ amount: { value: cartTotal.toFixed(2) } }]
  }),
  onApprove: (data, actions) =>
    actions.order.capture().then(() => window.location.href = 'thanks.html')
}).render('#paypal-button-container');
