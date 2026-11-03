import { notFound } from 'next/navigation';
import { buildMeta } from '@/lib/seo';
import { allRecipes, getRecipeById, normalizeMethod } from '../recipes-data';
import RecipeDetailContent from './RecipeDetailContent';

// Only the recipes in allRecipes exist; any other id is a real 404 (no more allRecipes[0] fallback)
export const dynamicParams = false;

export function generateStaticParams() {
  return allRecipes.map((r) => ({ id: r.id }));
}

const SITE = 'https://www.tigertigerfoods.com';

const isCollection = (r) => Array.isArray(r?.recipes) && r.recipes.length > 0;
const absImage = (src) => (src ? `${SITE}${encodeURI(src)}` : undefined);
const stripNumber = (name) => String(name || '').replace(/^\d+\.\s*/, '');
const toIsoMinutes = (t) => {
  const nums = String(t || '').match(/\d+/g);
  return nums ? `PT${Math.max(...nums.map(Number))}M` : undefined;
};
const toYield = (s) => {
  const m = String(s || '').match(/\d+(?:-\d+)?/);
  return m ? `${m[0]} servings` : undefined;
};
const toCalories = (c) => (/^\d+$/.test(String(c || '')) ? `${c} calories` : undefined);

function buildRecipeNode(base, r, url) {
  const cal = toCalories(base.calories);
  return {
    '@type': 'Recipe',
    name: stripNumber(r.recipe_name || r.title),
    url,
    image: absImage(base.image),
    description: `${stripNumber(r.recipe_name || r.title)} made with Tiger Tiger ${base.product}.`,
    recipeCuisine: base.cuisine,
    totalTime: toIsoMinutes(base.time),
    recipeYield: toYield(base.servings),
    recipeIngredient: r.ingredients || [],
    recipeInstructions: normalizeMethod(r.method).map((text) => ({ '@type': 'HowToStep', text })),
    nutrition: cal ? { '@type': 'NutritionInformation', calories: cal } : undefined,
    author: { '@type': 'Organization', name: 'Tiger Tiger Foods' },
  };
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const recipe = getRecipeById(id);
  if (!recipe) return {};

  const extras = [
    recipe.servings && !/varies/i.test(recipe.servings) ? `Serves ${recipe.servings.replace(/\s*serving.*/i, '')}` : null,
    recipe.time ? `ready in ${recipe.time}` : null,
  ].filter(Boolean).join(', ');

  return buildMeta({
    title: recipe.title,
    description: `Learn how to make ${recipe.title}. A ${recipe.cuisine} recipe using Tiger Tiger ${recipe.product}.${extras ? ` ${extras}.` : ''}`,
    path: `/recipes/${id}/`,
    image: recipe.image || '/fallback.png',
  });
}

export default async function Page({ params }) {
  const { id } = await params;
  const recipe = getRecipeById(id);
  if (!recipe) notFound();

  const url = `${SITE}/recipes/${id}/`;
  const nodes = isCollection(recipe)
    ? recipe.recipes.map((r) => buildRecipeNode(recipe, r, url))
    : [buildRecipeNode(recipe, recipe, url)];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'Recipes', item: `${SITE}/recipes/` },
          { '@type': 'ListItem', position: 3, name: recipe.title, item: url },
        ],
      },
      ...nodes,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
      />
      <RecipeDetailContent recipe={recipe} />
    </>
  );
}
