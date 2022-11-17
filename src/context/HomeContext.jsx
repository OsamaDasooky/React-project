import { createContext, useState } from "react";

const HomeContext = () => {
  const FoodsContext = createContext({});

  const FoodsProvider = ({ children }) => {
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
