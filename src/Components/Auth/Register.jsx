import React from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Register() {
  return (
    <Form>
      <MDBContainer className="py-5">
        <MDBCard className="col-8 mx-auto">
          <MDBRow className="g-0 ">
            <MDBCol className="col-lg-6 ">
              <MDBCardBody className="d-flex flex-column pb-0 ">
                <div className="d-flex flex-column mt-2 align-items-center">
                  <img src={logo} alt="" style={{ width: 50 }} />

                  <span className="h3 fw-bold mb-0">Foods Recipe</span>
                </div>

                <h5
                  className="fw-normal my-4 pb-3 text-center"
                  style={{ letterSpacing: "1px" }}
                >
                  Sign into your account
                </h5>

                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="UserName"
                  id="formControlLg"
                  type="text"
                  size="md"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Email address"
                  id="formControlLg"
                  type="email"
                  size="md"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Password"
                  id="formControlLg"
                  type="password"
                  size="md"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Confirm Password"
                  id="formControlLg"
                  type="password"
                  size="md"
                />

                <Button
                  className="mb-2 px-5 bg-dark  border-dark"
                  size="md"
                  type="submit"
                >
                  Register
                </Button>

                <p
                  className="mt-5 pb-lg-2 text-center "
                  style={{ color: "#393f81" }}
                >
                  Already have account?
                  <Link to="/login" style={{ color: "#393f81" }}>
                    Login
                  </Link>
                </p>
              </MDBCardBody>
            </MDBCol>
            <MDBCol className="col-lg-6 d-none  d-lg-block">
              <MDBCardImage
                src="https://www.justonecookbook.com/wp-content/uploads/2022/01/Miso-Salmon-6270-II-400x600.jpg"
                alt="login form"
                className="rounded-start w-100 "
              />
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </Form>
  );
}

export default Register;
