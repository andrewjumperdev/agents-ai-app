'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/app/types/types';

const defaultImage = '/images/image-default-blog.png';

interface BlogGridProps {
  posts: Post[];
  lang: 'es' | 'en' | 'fr';
  categories: string[];
  translations: {
    allPosts: string;
  };
}

const categoryColors: Record<string, string> = {
  'Automatización': '#f59e0b',
  'Automation': '#f59e0b',
  'Automatisation': '#f59e0b',
  'Ventas': '#10b981',
  'Sales': '#10b981',
  'Ventes': '#10b981',
  'Marketing': '#8b5cf6',
  'SEO': '#3b82f6',
  'E-commerce': '#06b6d4',
  'Productividad': '#ec4899',
  'Productivity': '#ec4899',
  'Productivité': '#ec4899',
  'IA': '#f97316',
  'AI': '#f97316',
  'Tecnología': '#6366f1',
  'Technology': '#6366f1',
  'Technologie': '#6366f1',
  'Finanzas': '#22c55e',
  'Finance': '#22c55e',
  'Finances': '#22c55e',
  'Estrategia': '#ef4444',
  'Strategy': '#ef4444',
  'Stratégie': '#ef4444',
  'Atención al Cliente': '#14b8a6',
  'Customer Service': '#14b8a6',
  'Service Client': '#14b8a6',
  'Crecimiento': '#a855f7',
  'Growth': '#a855f7',
  'Croissance': '#a855f7',
};

export default function BlogGrid({ posts, lang, categories, translations }: BlogGridProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const readMoreText = {
    es: 'Leer artículo',
    en: 'Read article',
    fr: 'Lire l\'article',
  };

  const minReadText = {
    es: 'min de lectura',
    en: 'min read',
    fr: 'min de lecture',
  };

  // Remove duplicates by slug and filter by category
  const uniquePosts = posts.filter((post, index, self) =>
    index === self.findIndex((p) => p.slug === post.slug)
  );

  const filteredPosts = activeCategory
    ? uniquePosts.filter(post => post.category === activeCategory)
    : uniquePosts;

  return (
    <>
      {/* Category Filters */}
      {categories.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeCategory === null
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/25'
                : 'bg-[#1a1a2e] border border-[#2d2d4a] text-gray-300 hover:border-amber-500/50 hover:text-white'
            }`}
          >
            {translations.allPosts}
            <span className="ml-2 px-2 py-0.5 bg-black/20 rounded-full text-xs">
              {uniquePosts.length}
            </span>
          </button>
          {categories.map((cat) => {
            const count = uniquePosts.filter(p => p.category === cat).length;
            const isActive = activeCategory === cat;
            const color = categoryColors[cat] || '#f59e0b';

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(isActive ? null : cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'text-black shadow-lg'
                    : 'bg-[#1a1a2e] border border-[#2d2d4a] text-gray-300 hover:border-amber-500/50 hover:text-white'
                }`}
                style={isActive ? { backgroundColor: color, boxShadow: `0 10px 25px -5px ${color}40` } : {}}
              >
                {cat}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${isActive ? 'bg-black/20' : 'bg-white/10'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Posts Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory || 'all'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {filteredPosts.map(({ slug, title, date, description, image, category }, i) => {
            const categoryColor = categoryColors[category || ''] || '#f59e0b';
            const estimatedReadTime = Math.max(3, Math.ceil((description?.length || 100) / 200));

            return (
              <motion.article
                key={`${slug}-${i}`}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                layout
                className="group"
              >
                <Link href={`/blog/${lang}/${slug}`} className="block">
                  <div className="bg-[#1a1a2e] border border-[#2d2d4a] rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
                    {/* Image */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={image || defaultImage}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent" />

                      {/* Category badge */}
                      {category && (
                        <div
                          className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-black"
                          style={{ backgroundColor: categoryColor }}
                        >
                          {category}
                        </div>
                      )}

                      {/* Read time */}
                      <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-gray-300">
                        {estimatedReadTime} {minReadText[lang]}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Date */}
                      <time className="text-sm text-amber-500 font-medium">
                        {new Date(date).toLocaleDateString(
                          lang === 'es' ? 'es-ES' : lang === 'fr' ? 'fr-FR' : 'en-US',
                          { year: 'numeric', month: 'long', day: 'numeric' }
                        )}
                      </time>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-white mt-2 mb-3 line-clamp-2 group-hover:text-amber-400 transition-colors">
                        {title}
                      </h2>

                      {/* Description */}
                      <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                        {description || 'Descubre cómo la automatización con IA puede transformar tu negocio.'}
                      </p>

                      {/* Read more */}
                      <div className="flex items-center gap-2 text-amber-500 font-semibold text-sm group-hover:gap-3 transition-all">
                        {readMoreText[lang]}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* No posts message */}
      {filteredPosts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-gray-400 text-lg">
            {lang === 'es' && 'No hay artículos en esta categoría aún.'}
            {lang === 'en' && 'No articles in this category yet.'}
            {lang === 'fr' && 'Pas d\'articles dans cette catégorie pour le moment.'}
          </p>
          <button
            onClick={() => setActiveCategory(null)}
            className="mt-4 text-amber-500 hover:underline"
          >
            {translations.allPosts}
          </button>
        </motion.div>
      )}
    </>
  );
}
