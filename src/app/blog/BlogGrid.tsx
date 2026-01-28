// app/blog/BlogGrid.tsx
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/app/types/types';

const defaultImage = '/images/image-default-blog.png';

interface BlogGridProps {
  posts: Post[];
  lang: 'es' | 'en' | 'fr';
}

export default function BlogGrid({ posts, lang }: BlogGridProps) {
  return (
    <motion.ul
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      initial="hidden"
      animate="visible"
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
    >
      {posts.map(({ _id, slug, title, date, description, image, category }, i) => (
        <motion.li
          key={_id || i}
          className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 cursor-pointer"
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        >
          <Link href={`/blog/${lang}/${slug}`} className="block h-full w-full">
            <div className="relative h-60 w-full overflow-hidden group">
              <Image
                src={image || defaultImage}
                alt={title}
                fill
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-end p-4">
                {category && (
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-semibold mb-2">
                    {category}
                  </span>
                )}
                <h2 className="text-lg md:text-2xl font-bold text-white drop-shadow-md">{title}</h2>
              </div>
            </div>

            <div className="p-6 flex flex-col justify-between h-full">
              <p className="mt-2 text-gray-700 dark:text-gray-300 flex-1 line-clamp-4">
                {description || 'Sin descripción disponible.'}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <time className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(date).toLocaleDateString(
                    lang === 'es' ? 'es-ES' : lang === 'fr' ? 'fr-FR' : 'en-US',
                    { year: 'numeric', month: 'long', day: 'numeric' }
                  )}
                </time>
                <span className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transform transition-all duration-300 flex items-center gap-1">
                  {lang === 'es' ? 'Leer más' : lang === 'fr' ? 'Lire plus' : 'Read more'}
                  <motion.span animate={{ x: [0, 3, -3, 0] }} transition={{ repeat: Infinity, duration: 1 }}>
                    ➔
                  </motion.span>
                </span>
              </div>
            </div>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}
