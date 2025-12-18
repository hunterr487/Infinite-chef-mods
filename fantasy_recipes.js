// Fantasy Recipes Mod
// Uses ONLY Infinite Chef supported visuals

addIngredient("crystal_salt", {
  color: "#e6f7ff",
  type: "powder",
  behavior: 0,
  density: 0.3,
  keywords: "salt,crystal"
});

addIngredient("lava_milk", {
  color: "#ff7a18",
  type: "liquid",
  behavior: 1,
  density: 0.8,
  keywords: "milk,lava"
});

addIngredient("void_egg", {
  color: "#3a3a3a",
  type: "solid",
  behavior: 0,
  density: 0.6,
  keywords: "egg,void"
});

// Recipes
addRecipe("egg+crystal_salt", "Crystal Egg");
addRecipe("milk+lava_milk", "Hot Milk");
addRecipe("void_egg+egg", "Double Egg");
addRecipe("void_egg+lava_milk", "Chaos Breakfast");
