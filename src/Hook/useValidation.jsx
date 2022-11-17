import { useState } from "react";

const useValidation = () => {
  const [check, setCheck] = useState(true);
  const [emailRegx] = useState(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  const [passRegx] = useState(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
  );
  const [message, setMessage] = useState([]);

  const passwordValidation = (pass, confirmPass) => {
    if (passRegx.test(pass)) {
      setMessage((prev) => [
        ...prev,
        "invalid password should include at lest 8 Caracters",
      ]);
      setCheck(false);
    }
    if (pass === confirmPass) {
      setMessage((prev) => [
        ...prev,
        "password and confirmation password should be same",
      ]);
      setCheck(false);
    }
  };

  const emailValidation = (email) => {
    if (emailRegx.test(email)) {
      setMessage((prev) => [
        ...prev,
        "invalid email should include like test@gmail.com",
      ]);
      setCheck(false);
    }
  };

  return { emailValidation, passwordValidation, message, check };
};
export default useValidation;
