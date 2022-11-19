import { createContext, useEffect, useState } from "react";
import { useAuthUser } from "react-auth-kit";
const fav = JSON.parse(localStorage.getItem("favorite"));

const HomeContext = () => {
  const FoodsContext = createContext({});
  const FoodsProvider = ({ children }) => {
    const auth = useAuthUser();
    const [foods, setFoods] = useState([]);

    const addFood = (food) => {
      setFoods((foods) => [...foods, food]);
    };

    const HomeContext = { foods, setFoods, addFood };
    return (
      <FoodsContext.Provider value={HomeContext}>
        {children}
      </FoodsContext.Provider>
    );
  };

  return {
    FoodsContext,
    FoodsProvider,
  };
};
export default HomeContext();
