import React from "react";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";

export default function Footer() {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "#332d2d" }}
    >
      <MDBContainer className="p-4 pb-0">
        <section className="">
          <p className="d-flex justify-content-center align-items-center">
            <span className="me-3">Register for free</span>
            <Button variant="outline-light">Sign Up Now</Button>
          </p>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}
