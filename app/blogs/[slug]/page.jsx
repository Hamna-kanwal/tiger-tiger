import { buildMeta } from '@/lib/seo';
import { getSingleBlogAction } from '../../action';
import BlogDetailContent from './BlogDetailContent';

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
    publishedTime: blog?.publishedAt || blog?.createdAt, // Article publish date ke liye
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <BlogDetailContent slug={slug} />;
}