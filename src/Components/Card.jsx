import { Badge, Button } from "react-bootstrap";

import React, { useContext, useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";

import { Link } from "react-router-dom";
import useOperation from "../Hook/useOperation";

export default function Card({ item, fav, handleRemove, addToFav }) {
  const { removeToFavorite, addToFavorite, favorite } = useOperation();
  const [addFav, setAddFav] = useState(fav);

  return (
    <MDBCard style={{ maxWidth: "300px", marginBottom: 20 }}>
      <MDBCardImage src={item.image} position="top" alt="..." />
      <MDBCardBody className="d-flex flex-column justify-content-between ">
        <MDBCardTitle>{item.label}</MDBCardTitle>

        <div className="mb-3">
          <Badge bg="" style={{ backgroundColor: "#61d400" }}>
            {item.dishType}
          </Badge>
          <br />
          <Badge bg="" style={{ backgroundColor: "#e4a70b" }}>
            Calories: {Math.floor(item.calories)}cal
          </Badge>
        </div>
        <div className="d-flex ">
          <Link
            to={item.foodId}
            className=" d-block text-decoration-none mx-auto"
          >
            <Button
              style={{
                textDecoration: "wavy !important",
                backgroundColor: "#61d400",
                border: "#61d400",
              }}
            >
              View Details
            </Button>
          </Link>
          {addFav == false ? (
            <Button
              style={{
                textDecoration: "wavy !important",
                backgroundColor: "#61d400",
                border: "#61d400",
              }}
              onClick={() => {
                setAddFav(!addFav);
                addToFavorite(item);
                addToFav(item);
              }}
            >
              Add <MDBIcon far icon="heart" />
            </Button>
          ) : (
            <Button
              style={{
                textDecoration: "wavy !important",
                backgroundColor: "#61d400",
                border: "#61d400",
              }}
              onClick={() => {
                setAddFav(!addFav);
                removeToFavorite(item);
                handleRemove(item);
              }}
            >
              Remove <MDBIcon fas icon="heart" />
            </Button>
          )}
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}
