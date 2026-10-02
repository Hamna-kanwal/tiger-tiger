import { buildMeta } from '@/lib/seo';
import { allRecipes } from '../../page';
import RecipeDetailContent from './RecipeDetailContent';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const recipe = allRecipes.find((r) => r.id === id) || allRecipes[0];

  return buildMeta({
    title: recipe?.title || 'Recipe Details',
    description: recipe?.cuisine ? `Learn how to make ${recipe.title}. Delicious ${recipe.cuisine} recipe.` : 'Explore our delicious recipe.',
    path: '/recipes/' + id + '/',
    image: recipe?.image || '/fallback.png',
  });
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  return <RecipeDetailContent id={id} />;
}