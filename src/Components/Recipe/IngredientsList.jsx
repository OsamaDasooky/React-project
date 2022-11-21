import React, { useContext } from "react";
import { MDBBadge, MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import FoodContext from "../../context/FoodContext";
export default function IngredientsList() {
  const { RecipeContext } = FoodContext;
  const { recipe } = useContext(RecipeContext);
  return (
    <MDBListGroup style={{ minWidth: "22rem" }} light className=" col-6 ">
      <h4>Ingredients List</h4>
      {recipe?.ingredients.map((ele) => (
        <MDBListGroupItem className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              src={ele.image}
              alt=""
              style={{ width: "100px", height: "100px" }}
              className="rounded"
            />
            <div className="ms-3">
              <p className="fw-bold mb-1">{ele.food}</p>
              <p className=" mb-0">{ele.text}</p>
            </div>
          </div>
          <MDBBadge pill color="secondary">
            {ele.foodCategory}
          </MDBBadge>
        </MDBListGroupItem>
      ))}
    </MDBListGroup>
  );
}
