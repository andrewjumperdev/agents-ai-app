// app/blog/[lang]/page.tsx
import Link from 'next/link';
import { getAllPosts } from '@/app/utils/posts';
import { translations } from '@/app/libs/translations';
import BlogGrid from '../BlogGrid';
import { Post } from '@/app/types/types';

export type SupportedLang = 'es' | 'en' | 'fr';

interface PageParams {
  lang: SupportedLang;
}

// Ahora params viene como promesa
interface BlogPageProps {
  params: Promise<PageParams>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { lang } = await params; // <-- importante: await la promesa

  const supportedLangs: SupportedLang[] = ['es', 'en', 'fr'];
  const safeLang: SupportedLang = supportedLangs.includes(lang) ? lang : 'es';

  const posts: Post[] = await getAllPosts(safeLang);
  const t = translations[safeLang] || translations['en'];

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Botón volver */}
      <div className="mb-8 flex gap-3 flex-wrap">
        <Link href={`/`}>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-700 hover:scale-105 transform transition-all duration-300">
            ← {t.backButton.split(' ')[0]}
          </button>
        </Link>
      </div>

      {/* Título */}
      <h1 className="text-5xl font-extrabold mb-12 text-gray-900 dark:text-gray-100 animate-fade-in">
        Blog
      </h1>

      {/* Grid de posts */}
      <BlogGrid posts={posts} lang={safeLang} />

      {/* CTA */}
      <section className="mt-16 text-center relative animate-fade-in-up">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-blue-500/20 -z-10 blur-3xl"></div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          {safeLang === 'es'
            ? '¿Quieres que tu negocio venda más con IA?'
            : safeLang === 'fr'
            ? 'Voulez-vous que votre entreprise vende plus grâce à l’IA ?'
            : 'Want your business to sell more with AI?'}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          {safeLang === 'es'
            ? 'Descubre cómo nuestros agentes inteligentes pueden automatizar ventas, seguimiento y marketing.'
            : safeLang === 'fr'
            ? 'Découvrez comment nos agents intelligents peuvent automatiser les ventes, le suivi et le marketing.'
            : 'Discover how our intelligent agents can automate sales, follow-ups, and marketing.'}
        </p>
        <Link
          href="https://calendly.com/aacpariscr/new-meeting"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transform transition-all duration-300 flex items-center gap-2 mx-auto">
            {t.ctaDemo} <span className="animate-bounce">🚀</span>
          </button>
        </Link>
      </section>
    </main>
  );
}

// Generación de rutas estáticas compatible con Next 15
export async function generateStaticParams() {
  const langs: SupportedLang[] = ['es', 'en', 'fr'];
  // Retorna como Promise implícita (Next lo maneja)
  return langs.map((lang) => ({ lang }));
}
