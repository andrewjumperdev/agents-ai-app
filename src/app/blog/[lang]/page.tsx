import Link from 'next/link';
import { getAllPosts } from '@/app/utils/posts';
import BlogGrid from '../BlogGrid';
import { Post } from '@/app/types/types';
import { Metadata } from 'next';

export type SupportedLang = 'es' | 'en' | 'fr';

interface PageParams {
  lang: SupportedLang;
}

interface BlogPageProps {
  params: Promise<PageParams>;
}

const blogTranslations = {
  es: {
    title: 'Blog',
    subtitle: 'Recursos y guías para automatizar tu negocio con IA',
    back: 'Inicio',
    ctaTitle: '¿Listo para automatizar tu negocio?',
    ctaDesc: 'Descubre cómo nuestros 9 agentes IA pueden multiplicar tus ventas y ahorrarte horas de trabajo.',
    ctaButton: 'Probar 7 días gratis',
    categories: 'Categorías',
    allPosts: 'Todos los artículos',
    noPosts: 'Próximamente publicaremos contenido increíble sobre automatización con IA.',
  },
  en: {
    title: 'Blog',
    subtitle: 'Resources and guides to automate your business with AI',
    back: 'Home',
    ctaTitle: 'Ready to automate your business?',
    ctaDesc: 'Discover how our 9 AI agents can multiply your sales and save you hours of work.',
    ctaButton: 'Try 7 days free',
    categories: 'Categories',
    allPosts: 'All articles',
    noPosts: 'We will soon publish amazing content about AI automation.',
  },
  fr: {
    title: 'Blog',
    subtitle: 'Ressources et guides pour automatiser votre entreprise avec l\'IA',
    back: 'Accueil',
    ctaTitle: 'Prêt à automatiser votre entreprise?',
    ctaDesc: 'Découvrez comment nos 9 agents IA peuvent multiplier vos ventes et vous faire gagner des heures.',
    ctaButton: 'Essayer 7 jours gratuits',
    categories: 'Catégories',
    allPosts: 'Tous les articles',
    noPosts: 'Nous publierons bientôt du contenu incroyable sur l\'automatisation IA.',
  },
};

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { lang } = await params;
  const t = blogTranslations[lang] || blogTranslations['es'];

  return {
    title: `${t.title} | Jumper - Automatización con IA`,
    description: t.subtitle,
    openGraph: {
      title: `${t.title} | Jumper`,
      description: t.subtitle,
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { lang } = await params;
  const supportedLangs: SupportedLang[] = ['es', 'en', 'fr'];
  const safeLang: SupportedLang = supportedLangs.includes(lang) ? lang : 'es';

  const posts: Post[] = await getAllPosts(safeLang);
  const t = blogTranslations[safeLang];

  // Get unique categories sorted by post count
  const categoryCounts = posts.reduce((acc, post) => {
    if (post.category) {
      acc[post.category] = (acc[post.category] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  const categories = Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([cat]) => cat);

  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0f]" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-500 transition-colors mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t.back}
          </Link>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          {posts.length > 0 ? (
            <BlogGrid
              posts={posts}
              lang={safeLang}
              categories={categories}
              translations={{ allPosts: t.allPosts }}
            />
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-gray-400 text-lg">{t.noPosts}</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-12 text-center overflow-hidden">
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                {t.ctaTitle}
              </h2>
              <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
                {t.ctaDesc}
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-black text-amber-500 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-900 transition-colors"
              >
                {t.ctaButton}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer mini */}
      <footer className="py-8 px-6 border-t border-[#1a1a2e]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
            Jumper
          </Link>
          <p className="text-gray-500 text-sm">
            © 2025 Jumper Enterprise. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

export async function generateStaticParams() {
  const langs: SupportedLang[] = ['es', 'en', 'fr'];
  return langs.map((lang) => ({ lang }));
}
