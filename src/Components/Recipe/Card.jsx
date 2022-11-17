import React, { useContext, useState } from "react";
import {
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import FoodContext from "../../context/FoodContext";
import { Badge } from "react-bootstrap";

export default function Card() {
  const { RecipeContext } = FoodContext;
  const { recipe } = useContext(RecipeContext);
  const [addFav, setAddFav] = useState(false);

  return (
    <MDBContainer>
      <div style={{ maxWidth: "85%" }} className="mx-auto py-5">
        <MDBRow className="g-0">
          <MDBCol md="4">
            <MDBCardImage
              src={recipe.images.REGULAR.url}
              alt="..."
              fluid
              className="rounded"
            />
          </MDBCol>
          <MDBCol md="7">
            <MDBCardBody className="px-5 py-5 d-flex flex-column justify-content-between">
              <MDBCardTitle className="h1 mb-3">{recipe.label}</MDBCardTitle>
              <MDBCardText>
                <div className="mb-4 ">
                  <h5 className="mb-3 ">Meal Type : {recipe.mealType} </h5>
                  <p className="mb-3">
                    diet Labels :
                    <Badge
                      bg=""
                      style={{ backgroundColor: "#61d400", margin: "0 15px" }}
                    >
                      {recipe.dietLabels.join(" / ")}
                    </Badge>{" "}
                  </p>
                  <p className="mb-3">
                    Calories:
                    <Badge
                      bg=""
                      style={{ backgroundColor: "#e4a70b", margin: "0 15px" }}
                    >
                      {Math.floor(recipe.calories)} cal
                    </Badge>
                  </p>
                </div>

                <small className="text-muted">
                  Health Labels <br />{" "}
                  {recipe.healthLabels.slice(0, 7).join(" / ")}
                </small>
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="1">
            {addFav == false ? (
              <MDBIcon
                far
                icon="heart"
                className="h1"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setAddFav(!addFav);
                }}
              />
            ) : (
              <MDBIcon
                fas
                style={{ cursor: "pointer" }}
                className="h1"
                icon="heart"
                onClick={() => {
                  setAddFav(!addFav);
                }}
              />
            )}
          </MDBCol>
        </MDBRow>
      </div>
    </MDBContainer>
  );
}
