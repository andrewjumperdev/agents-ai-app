// src/app/api/products/route.ts
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-08-27.basil",
});

export async function GET() {
  const products = await stripe.products.list({ active: true });
  const prices = await stripe.prices.list({ active: true });

  const catalog = products.data.map((product) => {
    // Filtramos solo precios que no sean recurrentes
    const oneTimePrice = prices.data.find(
      (p) => p.product === product.id && !p.recurring
    );

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      image: product.images[0],
      price: oneTimePrice?.unit_amount || 0,
      priceId: oneTimePrice?.id,
    };
  }).filter(p => p.priceId); // Eliminamos productos sin precio único

  return new Response(JSON.stringify(catalog), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
