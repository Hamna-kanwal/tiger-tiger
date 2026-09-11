export const metadata = {
  title: "Asian Recipes | Tiger Tiger Foods",
  description: "Discover authentic pan-Asian recipes using Tiger Tiger ingredients. Japanese, Korean, Thai, Chinese and specialty recipes with step-by-step instructions.",
  alternates: {
    canonical: "https://www.tigertigerfoods.com/recipes/",
    languages: {
      "japanese": "https://www.tigertigerfoods.com/recipes/?cuisine=Japanese",
      "korean": "https://www.tigertigerfoods.com/recipes/?cuisine=Korean",
      "thai": "https://www.tigertigerfoods.com/recipes/?cuisine=Thai",
      "chinese": "https://www.tigertigerfoods.com/recipes/?cuisine=Chinese",
      "vietnam": "https://www.tigertigerfoods.com/recipes/?cuisine=Vietnam",
      "others": "https://www.tigertigerfoods.com/recipes/?cuisine=Others"
    }
  }
};

export default function RecipesLayout({ children }) {
  return children;
}
