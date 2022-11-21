import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "653384430282-jvi1sj56j6954ojmhvhlpa0lhn2sn9hq.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log("Logout made successfully");
    alert("Logout made successfully ✌");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
