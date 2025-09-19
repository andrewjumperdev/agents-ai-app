import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-08-27.basil", // asegúrate que tu cuenta la soporte
});


export interface ProductWithPrice {
  id: string;
  name: string;
  description: string;
  image?: string;
  price: number; // en centavos
  priceId: string;
}

export async function getProducts(): Promise<ProductWithPrice[]> {
  const products = await stripe.products.list({ active: true });
  const prices = await stripe.prices.list({ active: true });

  return products.data.map((product) => {
    const price = prices.data.find((p) => p.product === product.id);
    return {
      id: product.id,
      name: product.name,
      description: product.description || "",
      image: product.images[0],
      price: price ? price.unit_amount! : 0,
      priceId: price ? price.id : "",
    };
  });
}
