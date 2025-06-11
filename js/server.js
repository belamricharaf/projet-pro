// server.js
import express from 'express';
import Stripe from 'stripe';
const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  const { cart, products } = req.body;
  const line_items = Object.entries(cart).map(([id, qty]) => {
    const p = products.find(x => x.id === id);
    return {
      price_data: {
        currency: 'eur',
        product_data: { name: p.name, images: [req.headers.origin + '/' + p.img] },
        unit_amount: Math.round(p.price * 100),
      },
      quantity: qty,
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items,
    mode: 'payment',
    success_url: `${req.headers.origin}/thanks.html?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers.origin}/shop.html`,
  });
  res.json({ url: session.url });
});

app.listen(process.env.PORT || 3000, () => console.log('Stripe backend OK'));
