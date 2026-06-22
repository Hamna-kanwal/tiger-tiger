import { getBlogsAction } from '../action';
import BlogsClientWrapper from './BlogsClientWrapper';

export default async function LatestBlog() {
  const result = await getBlogsAction();
  const blogs = result.success ? result.data : [];

  return (
    <BlogsClientWrapper blogs={blogs} />
  );
}