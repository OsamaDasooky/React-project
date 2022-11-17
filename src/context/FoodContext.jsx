import { createContext, useState } from "react";

const FoodContext = () => {
  const RecipeContext = createContext({});

  const RecipeProvider = (props) => {
    const [recipe, setRecipe] = useState({});
    const FoodContext = { recipe, setRecipe };
    return (
      <RecipeContext.Provider value={FoodContext}>
        {props.children}
      </RecipeContext.Provider>
    );
  };

  return {
    RecipeContext,
    RecipeProvider,
  };
};
export default FoodContext();
