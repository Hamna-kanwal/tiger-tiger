import { getBlogsAction } from '../action';
import BlogListClient from './BlogListClient';

// Schema Markup JSON object
const blogPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://www.tigertigerfoods.com/blogs/#blog",
      "url": "https://www.tigertigerfoods.com/blogs/",
      "name": "Tiger Tiger Blog",
      "description": "Guides, explainers and recipes on pan-Asian ingredients, sauces, noodles, rice and more.",
      "isPartOf": {
        "@id": "https://www.tigertigerfoods.com/#website"
      },
      "publisher": {
        "@id": "https://www.tigertigerfoods.com/#organization"
      },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.tigertigerfoods.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.tigertigerfoods.com/blogs/"
        }
      ]
    }
  ]
};

export default async function BlogsPage() {
  // Blogs are fetched on the server, so the full HTML is sent without any client-side loading state
  let blogs = [];
  try {
    const result = await getBlogsAction();
    if (result?.success) {
      blogs = result.data;
    }
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }

  return (
    <>
      {/* --- SCHEMA SCRIPT --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPageSchema) }}
      />

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

          {/* Server renders all cards; the client component only handles Load More */}
          <BlogListClient blogs={blogs} />
        </div>
      </section>
    </>
  );
}