const meals = [
  {
    name: "meal1",
    ingredients: ["beef", "sauce", "salad"],
  },
  {
    name: "meal2",
    ingredients: ["salad", "sauce", "beef"],
  },
  {
    name: "meal3",
    ingredients: ["chicken", "sauce", "salad"],
  },
];

const uniqueMeals = (meals) => {
  if (!meals?.length) return 0;
  if (meals.length === 1) return 1;
  const mealsCount = {};
  for (let i = 0; i < meals.length; i++) {
    let ingredients = meals[i].ingredients.sort().join("");
    if (mealsCount[ingredients]) mealsCount[ingredients] += 1;
    else mealsCount[ingredients] = 1;
  }
  return Object.keys(mealsCount).length;
};

console.log(uniqueMeals(meals));
