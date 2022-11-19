import React from "react";
import FoodContext from "../context/FoodContext";
import Profile from "../pages/Profile";
export const ProfileProvider = () => {
  return (
    <FoodContext.RecipeProvider>
      <Profile />
    </FoodContext.RecipeProvider>
  );
};
