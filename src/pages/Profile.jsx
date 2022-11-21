import React, { useEffect, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
} from "mdb-react-ui-kit";

import Card from "../Components/Card";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useIsAuthenticated } from "react-auth-kit";
import { useAuthUser } from "react-auth-kit";

const fav = JSON.parse(localStorage.getItem("favorite"));

export default function Profile() {
  // const { userFav, setUserFav } = useContext(RecipeContext);
  const isAuth = useIsAuthenticated();
  const navigate = useNavigate();
  const auth = useAuthUser();
  const [userFav, setUserFav] = useState(
    fav.filter((item) => {
      // console.log(item.userId == auth().id);
      return item.userId == auth().id;
    })
  );

  const handleRemove = (recipe) => {
    setUserFav(
      userFav.filter((item) => {
        return item.recipe.foodId != recipe.foodId;
      })
    );
  };

  useEffect(() => {
    setUserFav(
      JSON.parse(localStorage.getItem("favorite")).filter((item) => {
        return item.userId == auth().id;
      })
    );
  }, []);

  useEffect(() => {
    if (!isAuth()) {
      return navigate("/login", { replace: true });
    }
  }, []);

  const addToFav = (recipe) => {
    setUserFav(
      JSON.parse(localStorage.getItem("favorite")).filter((item) => {
        return item.recipe.foodId != recipe.foodId;
      })
    );
  };
  return (
    <div className="gradient-custom-2 my-5">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="10" xl="10">
            <MDBCard>
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: "#424242", height: "200px" }}
              >
                <div
                  className="ms-4 mt-5 d-flex flex-column"
                  style={{ width: "150px" }}
                >
                  <MDBCardImage
                    src={logo}
                    alt="Generic placeholder image"
                    className="mt-4 mb-3 img-thumbnail"
                    fluid
                    style={{ width: "150px", zIndex: "1" }}
                  />
                </div>
                <div className="ms-3" style={{ marginTop: "130px" }}>
                  <MDBTypography tag="h3">{auth().name}</MDBTypography>{" "}
                  <MDBCardText className="  ">{auth().email}</MDBCardText>
                </div>
              </div>
              <div
                className="p-4 text-black"
                style={{ backgroundColor: "#f8f9fa" }}
              ></div>
              <MDBCardBody className="text-black p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">
                    Favorite Recipes
                  </MDBCardText>
                </div>
                <MDBRow className="justify-content-evenly">
                  {userFav != null ? (
                    userFav.map((ele) => (
                      <Card
                        item={ele.recipe}
                        fav={true}
                        key={ele.recipe.foodId}
                        handleRemove={handleRemove}
                        addToFav={addToFav}
                      />
                    ))
                  ) : (
                    <p>Their are no Favorite Recipes</p>
                  )}
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
