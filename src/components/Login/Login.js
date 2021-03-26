import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../../Firebase";
import { actionTypes } from "../../Reducer";
import { useStateValue } from "../../StateProvider";

import "./Login.css";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/2111/2111615.svg?token=exp=1616746118~hmac=9a616d2863c1efd9a5acfa7562dec2b3"
          alt=""
        />
        <h2>Sign in to Enterprise</h2>
        <p>Enterprise.slack.com</p>
        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
}

export default Login;
