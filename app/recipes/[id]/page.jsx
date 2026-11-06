import { notFound } from 'next/navigation';
import { buildMeta } from '@/lib/seo';
import { allRecipes, getRecipeById, normalizeMethod } from '../app/recipes/recipes-data';
import RecipeDetailContent from '../app/recipes/[id]/RecipeDetailContent';

export const dynamicParams = false;

export function generateStaticParams() {
  return allRecipes.map((recipe) => ({ id: recipe.id }));
}

const SITE = 'https://www.tigertigerfoods.com';

const isCollection = (recipe) => Array.isArray(recipe?.recipes) && recipe.recipes.length > 0;
const absImage = (src) => (src ? `${SITE}${encodeURI(src)}` : undefined);
const stripNumber = (name) => String(name || '').replace(/^\d+\.\s*/, '');
const toIsoMinutes = (time) => {
  const nums = String(time || '').match(/\d+/g);
  return nums ? `PT${Math.max(...nums.map(Number))}M` : undefined;
};
const toYield = (servings) => {
  const match = String(servings || '').match(/\d+(?:-\d+)?/);
  return match ? `${match[0]} servings` : undefined;
};
const toCalories = (calories) => (/^\d+$/.test(String(calories || '')) ? `${calories} calories` : undefined);

function buildRecipeNode(base, recipe, url) {
  const calories = toCalories(base.calories);
  return {
    '@type': 'Recipe',
    name: stripNumber(recipe.recipe_name || recipe.title),
    url,
    image: absImage(base.image),
    description: `${stripNumber(recipe.recipe_name || recipe.title)} made with Tiger Tiger ${base.product}.`,
    recipeCuisine: base.cuisine,
    totalTime: toIsoMinutes(base.time),
    recipeYield: toYield(base.servings),
    recipeIngredient: recipe.ingredients || [],
    recipeInstructions: normalizeMethod(recipe.method).map((text) => ({ '@type': 'HowToStep', text })),
    nutrition: calories ? { '@type': 'NutritionInformation', calories } : undefined,
    author: { '@type': 'Organization', name: 'Tiger Tiger Foods' },
  };
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const recipe = getRecipeById(id);
  if (!recipe) return {};

  const extras = [
    recipe.servings && !/varies/i.test(recipe.servings)
      ? `Serves ${recipe.servings.replace(/\s*serving.*/i, '')}`
      : null,
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
    ? recipe.recipes.map((subRecipe) => buildRecipeNode(recipe, subRecipe, url))
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
