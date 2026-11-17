import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogsAction } from '../action';

const brandPurple = "#431A4F";
export const PER_PAGE = 12;

// Strips HTML tags and trims the text to a short excerpt
const toExcerpt = (html, max = 160) => {
  if (!html) return "";
  const text = html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 100 ? cut.slice(0, lastSpace) : cut).replace(/[\s,.;:\-]+$/, '') + '…';
};

export async function loadBlogs() {
  try {
    const result = await getBlogsAction();
    if (result?.success) return result.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
  return [];
}

const pageHref = (n) => (n === 1 ? '/blogs/' : `/blogs/page/${n}/`);

function Pagination({ page, totalPages }) {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const base =
    "px-5 py-3 rounded-full font-black text-sm border-2 border-[#431A4F] transition-all duration-300";

  return (
    <div role="navigation" aria-label="Blog pagination" className="mt-16 flex flex-wrap justify-center gap-3">
      {page > 1 && (
        <Link href={pageHref(page - 1)} rel="prev" className={`${base} text-[#431A4F] hover:bg-[#431A4F] hover:text-white`}>
          Previous
        </Link>
      )}
      {pages.map((n) => (
        <Link
          key={n}
          href={pageHref(n)}
          aria-current={n === page ? 'page' : undefined}
          aria-label={`Page ${n}`}
          className={`${base} ${
            n === page
              ? 'bg-[#431A4F] text-white'
              : 'text-[#431A4F] hover:bg-[#431A4F] hover:text-white'
          }`}
        >
          {n}
        </Link>
      ))}
      {page < totalPages && (
        <Link href={pageHref(page + 1)} rel="next" className={`${base} text-[#431A4F] hover:bg-[#431A4F] hover:text-white`}>
          Next
        </Link>
      )}
    </div>
  );
}

export default function BlogListView({ blogs, page }) {
  const totalPages = Math.max(1, Math.ceil(blogs.length / PER_PAGE));
  const start = (page - 1) * PER_PAGE;

  // Only the fields each card needs are kept
  const cards = blogs.slice(start, start + PER_PAGE).map((blog) => ({
    key: blog._id || blog.slug,
    title: blog.title || "",
    slug: (blog.slug || "").replace(/^\/+/, ''),
    image: blog.image || "/fallback.png",
    excerpt: toExcerpt(blog.description || blog.desc) || "Explore our latest culinary insights.",
  }));

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 mt-8">
          <h1 className="text-[32px] md:text-[45px] font-black text-[#431A4F] uppercase tracking-tighter">
            Asian Food Blog
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-[#431A4F] mb-6 opacity-90">
            Read news, blogs and latest articles from Tiger Tiger Foods
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <article
              key={card.key}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <Image
                  src={card.image}
                  alt={card.title || "Blog post image"}
                  fill
                  quality={70}
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  {...(index === 0
                    ? { preload: true, fetchPriority: "high", loading: "eager" }
                    : { loading: "lazy" })}
                />
                <div className="absolute inset-0 bg-[#431A4F]/70 flex flex-col items-center justify-center p-6 text-center transition-all group-hover:bg-[#431A4F]/85">
                  <p aria-hidden="true" className="text-white font-black text-xl md:text-2xl leading-tight mb-2 line-clamp-3">
                    {card.title}
                  </p>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow text-center items-center">
                <h2 className="font-extrabold text-[#431A4F] text-lg mb-3 uppercase tracking-tight line-clamp-2">
                  {card.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {card.excerpt}
                </p>
                <Link
                  href={`/blogs/${card.slug}`}
                  className="flex items-center gap-2 font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:gap-4 hover:text-[#D2B57B]"
                  style={{ color: brandPurple }}
                >
                  Read More<span className="sr-only"> about {card.title}</span> <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {blogs.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            No blogs available at this time.
          </div>
        )}

        <Pagination page={page} totalPages={totalPages} />
      </div>
    </section>
  );
}