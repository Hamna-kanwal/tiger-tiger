import { allRecipes } from "../page";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const recipe = allRecipes.find((r) => r.id === id) || allRecipes[0];
  
  // If collection, use first sub-recipe for metadata
  const displayRecipe = Array.isArray(recipe?.recipes) && recipe.recipes.length > 0 
    ? recipe.recipes[0] 
    : recipe;

  return {
    title: `${displayRecipe.title} | Tiger Tiger Recipes`,
    description: `Learn how to make ${displayRecipe.title}. A ${displayRecipe.cuisine} recipe using Tiger Tiger ${displayRecipe.product}. Serves ${displayRecipe.servings}, ready in ${displayRecipe.time}.`,
    alternates: {
      canonical: `https://www.tigertigerfoods.com/recipes/${id}/`
    }
  };
}

export default function RecipeLayout({ children }) {
  return children;
}
