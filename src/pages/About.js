import React from "react";
import {
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-react-ui-kit";
import "./contact.css";
export function About() {
  return (
    <MDBContainer className="my-5 ">
      <MDBRow
        className="g-0 justify-content-evenly w-100 "
        style={{ height: "65vh", alignContent: "space-around" }}
      >
        <MDBCol md="4">
          <MDBCardImage
            src="https://img.delicious.com.au/Pwnp-j1O/w1200/del/2022/08/ramenara-ramen-carbonara-172843-2.png"
            alt="..."
            fluid
          />
        </MDBCol>
        <MDBCol md="6">
          <MDBCardBody>
            <MDBCardTitle className="h2 mb-4">About us</MDBCardTitle>
            <MDBCardText>
              Food Recipes has been responsible of revolutionizing the cinema
              industry in the region in the last decade with its strategically
              located theaters and the introduction of cinema's most advanced
              services: E-Ticket, E-Kiosk, Digital 3D, Grand Class – VIP,
              Cinema-dedicated Mobile Application, and the latest Volfoni
              Chrystal laser projectors, capable of beaming 8 Million Megapixel.
              With a track record of successful growth, industry-leading
              innovation and dedication to exemplary customer service, Grand
              Cinemas is proud to be the region’s no.1 movie entertainment
              destination.
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
