"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Props {
  product: {
    id: string;
    name: string;
    description: string;
    image?: string;
    price: number;
    priceId: string;
  };
  open: boolean;
  onClose: () => void;
  onBuyNow: (priceId: string) => void;
  loading: string | null;
}

export default function ProductModal({ product, open, onClose, onBuyNow, loading }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl max-w-5xl w-full flex flex-col md:flex-row overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            {/* Imagen del producto */}
            {product.image && (
              <div className="relative md:w-1/2 h-72 md:h-auto overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  width={500}
                  height={300}
                />
              </div>
            )}

            {/* Información del producto */}
            <div className="p-8 md:w-1/2 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-extrabold text-white mb-4">{product.name}</h2>
                <p className="text-gray-300 mb-6">{product.description}</p>
                <p className="text-4xl font-extrabold text-green-400">
                  ${(product.price / 100).toFixed(2)}
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-4">
                <button
                  onClick={() => onBuyNow(product.priceId)}
                  disabled={loading === product.priceId}
                  className={`w-full py-4 rounded-2xl font-bold text-white text-xl transition-colors ${
                    loading === product.priceId
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {loading === product.priceId ? "Procesando..." : "Comprar"}
                </button>

                <button
                  onClick={onClose}
                  className="w-full py-3 rounded-xl font-semibold text-blue-600 bg-white hover:bg-gray-100 transition text-lg"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
