import React, { useContext } from "react";
import FoodContext from "../../context/FoodContext";
import { ListGroup } from "react-bootstrap";

export function NutrientsChart() {
  const { RecipeContext } = FoodContext;
  const { recipe } = useContext(RecipeContext);
  const totalNutrients = Object.values(recipe?.totalNutrients);

  console.log(totalNutrients);
  return (
    <>
      <ListGroup style={{ width: "auto" }}>
        <h4>Ingredients List</h4>
        {totalNutrients.slice(0, 16).map((nutrient) => (
          <ListGroup.Item>
            {nutrient.label} : <b>{Math.floor(nutrient.quantity)}</b>{" "}
            {nutrient.unit}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <ListGroup style={{ width: "auto" }}>
        <h4 className="mt-4"></h4>
        {totalNutrients.slice(16, 31).map((nutrient) => (
          <ListGroup.Item>
            {nutrient.label} : <b>{Math.floor(nutrient.quantity)}</b>{" "}
            {nutrient.unit}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}
