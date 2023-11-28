import React from "react";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  const navigate = useNavigate(); // it isused to redirect page from one to another
  const signInwithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div className="">
      <p>SignIn With Google</p>
      <button className="login-with-google-btn" onClick={signInwithGoogle}>
        SingnIn with Google
      </button>
    </div>
  );
}

export default Login;
