import React, { useEffect, useState } from "react";
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
import { Form } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import useValidation from "../../Hook/useValidation";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
import axios from "axios";
import useOperation from "../../Hook/useOperation";

function Register() {
  const [
    nameValidation,
    emailValidation,
    passwordValidation,
    message,
    setMessage,
  ] = useValidation();
  const { setCurrentUserToLocal, setCurrentUser, setToken, setTokenToLocal } =
    useOperation();

  const navigate = useNavigate();
  const SignIn = useSignIn();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const data = new FormData();
  data.append("name", name);
  data.append("email", email);
  data.append("password", pass);
  data.append("password_confirmation", confirmPass);

  const config = {
    method: "post",
    url: "http://127.0.0.1:8000/api/register",
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
    },
    data: data,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nameValidation(name) &&
      emailValidation(email) &&
      passwordValidation(pass, confirmPass)
    ) {
      axios(config)
        .then((res) => {
          console.log(res.data);
          if (
            SignIn({
              token: res.data.token,
              expiresIn: 1000,
              tokenType: "Bearer",
              authState: res.data.user,
            })
          ) {
            setCurrentUser(res.data.user);
            setToken(res.data.token);
            setCurrentUserToLocal();
            setTokenToLocal();
            return navigate("/profile");
          }
        })
        .catch(function (error) {
          setMessage((prev) => ({
            ...prev,
            email: error.response.data.errors.email[0],
          }));
        });
    }
  };
  return (
    <Form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
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

                <div className="text-danger">
                  {message.name != "" ? message.name : ""}
                </div>
                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="UserName"
                  type="text"
                  size="md"
                  required
                  id="username"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  onBlur={(e) => {
                    setName(e.target.value);
                  }}
                />
                <div className="text-danger">
                  {message.email != "" ? message.email : ""}
                </div>
                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Email address"
                  type="email"
                  id="email"
                  size="md"
                  required
                  onBlur={(e) => {
                    setEmail(e.target.value);
                    setMessage((pervs) => ({ ...pervs, email: "" }));
                  }}
                />
                <div className="text-danger">
                  {message.pass != "" ? message.pass : ""}
                </div>
                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Password"
                  type="password"
                  size="md"
                  required
                  id="password"
                  onBlur={(e) => {
                    setPass(e.target.value);
                  }}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Confirm Password"
                  type="password"
                  size="md"
                  required
                  id="cpassword"
                  onBlur={(e) => {
                    setConfirmPass(e.target.value);
                    passwordValidation(pass, confirmPass);
                  }}
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
