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

function Login() {
  return (
    <Form>
      <MDBContainer className="py-5">
        <MDBCard className="col-8 mx-auto">
          <MDBRow className="g-0 ">
            <MDBCol className="col-lg-6 d-none  d-lg-block">
              <MDBCardImage
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3Vycnl8ZW58MHx8MHx8&w=1000&q=80"
                alt="login form"
                className="rounded-start w-100 "
              />
            </MDBCol>

            <MDBCol className="col-lg-6 ">
              <MDBCardBody className="d-flex flex-column pb-0 ">
                <div className="d-flex flex-column mt-2 align-items-center">
                  <img src={logo} alt="" style={{ width: 50 }} />
                  <p className="h3 fw-bold mb-0">Foods Recipe</p>
                </div>

                <h5
                  className="fw-normal my-4 pb-3 text-center"
                  style={{ letterSpacing: "1px" }}
                >
                  Sign into your account
                </h5>

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

                <Button
                  className="mb-2 px-5 bg-dark border-dark"
                  size="md"
                  type="submit"
                >
                  Login
                </Button>
                <a className="small text-muted  align-self-end " href="#!">
                  Forgot password?
                </a>
                <p
                  className="mt-5 pb-lg-2 text-center "
                  style={{ color: "#393f81" }}
                >
                  Don't have an account?{" "}
                  <Link to="/register" style={{ color: "#393f81" }}>
                    Register here
                  </Link>
                </p>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </Form>
  );
}

export default Login;
