"use client";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import ChatBubble from "../components/ClientSupportAgent";

interface Product {
  id: string;
  name: string;
  description: string;
  image?: string;
  price: number;
  priceId: string;
}

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleCheckout = async (priceId: string) => {
    setLoading(priceId);
    try {
      const res = await fetch("/api/checkout-sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: [{ priceId, quantity: 1 }] }),
      });
      const data = await res.json();
      window.location.href = data.url;
    } catch (error) {
      console.error(error);
      setLoading(null);
    }
  };

  const handleViewDetails = (id: string) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      setSelectedProduct(product);
      setModalOpen(true);
    }
  };

  return (
    <>
    
    
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-8">
      <h1 className="text-5xl font-extrabold text-center text-white mb-16">
        Agentes AI
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onBuyNow={handleCheckout}
            onViewDetails={handleViewDetails}
            loading={loading}
          />
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onBuyNow={handleCheckout}
          loading={loading}
        />
      )}
    </div>
      <ChatBubble />
    </>
  );
}
