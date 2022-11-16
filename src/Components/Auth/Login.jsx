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
function Login() {
  return (
    <div>
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
                <div className="d-flex flex-row mt-2 justify-content-center">
                  <MDBIcon
                    fas
                    icon="cubes fa-3x me-3"
                    style={{ color: "#ff6219" }}
                  />
                  <span className="h1 fw-bold mb-0">Logo</span>
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

                <Button className="mb-2 px-5 bg-dark" size="md">
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
                  <a href="register" style={{ color: "#393f81" }}>
                    Register here
                  </a>
                </p>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Login;
