import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildMeta } from '@/lib/seo';
import { getSingleBlogAction, getLatestSidebarBlogsAction } from '../../action';
import './blog-rich-text.css';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blogResult = await getSingleBlogAction(slug);
  const blog = blogResult?.success ? blogResult.data : null;

  return buildMeta({
    title: blog?.title || 'Blog Details',
    description: blog?.excerpt || blog?.description?.substring(0, 155) || 'Articles on Pan Asian ingredients, sourcing and trends for food businesses in the UK.',
    path: `/blogs/${slug}/`,
    image: blog?.image || '/og-default.png',
    type: 'article',
    publishedTime: blog?.publishedAt || blog?.createdAt, // Article publish date
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

  return (
    <article className="min-h-screen bg-white">
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
            alt={blog.title}
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