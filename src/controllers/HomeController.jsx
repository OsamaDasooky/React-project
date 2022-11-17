import IngredientList from "../assets/ingredients.json";
import { baseUrl } from "../config/Api";
import { KEYS } from "../env";
import axios from "axios";

const ingredients = IngredientList.ingredients;

const getRandomIngredient = () => {
  const min = 0;
  const max = ingredients.length - 1;
  return ingredients[Math.floor(Math.random() * (max - min))];
};

const fetchFood = (ingredient, addFood, setLoading, setNextFoods) => {
  const app_id = KEYS.REACT_APP_ID_RECIPE;
  const app_key = KEYS.REACT_APP_KEY_RECIPE;
  const endpoint = baseUrl.recipe;

  if (setLoading) {
    setLoading(true);
  }

  axios
    .get(
      `${endpoint}?app_id=${app_id}&app_key=${app_key}&type=public&beta=false&q=${ingredient}`
    )
    .then((res) => {
      console.log(res.data);
      res.data.hits?.forEach((item) => {
        const {
          uri,
          label,
          image,
          images,
          healthLabels,
          cuisineType,
          calories,
          dishType,
        } = item.recipe;
        const foodId = uri?.substring(uri?.indexOf("_") + 1, uri.length);
        const recipe = {
          foodId,
          label,
          image,
          images,
          healthLabels,
          cuisineType,
          calories,
          dishType,
        };
        addFood(recipe);
      });
      if (setLoading) {
        setLoading(false);
      }
      if (setNextFoods) {
        setNextFoods(res._links.next.href);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const fetchNextFood = (url, addFood, setLoading, setNextFoods) => {
  if (setLoading) {
    setLoading(true);
  }
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data?.hits) {
        data.hits?.forEach((item) => {
          const { uri, label, image, images, healthLabels } = item.recipe;
          const foodId = uri?.substring(uri?.indexOf("_") + 1, uri.length);
          const recipe = { foodId, label, image, images, healthLabels };
          addFood(recipe);
        });
        if (setLoading) {
          setLoading(false);
        }
        if (setNextFoods) {
          setNextFoods(data._links.next.href);
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const fetchQueries = (setAutoCompletes, keyword) => {
  const app_id = KEYS.REACT_APP_ID_FOOD;
  const app_key = KEYS.REACT_APP_KEY_FOOD;
  const url = `${baseUrl.auto_complete}?app_id=${app_id}&app_key=${app_key}&q=${keyword}&limit=5`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setAutoCompletes(data);
    })
    .catch((error) => {
      setAutoCompletes([]);
    });
};
export { getRandomIngredient, fetchFood, fetchNextFood, fetchQueries };
