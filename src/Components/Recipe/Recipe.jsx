import { MDBSpinner } from "mdb-react-ui-kit";
import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import FoodContext from "../../context/FoodContext";
import { fetchRecipe } from "../../controllers/RecipeController";
import Card from "./Card";
import { NutrientsChart } from "./NutrientsChart";
import IngredientsList from "./IngredientsList";

const { RecipeContext } = FoodContext;

export const Recipe = () => {
  const { id } = useParams();
  const { recipe, setRecipe } = useContext(RecipeContext);

  useEffect(() => {
    fetchRecipe(id, setRecipe);
  }, [id, setRecipe]);
  console.log(recipe);
  if (recipe.label == undefined) {
    return (
      <div className="position-relative " style={{ height: 570 }}>
        <MDBSpinner
          className="me-2 position-absolute top-50 start-50 "
          style={{ width: "5rem", height: "5rem" }}
        ></MDBSpinner>
      </div>
    );
  }
  return (
    <div>
      <Card />
      <Container className=" row justify-content-center mx-auto mb-5">
        <IngredientsList />
        <NutrientsChart />
      </Container>
    </div>
  );
};
