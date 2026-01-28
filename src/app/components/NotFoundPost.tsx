'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface NotFoundPostProps {
  lang: 'es' | 'en' | 'fr';
}

export default function NotFoundPost({ lang }: NotFoundPostProps) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 text-white">
      <motion.div
        className="text-[8rem] sm:text-[12rem] md:text-[14rem] font-extrabold mb-6"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        404
      </motion.div>

      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
      >
        ¡Oops! Post no encontrado
      </motion.h2>

      <motion.p
        className="text-center max-w-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.7 } }}
      >
        Lo sentimos, el post que buscas no existe o ha sido eliminado. Pero aún puedes explorar otros artículos interesantes en nuestro blog.
      </motion.p>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          href={`/blog/${lang}`}
          className="inline-flex items-center gap-2 bg-white text-purple-600 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-purple-100 hover:scale-105 transform transition-all duration-300"
        >
          Volver al Blog <span className="animate-pulse">🡄</span>
        </Link>
      </motion.div>
    </main>
  );
}
