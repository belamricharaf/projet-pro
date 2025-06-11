paypal.Buttons({
  createOrder: (data, actions) => {
    return actions.order.create({
      purchase_units: [{
        amount: { value: cartTotal.toFixed(2) }
      }]
    });
  },
  onApprove: (data, actions) => {
    return actions.order.capture().then(details => {
      window.location.href = 'thanks.html';
    });
  }
}).render('#paypal-button-container');
