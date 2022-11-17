import React from "react";
import { Recipe } from "../Components/Recipe/Recipe";
import FoodContext from "../context/FoodContext";
export const RecipeProvider = () => {
  return (
    <FoodContext.RecipeProvider>
      <Recipe />
    </FoodContext.RecipeProvider>
  );
};
