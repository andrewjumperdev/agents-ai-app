"use client";
import { motion } from "framer-motion";

interface Props {
  product: {
    id: string;
    name: string;
    description: string;
    image?: string;
    price: number;
    priceId: string;
  };
  onViewDetails: (id: string) => void;
  onBuyNow: (priceId: string) => void;
  loading: string | null;
}

export default function ProductCard({ product, onViewDetails, onBuyNow, loading }: Props) {
  return (
    <motion.div
      className="relative bg-gray-800 rounded-3xl shadow-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform"
      whileHover={{ scale: 1.05 }}
    >
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover rounded-t-3xl"
        />
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">{product.name}</h3>
        <p className="text-gray-300 mt-2 text-sm">{product.description}</p>
        <p className="mt-4 text-3xl font-extrabold text-green-400">
          ${(product.price / 100).toFixed(2)}
        </p>
        <div className="mt-4 flex gap-3">
          <button
            onClick={() => onBuyNow(product.priceId)}
            disabled={loading === product.priceId}
            className={`flex-1 py-3 rounded-xl font-semibold text-white transition-colors ${
              loading === product.priceId
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading === product.priceId ? "Procesando..." : "Comprar Ahora"}
          </button>
          <button
            onClick={() => onViewDetails(product.id)}
            className="flex-1 py-3 rounded-xl font-semibold text-blue-600 bg-white hover:bg-gray-100 transition"
          >
            Ver detalles
          </button>
        </div>
      </div>
    </motion.div>
  );
}
