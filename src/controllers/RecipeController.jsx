import { baseUrl } from "../config/Api";
import { KEYS } from "../env";
import axios from "axios";

const fetchRecipe = (foodId, setRecipe) => {
  const endpoint = `${baseUrl.recipe}/${foodId}?app_id=${KEYS.REACT_APP_ID_RECIPE}&app_key=${KEYS.REACT_APP_KEY_RECIPE}&type=public`;
  axios.get(endpoint).then((res) => {
    if (res?.data) {
      const {
        label,
        images,
        dietLabels,
        healthLabels,
        ingredientLines,
        ingredients,
        calories,
        totalTime,
        mealType,
        totalNutrients,
        totalDaily,
      } = res?.data?.recipe;

      const recipe = {
        label,
        images,
        dietLabels,
        healthLabels,
        ingredientLines,
        ingredients,
        calories,
        totalTime,
        mealType,
        totalNutrients,
        totalDaily,
      };
      setRecipe(recipe);
    } else {
      setRecipe(null);
    }
  });
};
export { fetchRecipe };
