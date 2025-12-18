// Fantasy Recipes Mod
// Works with Infinite Chef Mod Box
// Safe characters only

addIngredient("crystal_salt", {
  color: "#d9f2ff",
  type: "powder",
  behavior: 0,
  density: 0.4,
  keywords: "salt,crystal,magic"
});

addIngredient("lava_milk", {
  color: "#ff6a00",
  type: "liquid",
  behavior: 1,
  density: 0.7,
  keywords: "hot,lava,milk"
});

addIngredient("void_egg", {
  color: "#2b2b2b",
  type: "solid",
  behavior: 0,
  density: 0.6,
  keywords: "egg,void,dark"
});

// Recipes
addRecipe("void_egg+crystal_salt", "Void Omelette");
addRecipe("lava_milk+chocolate", "Molten Chocolate");
addRecipe("bread+lava_milk", "Burnt Toast");
addRecipe("egg+crystal_salt", "Crystal Egg");
addRecipe("void_egg+lava_milk", "Chaos Breakfast");
