import { useState } from "react";
import { useAuthUser } from "react-auth-kit";

const useOperation = () => {
  const auth = useAuthUser();
  const [currentUser, setCurrentUser] = useState({});
  const [favorite, setFavorite] = useState([
    JSON.parse(localStorage.getItem("favorite")),
  ]);
  const [token, setToken] = useState("");

  const getCurrentUserFromLocal = () => {
    setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
    return currentUser;
  };

  const getFavoriteFromLocal = () => {
    return setFavorite(JSON.parse(localStorage.getItem("favorite")));
  };
  const setCurrentUserToLocal = (currentUser) => {
    let newUser = new NewUserData(
      currentUser.id,
      currentUser.email,
      currentUser.name
    );
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    return newUser;
  };
  const setTokenToLocal = (token) => {
    localStorage.setItem("token", JSON.stringify(token));
  };
  const removeTokenFromLocal = () => {
    localStorage.removeItem("token");
  };
  const addToFavorite = (recipe) => {
    let favArray = JSON.parse(localStorage.getItem("favorite"));
    if (favArray == null) {
      favArray = [];
    }
    favArray.push({ recipe, userId: auth().id });
    localStorage.setItem("favorite", JSON.stringify(favArray));
    setFavorite((pervs) => [...pervs, { recipe }]);
  };
  const removeToFavorite = (recipe) => {
    let filterdFavArray = JSON.parse(localStorage.getItem("favorite")).filter(
      (item) => {
        return item.recipe.foodId != recipe.foodId;
      }
    );
    localStorage.setItem("favorite", JSON.stringify(filterdFavArray));
    return filterdFavArray;
  };

  function NewUserData(id, email, name, favorite = null) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.favorite = favorite;
  }

  return {
    getCurrentUserFromLocal,
    setCurrentUserToLocal,
    addToFavorite,
    removeToFavorite,
    setToken,
    setCurrentUser,
    setFavorite,
    favorite,
    setTokenToLocal,
    removeTokenFromLocal,
    currentUser,
    getFavoriteFromLocal,
  };
};

export default useOperation;
