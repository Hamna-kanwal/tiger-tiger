// Recipe data (moved out of the old "use client" page.jsx so server components can import it).
// Content is unchanged.

export const allRecipes = [
  // --- JAPANESE ---
  { 
    id: "chicken-katsu", 
    title: "Chicken Katsu Curry With Rice", 
    cuisine: "Japanese", 
    product: "Sauces", 
    time: "30 min", 
    servings: "5 Serving", 
    calories: "320", 
    image: "/curry.webp",
    ingredients: [
      "1 tablespoon vegetable oil",
      "1 medium yellow onion, thinly sliced",
      "1 medium carrot, peeled and cut into small chunks",
      "1 large potato, peeled and cut into medium chunks",
      "2½ cups (600ml) water",
      "1 box (4 blocks) Tiger Tiger Golden Katsu Curry Japanese Style HOT Curry Mix Block"
    ],
    method: [
      "Simmer Vegetables: Sauté 1 sliced onion and chunks of 1 carrot and 1 potato in a pot with a little oil. Add 2½ cups of water, bring to a boil, and simmer until tender (approx. 15-20 min)." ,
      "Dissolve Curry Blocks: Turn off the heat. Break the Tiger Tiger Golden Katsu Curry Mix Blocks into the pot. Stir until fully dissolved. Turn heat back on low and simmer 5-10 minutes until thick. Keep warm.",
      "Prepare Chicken Katsu: Season 2 flattened chicken breasts with salt and pepper. Dredge in flour, dip in beaten egg, and coat thoroughly with Panko breadcrumbs.",
      "Fry Katsu: Heat 1 inch of oil in a skillet over medium-high heat. Fry each breaded chicken breast until deep golden brown and cooked through (4-5 minutes per side). Drain on paper towels.",
      "Serve: Slice the chicken katsu. Serve with cooked white rice, and ladle the rich Tiger Tiger Katsu Curry Sauce over the rice and katsu"
    ]
  },

  // --- KOREAN (UPDATED) ---
  { 
    id: "tteokbokki", 
    title: "TT - Chopped Rice Cake (Tteokbokki)", 
    cuisine: "Korean", 
    product: "Rice", 
    time: "40 min", 
    servings: "2 Serving", 
    calories: "450", 
    image: "/Korean 1.jpeg",
    ingredients: [
      "1 pack (500g) Tiger Tiger Chopped Rice Cake",
      "3 cups (700ml) water or anchovy/dashi stock",
      "3 tablespoons Tiger Tiger Gochujang Hot Pepper Paste",
      "1 tablespoon gochugaru (Korean red chilli flakes)",
      "2 tablespoons soy sauce",
      "1½ tablespoons sugar (or honey)",
      "2 cloves garlic, finely minced",
      "1 small onion, thinly sliced",
      "2 spring onions, cut into 2-inch pieces (whites and greens separated)",
      "2 sheets fish cake (eomuk), cut into bite-sized triangles (optional)",
      "2 boiled eggs, peeled (optional)",
      "1 teaspoon toasted sesame seeds, to garnish",
      "1 teaspoon sesame oil, to finish"
    ],
    method: [
      "Soak Rice Cakes: Place the Tiger Tiger Chopped Rice Cakes in a bowl of cold water and soak for 15-20 minutes to soften. If the cakes are already soft/fresh, a quick 5-minute rinse is enough. Drain and set aside.",
      "Make the Sauce Base: In a small bowl, whisk together the Tiger Tiger Gochujang Hot Pepper Paste, gochugaru, soy sauce, sugar, and minced garlic until smooth. Set aside.",
      "Build the Broth: Pour 3 cups of water (or anchovy/dashi stock) into a wide pan or shallow pot. Add the sliced onion and the white parts of the spring onions. Bring to a gentle boil over medium-high heat.",
      "Add Sauce & Rice Cakes: Stir the Tiger Tiger Gochujang sauce mixture into the boiling broth until fully dissolved. Add the drained rice cakes and fish cake pieces. Stir well to coat everything in the sauce.",
      "Simmer Until Thickened: Let the mixture bubble away over medium heat for 8-10 minutes, stirring occasionally to prevent sticking. The rice cakes will turn chewy and plump, and the sauce will reduce into a glossy, thick coating. If it gets too thick, splash in a little more water.",
      "Finish & Garnish: Add the boiled eggs and the green parts of the spring onions. Stir gently for another 1-2 minutes. Turn off the heat, drizzle with sesame oil, and sprinkle with toasted sesame seeds."
    ]
  },
  { 
    id: "tteokguk-beef", 
    title: "Classic Beef Tteokguk", 
    cuisine: "Korean", 
    product: "Rice", 
    time: "55-60 min", 
    servings: "4 Serving", 
    calories: "490", 
    image: "/Korean 2.jpeg",
    ingredients: [
      "1 pack (500g) Tiger Tiger Sliced Rice Cake",
      "200g beef brisket or sirloin, thinly sliced",
      "8 cups (1.8L) beef stock (or water + 1 beef stock cube)",
      "4 garlic cloves, finely minced",
      "2 tablespoons soy sauce",
      "1 tablespoon sesame oil",
      "1 teaspoon salt (to taste)",
      "½ teaspoon ground black pepper",
      "2 large eggs",
      "2 spring onions, thinly sliced on the diagonal",
      "2 sheets roasted seaweed (gim/nori), cut into thin strips",
      "1 teaspoon toasted sesame seeds, to garnish",
      "1 teaspoon vegetable oil (for egg garnish)"
    ],
    method: [
      "Soak Rice Cakes: Place the Tiger Tiger Sliced Rice Cakes in a bowl of cold water and soak for 20-30 minutes to soften. Drain just before adding to the soup.",
      "Sauté the Beef: Heat the sesame oil in a large pot over medium heat. Add the sliced beef and minced garlic, sauté for 2-3 minutes until the beef changes colour and becomes fragrant.",
      "Build the Broth: Pour in 8 cups of beef stock and add the soy sauce. Bring to a boil, then reduce heat to a gentle simmer. Skim off any foam that rises to the surface. Simmer for 10-15 minutes.",
      "Make Egg Garnish (Jidan): Separate the egg yolks from the whites and lightly beat each in separate bowls. Heat a non-stick pan with a touch of oil over low heat. Cook the yolk mixture as a thin omelette (1-2 minutes), then repeat with the whites. Roll each up and slice into thin ribbons.",
      "Cook Rice Cakes: Add the drained Tiger Tiger Sliced Rice Cakes to the simmering broth. Cook for 5-7 minutes until soft, chewy, and floating to the surface.",
      "Season & Finish: Taste and adjust with salt and pepper. The broth should be clean, beefy, and lightly savoury.",
      "Serve: Ladle into bowls and top with egg jidan ribbons, sliced spring onions, seaweed strips, and a sprinkle of toasted sesame seeds."
    ]
  },
  { 
    id: "tteokguk-veg", 
    title: "Vegetarian Tteokguk (Mushroom & Tofu)", 
    cuisine: "Korean", 
    product: "Rice", 
    time: "70 min", 
    servings: "4 Serving", 
    calories: "400", 
    image: "/Korean 3.jpeg",
    ingredients: [
      "1 pack (500g) Tiger Tiger Sliced Rice Cake",
      "150g shiitake or king oyster mushrooms, sliced",
      "200g firm tofu, cut into bite-sized cubes",
      "8 cups (1.8L) vegetable broth",
      "4 dried shiitake mushrooms",
      "1 piece kombu (dried kelp), about 10cm square",
      "½ daikon radish, chunked (or use 1 small onion if unavailable)",
      "4 garlic cloves, finely minced",
      "2 tablespoons soy sauce",
      "1 tablespoon sesame oil",
      "1 teaspoon salt (to taste)",
      "½ teaspoon ground black pepper",
      "2 large eggs (omit for vegan)",
      "2 spring onions, thinly sliced on the diagonal",
      "2 sheets roasted seaweed (gim/nori), cut into thin strips",
      "1 teaspoon toasted sesame seeds, to garnish",
      "1 teaspoon vegetable oil (for egg garnish)"
    ],
    method: [
      "Make the Broth: In a large pot, combine 8 cups of water with the dried shiitake mushrooms, kombu, and daikon chunks. Simmer over low heat for 25-30 minutes. Strain and discard the solids, keeping the broth.",
      "Soak Rice Cakes: While the broth simmers, soak the Tiger Tiger Sliced Rice Cakes in cold water for 20-30 minutes. Drain and set aside.",
      "Sauté Mushrooms & Tofu: Heat the sesame oil in a separate pan over medium heat. Add the fresh sliced mushrooms and minced garlic, sauté for 3-4 minutes until softened and fragrant. Add the tofu cubes and pan-fry until lightly golden on the edges (4-5 minutes).",
      "Combine & Build Flavour: Add the sautéed mushrooms, tofu, and soy sauce to the strained vegetable broth. Bring to a gentle simmer for 5 minutes to let the flavours meld.",
      "Make Egg Garnish (Jidan): Separate the egg yolks from the whites, lightly beat each, and cook as thin omelettes in a non-stick pan. Roll up and slice into thin ribbons. (Skip for vegan version.)",
      "Cook Rice Cakes: Add the drained Tiger Tiger Sliced Rice Cakes to the simmering broth. Cook for 5-7 minutes until soft, chewy, and floating to the surface.",
      "Season & Finish: Taste and adjust with salt and pepper. The broth should be deeply umami, earthy, and clean.",
      "Serve: Ladle into bowls and top with egg jidan ribbons (if using), sliced spring onions, seaweed strips, and toasted sesame seeds."
    ]
  },

  // --- THAI ---
  { 
    id: "chicken-thai-green-curry", 
    title: "Chicken Thai Green Curry", 
    cuisine: "Thai", 
    product: "Sauces", 
    time: "40 min", 
    servings: "4 Serving", 
    calories: "720", 
    image: "/thai 1.jpeg",
    ingredients: [
      "500g boneless chicken thighs (or breast), cut into bite-sized pieces",
      "3-4 tablespoons Tiger Tiger Green Curry Paste",
      "400ml Tiger Tiger Coconut Milk (full-fat)",
      "100ml chicken stock or water",
      "2 tablespoons Fish Sauce",
      "1½ tablespoons palm sugar (or brown sugar)",
      "1 tablespoon vegetable oil",
      "1 small aubergine, cut into bite-sized chunks",
      "1 red bell pepper, sliced",
      "100g bamboo shoots, drained",
      "4-5 kaffir lime leaves, torn",
      "2 stalks lemongrass, bruised",
      "1-inch piece galangal (or ginger), sliced",
      "1-2 bird's eye chillies, sliced (optional)",
      "Small handful fresh Thai basil leaves",
      "Juice of ½ lime",
      "Tiger Tiger Jasmine Rice, to serve"
    ],
    method: [
      "Prep Everything: Slice the chicken, vegetables, and aromatics. Bruise the lemongrass and tear the kaffir lime leaves.",
      "Bloom the Curry Paste: Scoop the thick coconut cream from the top of the can (4-5 tbsp) into a wok. Heat until it bubbles and splits. Add the Tiger Tiger Green Curry Paste and fry for 2-3 minutes until deeply fragrant.",
      "Add the Chicken: Tip in chicken pieces and stir-fry for 3-4 minutes until sealed.",
      "Add Coconut Milk & Aromatics: Pour in the remaining Tiger Tiger Coconut Milk and chicken stock. Add bruised lemongrass, galangal, and torn kaffir lime leaves. Bring to a gentle simmer.",
      "Simmer the Chicken: Cook over medium-low heat for 8-10 minutes until chicken is tender.",
      "Add the Vegetables: Add aubergine and simmer for 4-5 minutes. Add bell pepper and bamboo shoots; cook for another 3-4 minutes.",
      "Season & Balance: Stir in Tiger Tiger Fish Sauce, palm sugar, and chillies (if using). Adjust taste — it should be salty, slightly sweet, with a spicy kick. Squeeze in lime juice.",
      "Finish & Serve: Turn off heat, stir in fresh Thai basil leaves, and ladle over steaming Tiger Tiger Jasmine Rice."
    ]
  },
  { 
    id: "tofu-thai-green-curry", 
    title: "Tofu & Vegetable Thai Green Curry", 
    cuisine: "Thai", 
    product: "Sauces", 
    time: "40 min", 
    servings: "4 Serving", 
    calories: "580", 
    image: "/thai 2.jpeg",
    ingredients: [
      "300g firm tofu, pressed and cubed",
      "150g shiitake or button mushrooms, sliced",
      "3-4 tablespoons Tiger Tiger Green Curry Paste",
      "400ml Tiger Tiger Coconut Milk (full-fat)",
      "100ml vegetable stock",
      "2 tablespoons Tiger Tiger Light Soy Sauce",
      "1 teaspoon mushroom seasoning (optional)",
      "1½ tablespoons palm sugar (or brown sugar)",
      "2 tablespoons vegetable oil",
      "1 small aubergine, cut into bite-sized chunks",
      "1 red bell pepper, sliced",
      "100g Tiger Tiger bamboo shoots, drained",
      "100g sugar snap peas or green beans",
      "4-5 kaffir lime leaves, torn",
      "2 stalks lemongrass, bruised",
      "1-inch piece galangal (or ginger), sliced",
      "1-2 bird's eye chillies, sliced (optional)",
      "Small handful fresh Thai basil leaves",
      "Juice of ½ lime",
      "Tiger Tiger Jasmine Rice, to serve"
    ],
    method: [
      "Crisp the Tofu: Pan-fry cubed tofu in 1 tbsp oil over medium-high heat for 5-6 minutes until golden on all sides. Set aside.",
      "Bloom the Curry Paste: Scoop the thick coconut cream (4-5 tbsp) into a wok. Heat until it bubbles and splits. Add the Tiger Tiger Green Curry Paste and fry for 2-3 minutes until deeply fragrant.",
      "Sauté Mushrooms: Add mushrooms and stir-fry for 2-3 minutes, letting them soak up the paste.",
      "Add Coconut Milk & Aromatics: Pour in the remaining Tiger Tiger Coconut Milk and vegetable stock. Add lemongrass, galangal, and torn kaffir lime leaves. Bring to a gentle simmer.",
      "Add Vegetables: Add aubergine and simmer for 4-5 minutes. Add bell pepper, bamboo shoots, and sugar snap peas; cook for another 3-4 minutes.",
      "Add Tofu & Season: Fold in the crispy tofu. Stir in Tiger Tiger Light Soy Sauce, mushroom seasoning, palm sugar, and chillies. Taste and adjust balance. Squeeze in lime juice.",
      "Finish & Serve: Turn off heat, stir in fresh Thai basil leaves, and serve over hot Tiger Tiger Jasmine Rice."
    ]
  },
  { 
    id: "classic-chicken-chop-suey", 
    title: "Classic Chicken Chop Suey", 
    cuisine: "Chinese", 
    product: "Noodles", 
    time: "30 min", 
    servings: "3-4 Serving", 
    calories: "520", 
    image: "/Chinese 1.jpg.jpeg",
    ingredients: [
      "300g Tiger Tiger Gold Chop Suey No.1 Noodles (uncooked weight)",
      "250g chicken breast, thinly sliced",
      "2 tablespoons vegetable oil",
      "2 garlic cloves, finely minced",
      "1 teaspoon fresh ginger, grated",
      "1 small onion, sliced",
      "1 medium carrot, julienned",
      "1 stick celery, sliced on the diagonal",
      "100g shiitake or button mushrooms, sliced",
      "½ small Chinese cabbage (or pak choi), roughly chopped",
      "100g beansprouts",
      "50g water chestnuts or bamboo shoots, sliced (optional)",
      "2 spring onions, cut into 2-inch pieces",
      "For the Sauce: 3 tablespoons Tiger Tiger Oyster Sauce, 2 tablespoons Tiger Tiger Light Soy Sauce, 1 tablespoon Shaoxing rice wine (or dry sherry), 1 teaspoon Tiger Tiger Blended Sesame Oil, 1 teaspoon sugar, 200ml chicken stock, 1½ tablespoons cornflour mixed with 3 tablespoons cold water, ½ teaspoon white pepper"
    ],
    method: [
      "Cook the Noodles: Bring a large pot of water to a boil. Add the Tiger Tiger Gold Chop Suey No.1 Noodles and boil until just tender (3-4 minutes). Drain thoroughly, rinse under cold water, toss with a teaspoon of oil to prevent sticking, and set aside.",
      "Mix the Sauce: In a bowl, whisk together the Tiger Tiger Oyster Sauce, Tiger Tiger Light Soy Sauce, Shaoxing wine, Tiger Tiger Blended Sesame Oil, sugar, chicken stock, and white pepper. Keep the cornflour slurry separate.",
      "Stir-Fry the Chicken: Heat 1 tablespoon of oil in a wok over high heat until smoking. Add the sliced chicken and stir-fry for 3-4 minutes until golden and just cooked through. Remove and set aside.",
      "Stir-Fry the Aromatics: Add the remaining 1 tablespoon of oil to the wok. Add the garlic, ginger, and onion. Stir-fry for 30 seconds until fragrant.",
      "Add the Hard Vegetables: Add the carrot, celery, and mushrooms. Stir-fry over high heat for 2-3 minutes until just tender-crisp.",
      "Add the Soft Vegetables: Toss in the Chinese cabbage, Tiger Tiger canned beansprouts, and Tiger Tiger water chestnuts (if using). Stir-fry for another 1-2 minutes.",
      "Build the Sauce: Return the chicken to the wok. Pour in the sauce mixture and bring to a gentle boil. Stir in the cornflour slurry and stir continuously for 1-2 minutes until the sauce thickens to a glossy coating.",
      "Combine & Serve: Add the cooked noodles to the wok along with the spring onions. Toss everything together for 1 minute until the noodles are heated through and coated in sauce. Serve immediately."
    ]
  },
  { 
    id: "vegetable-chop-suey", 
    title: "Vegetable Chop Suey", 
    cuisine: "Chinese", 
    product: "Noodles", 
    time: "35 min", 
    servings: "3-4 Serving", 
    calories: "470", 
    image: "/Chinese 2.jpg.jpeg",
    ingredients: [
      "300g Tiger Tiger Gold Chop Suey No.1 Noodles (uncooked weight)",
      "200g firm tofu, cubed (or 200g mixed mushrooms for a meatier feel)",
      "2 tablespoons vegetable oil",
      "2 garlic cloves, finely minced",
      "1 teaspoon fresh ginger, grated",
      "1 small onion, sliced",
      "1 medium carrot, julienned",
      "1 stick celery, sliced on the diagonal",
      "100g shiitake or button mushrooms, sliced",
      "1 red bell pepper, julienned",
      "½ small Chinese cabbage (or pak choi), roughly chopped",
      "100g beansprouts",
      "50g water chestnuts or bamboo shoots, sliced (optional)",
      "2 spring onions, cut into 2-inch pieces",
      "For the Sauce: 3 tablespoons Tiger Tiger Oyster Sauce (or vegetarian mushroom-based 'oyster' sauce if strictly veg), 2 tablespoons Tiger Tiger Light Soy Sauce, 1 tablespoon Shaoxing rice wine (or dry sherry), 1 teaspoon Tiger Tiger Blended Sesame Oil, 1 teaspoon sugar, 200ml vegetable stock, 1½ tablespoons cornflour mixed with 3 tablespoons cold water, ½ teaspoon white pepper"
    ],
    method: [
      "Cook the Noodles: Boil the Tiger Tiger Gold Chop Suey No.1 Noodles in salted water until just tender (3-4 minutes). Drain, rinse under cold water, toss with oil, and set aside.",
      "Mix the Sauce: Whisk together the oyster sauce, Tiger Tiger Light Soy Sauce, Shaoxing wine, Tiger Tiger Blended Sesame Oil, sugar, vegetable stock, and white pepper.",
      "Crisp the Tofu: Heat 1 tablespoon of oil in a wok over medium-high heat. Pan-fry the tofu cubes for 5-6 minutes, turning occasionally, until golden on all sides. Remove and set aside.",
      "Stir-Fry the Aromatics: Add the remaining oil to the wok. Add garlic, ginger, and onion. Stir-fry for 30 seconds until fragrant.",
      "Add the Hard Vegetables: Toss in the carrot, celery, mushrooms, and bell pepper. Stir-fry over high heat for 2-3 minutes until tender-crisp.",
      "Add the Soft Vegetables: Add the Chinese cabbage, beansprouts, and water chestnuts (if using). Stir-fry for another 1-2 minutes.",
      "Build the Sauce: Return the crispy tofu to the wok. Pour in the sauce mixture and bring to a gentle boil. Stir in the cornflour slurry and cook for 1-2 minutes until thickened and glossy.",
      "Combine & Serve: Add the cooked noodles and spring onions. Toss everything together for 1 minute until well coated. Serve immediately."
    ]
  },

  // --- OTHERS ---
{
  "id": "spring-rolls-collection",
  "title": "Tiger Tiger Spring Roll Creations",
  "cuisine": "Others",
  "product": "Frozen",
  "time": "30-40 min",
  "servings": "Varies",
  "calories": "Varies",
  "image": "/others.jpg.jpeg",
  "recipes": [
    {
      "recipe_name": "1. Classic Vegetable Spring Rolls",
      "ingredients": [
        "Tiger Tiger pastry sheets",
        "2 cups shredded cabbage, 1 cup carrots",
        "1 cup bean sprouts or bell peppers",
        "1/2 cup mushrooms or onions",
        "2-3 garlic cloves, 1 tbsp ginger (minced)",
        "2 tbsp soy sauce, 1 tbsp sesame oil",
        "Salt, pepper, chili flakes",
        "1 tsp cornstarch (thickening)"
      ],
      "method": [
        "Stir-fry garlic, ginger, and veggies on high heat (3-5 mins).",
        "Add soy sauce, seasonings, and cornstarch slurry. Cool completely.",
        "Place filling on wrapper, fold bottom, tuck sides, roll tight, and seal.",
        "Deep-fry at 170-180°C (2-4 mins) or bake at 200°C (15-20 mins)."
      ]
    },
    {
      "recipe_name": "2. Chicken or Meat Spring Rolls",
      "ingredients": [
        "Tiger Tiger pastry sheets",
        "300-400g minced chicken, beef, or prawns",
        "Garlic, onions, and spices",
        "Shredded cabbage/carrots for bulk"
      ],
      "method": [
        "Pre-cook minced meat with garlic, onions, and spices.",
        "Mix in cabbage/carrots and cook fully. Cool completely.",
        "Wrap tightly using the standard folding method and seal.",
        "Deep-fry or bake until golden (same temp as vegetable rolls)."
      ]
    },
    {
      "recipe_name": "3. Sweet Treats (Banana/Pineapple)",
      "ingredients": [
        "Tiger Tiger pastry sheets",
        "Ripe bananas or Pineapple chunks",
        "Brown sugar, cinnamon",
        "Cream cheese (for pineapple version)"
      ],
      "method": [
        "For Banana: Brush with butter, add banana, sugar/cinnamon, roll like a cigar.",
        "For Pineapple: Spread cream cheese, add pineapple, roll tightly.",
        "Seal edges and fry/bake until crispy.",
        "Dust with icing sugar before serving."
      ]
    }
  ],
  "tips_for_success": [
    "Thaw sheets and keep unused ones under a damp cloth.",
    "Always cool fillings completely to avoid soggy wrappers.",
    "Use flour+water slurry or beaten egg to seal edges."
  ]
}
];

export function getRecipeById(id) {
  return allRecipes.find((r) => r.id === id) || null;
}

// method can be an array of steps or (rarely) a plain string; always return an array
export function normalizeMethod(method) {
  if (Array.isArray(method)) return method;
  if (typeof method === 'string') {
    return method.split(/\n|\.|;|\d+\)/).map((s) => s.trim()).filter(Boolean);
  }
  return [];
}
