import React, { useState } from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import { Alert, Form } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import useValidation from "../../Hook/useValidation";
import useOperation from "../../Hook/useOperation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";

function Login() {
  const navigate = useNavigate();
  const SignIn = useSignIn();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [, , , message, setMessage] = useValidation();
  const { setCurrentUserToLocal, setCurrentUser, setToken, setTokenToLocal } =
    useOperation();
  //-----------------------------
  const data = new FormData();
  data.append("email", email);
  data.append("password", pass);
  console.log(setCurrentUserToLocal);
  const config = {
    method: "post",
    url: "http://127.0.0.1:8000/api/login",
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
    },
    data: data,
  };
  //-------------------------------
  const handleLogin = (e) => {
    e.preventDefault();
    setMessage((prev) => ({ ...prev, login: "" }));
    axios(config)
      .then((res) => {
        console.log(res.data);
        if (
          SignIn({
            token: res.data.token,
            expiresIn: 1000,
            tokenType: "Bearer",
            authState: setCurrentUserToLocal(res.data.data.user),
          })
        ) {
          setCurrentUser(res.data.data.user);
          setToken(res.data.data.token);
          setCurrentUserToLocal(res.data.data.user);
          setTokenToLocal(res.data.data.token);
          return navigate("/profile");
        }
      })
      .catch(function (error) {
        console.log(error);
        setMessage((prev) => ({
          ...prev,
          login: error.response.data?.message,
        }));
      });
  };

  return (
    <Form
      onSubmit={(e) => {
        handleLogin(e);
      }}
    >
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
                {message.login != "" ? (
                  <Alert variant="danger"> {message.login} </Alert>
                ) : (
                  ""
                )}

                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Email address"
                  id="formControlLg"
                  type="email"
                  size="md"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Password"
                  id="formControlLg"
                  type="password"
                  size="md"
                  required
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
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
