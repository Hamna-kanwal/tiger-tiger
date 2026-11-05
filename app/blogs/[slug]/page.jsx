import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildMeta } from '@/lib/seo';
import { getSingleBlogAction, getLatestSidebarBlogsAction } from '../../action';
import './blog-rich-text.css';

const SITE_URL = 'https://www.tigertigerfoods.com';
const BACKEND_URL = 'https://backend.tigertigerfoods.com';

const DEFAULT_DESCRIPTION =
  'Articles on Pan Asian ingredients, sourcing and trends for food businesses in the UK.';

// Removes HTML tags and entities
const stripHtml = (html) => {
  if (!html) return '';
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/\s+/g, ' ')
    .trim();
};

// Trims clean text to 155 characters at a word boundary
const toMetaDescription = (html, max = 155) => {
  const text = stripHtml(html);
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(' ');
  const safe = lastSpace > 100 ? cut.slice(0, lastSpace) : cut;
  return safe.replace(/[\s,.;:\-–]+$/, '') + '…';
};

// Converts a relative image path into an absolute URL
const toAbsoluteUrl = (value) => {
  if (typeof value !== 'string' || !value.trim()) return null;
  if (/^https?:\/\//i.test(value)) return value;
  return `${BACKEND_URL}${value.startsWith('/') ? '' : '/'}${value}`;
};

// Returns an ISO date string, or null when the value is missing or invalid
const toIsoDate = (value) => {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blogResult = await getSingleBlogAction(slug);
  const blog = blogResult?.success ? blogResult.data : null;

  // 1) SEO team's page_description  2) description built from the body  3) default
  const description =
    blog?.page_description?.trim() ||
    toMetaDescription(blog?.description || blog?.desc) ||
    DEFAULT_DESCRIPTION;

  return buildMeta({
    title: blog?.page_title?.trim() || blog?.title || 'Blog Details',
    description,
    path: `/blogs/${slug}/`,
    image: blog?.image || '/og-default.png',
    type: 'article',
    publishedTime: blog?.created_at, // Article publish date
  });
}

export default async function Page({ params }) {
  const { slug } = await params;

  // Fetch the blog and the sidebar posts in parallel on the server
  const [blogResult, sidebarResult] = await Promise.all([
    getSingleBlogAction(slug),
    getLatestSidebarBlogsAction(slug),
  ]);

  const blog = blogResult?.success ? blogResult.data : null;
  const relatedBlogs = sidebarResult?.success ? sidebarResult.data : [];

  // Proper 404 status when the blog does not exist
  if (!blog) {
    notFound();
  }

  // --- Structured data (BlogPosting + Breadcrumbs) ---
  const postUrl = `${SITE_URL}/blogs/${slug}/`;
  const bodyText = stripHtml(blog.description || blog.desc);
  const schemaDescription =
    blog.page_description?.trim() || toMetaDescription(blog.description || blog.desc) || DEFAULT_DESCRIPTION;
  const schemaImage = toAbsoluteUrl(blog.image);
  const datePublished = toIsoDate(blog.created_at);
  const dateModified = toIsoDate(blog.updated_at) || datePublished;
  const headline = String(blog.page_title?.trim() || blog.title || '').slice(0, 110);

  const blogPostSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${postUrl}#article`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
        url: postUrl,
        headline,
        description: schemaDescription,
        ...(schemaImage ? { image: [schemaImage] } : {}),
        ...(datePublished ? { datePublished } : {}),
        ...(dateModified ? { dateModified } : {}),
        ...(bodyText ? { wordCount: bodyText.split(' ').length } : {}),
        inLanguage: 'en-GB',
        isPartOf: { '@id': `${SITE_URL}/blogs/#blog` },
        author: { '@id': `${SITE_URL}/#organization` },
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${postUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blogs/` },
          { '@type': 'ListItem', position: 3, name: blog.title, item: postUrl },
        ],
      },
    ],
  };

  return (
    <article className="min-h-screen bg-white">
      {/* Plain script tag so the schema is part of the server HTML */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />

      {/* Header Banner */}
      <div className="pt-32 pb-44 px-6 text-center bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-black text-[#431A4F] uppercase leading-tight tracking-tighter">
            {blog.title}
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-32 relative z-10">
        <div className="w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white bg-white">
          <Image
            src={blog.image || "/fallback.png"}
            alt={blog.image_alt_text || blog.title}
            width={1200}
            height={675}
            priority
            className="w-full h-auto object-contain"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      </div>

      {/* Main Content & Sidebar */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Blog Content */}
        <div className="lg:col-span-8">
          <div
            className="blog-rich-text prose prose-lg prose-purple max-w-none text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.description || blog.desc }}
          />
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-8 mb-10">
            <h2 className="text-[#431A4F] font-black text-2xl uppercase tracking-tighter border-b-4 border-[#431A4F] inline-block mb-6">
              Latest Reads
            </h2>

            <div className="space-y-6">
              {relatedBlogs.map((item) => (
                <Link
                  key={item._id || item.slug}
                  href={`/blogs/${item.slug.replace(/^\/+/, '')}`}
                  className="group flex flex-col bg-[#431A4F] rounded-[1.5rem] overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative w-full h-40 overflow-hidden bg-[#35153f]">
                    <Image
                      src={item.image || "/fallback.png"}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-white font-bold text-base leading-tight uppercase tracking-tight line-clamp-2 mb-4">
                      {item.title}
                    </h3>
                    <span className="text-white font-black text-[10px] uppercase tracking-[0.2em] border-b-2 border-[#D2B57B] pb-1">
                      READ MORE
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}