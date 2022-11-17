import { Badge, Button } from "react-bootstrap";

import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Card({ item }) {
  return (
    <MDBCard style={{ maxWidth: "300px", marginBottom: 20 }}>
      <MDBCardImage src={item.image} position="top" alt="..." />
      <MDBCardBody className="d-flex flex-column justify-content-between">
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

        <MDBCardText className="">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </MDBCardText>
        <Link
          to={item.foodId}
          className=" d-block text-decoration-none mx-auto"
        >
          <Button
            className=""
            style={{
              textDecoration: "wavy !important",
              backgroundColor: "#61d400",
              border: "#61d400",
            }}
          >
            View Details
          </Button>
        </Link>
      </MDBCardBody>
    </MDBCard>
  );
}
