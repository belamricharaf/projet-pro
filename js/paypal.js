paypal.Buttons({
  style: { layout: 'vertical', color: 'blue', shape: 'rect', label: 'paypal' },
  createOrder: (data, actions) => actions.order.create({
    purchase_units: [{ amount: { value: cartTotal.toFixed(2) } }]
  }),
  onApprove: (data, actions) =>
    actions.order.capture().then(() => {
      window.location.href = 'thanks.html';
    })
}).render('#paypal-button-container');
