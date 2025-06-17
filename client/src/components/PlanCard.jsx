import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_...'); // <-- Your Stripe Publishable Key

const PlanCard = ({ plan }) => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch('http://localhost:5000/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ plan }),
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <div style={{ border: '1px solid red', padding: 20, margin: 10 }}>
      <h3>{plan.name}</h3>
      <p>Price: ${plan.price}</p>
      <button onClick={handleCheckout}>Buy Now</button>
    </div>
  );
};

export default PlanCard;
