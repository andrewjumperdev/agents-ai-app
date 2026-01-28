"use client";

import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-8">
      <div className="bg-gray-800 rounded-3xl p-10 shadow-2xl text-center max-w-md w-full">
        <h1 className="text-5xl font-extrabold text-green-400 mb-6">¡Compra Exitosa!</h1>
        <p className="text-gray-300 mb-6">
          Tu pago ha sido procesado correctamente. Gracias por confiar en nuestros Agentes AI. 🚀
        </p>
        <Link href="/services-portal">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300">
            Volver al Catálogo
          </button>
        </Link>
      </div>
    </div>
  );
}
