import HomeContext from "../context/HomeContext";
import { Home } from "../pages/Home";

const FoodsProvider = () => {
  return (
    <HomeContext.FoodsProvider>
      <Home />
    </HomeContext.FoodsProvider>
  );
};
export default FoodsProvider;
