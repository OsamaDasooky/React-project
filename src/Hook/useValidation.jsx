import { useState } from "react";

const emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/;
const nameRegx = /^[a-zA-Z\s]{4,}$/;
const passRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const useValidation = () => {
  const [message, setMessage] = useState({
    pass: "",
    email: "",
    name: "",
    login: "",
  });
  ////////////////////////////////////////////////
  const passwordValidation = (pass, confirmPass) => {
    if (!passRegx.test(pass)) {
      setMessage((pervs) => ({
        ...pervs,
        pass: "invalid password should include at lest 8 Caracters",
      }));
      return false;
    }
    if (pass == "" || confirmPass == "") {
      setMessage((pervs) => ({
        ...pervs,
        pass: "password and confirmation password are required",
      }));
      return false;
    }
    if (!(pass === confirmPass)) {
      setMessage((pervs) => ({
        ...pervs,
        pass: "password and confirmation password should be same",
      }));
      return false;
    }
    message.pass = "";
    return true;
  };
  /////////////////////////////////////////////////////////////
  const emailValidation = (email) => {
    if (emailRegx.test(email) === false) {
      setMessage((pervs) => ({
        ...pervs,
        email: "invalid email should include like test@gmail.com",
      }));
      return false;
    }
    if (email == "") {
      setMessage((pervs) => ({
        ...pervs,
        email: "email is  required",
      }));
      return false;
    }
    message.email = "";
    return true;
  };
  ///////////////////////////////////////////
  const nameValidation = (name) => {
    if (!nameRegx.test(name)) {
      setMessage((pervs) => ({
        ...pervs,
        name: "invalid name should include just white space and characters",
      }));
      return false;
    }
    if (name == "") {
      setMessage((pervs) => ({
        ...pervs,
        name: "name is required",
      }));
      return false;
    }
    message.name = "";
    return true;
  };
  return [
    nameValidation,
    emailValidation,
    passwordValidation,
    message,
    setMessage,
  ];
};
export default useValidation;
