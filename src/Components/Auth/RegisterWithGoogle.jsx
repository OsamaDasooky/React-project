import { gapi } from "gapi-script";
import React, { useEffect } from "react";

import { GoogleLogin } from "react-google-login";
// refresh token
import { refreshTokenSetup } from "./refreshToken";

const clientId =
  "653384430282-jvi1sj56j6954ojmhvhlpa0lhn2sn9hq.apps.googleusercontent.com";

function RegisterWithGoogle({ handleRegisterWithGoogle }) {
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  }, []);

  const onSuccess = (res) => {
    console.log(res);
    handleRegisterWithGoogle(res);
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {};

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Continue with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        icon={false}
        className="mb-2 px-5 btn btn-dark bg-dark border-dark text-light w-100 justify-content-center "
      >
        Continue with - <i className="fa-brands fa-google h6 mb-0"></i>
      </GoogleLogin>
    </div>
  );
}

export default RegisterWithGoogle;
