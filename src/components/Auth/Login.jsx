import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    emailError,
    passwordError,
    setHasAccount,
    authWithGoogle,
    handleSignInViaEmail,
  } = useAuth();
  return (
    <div className="login">
      <div className="login-container">
        <h2>SIGN INTO MY ACCOUNT</h2>
        <div>
          If you are a registered user, please enter your email and password.
        </div>
        <div>
          <p>Email address</p>
          <input
            className="auth-input"
            type="text"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p className="error-msg">{emailError}</p>
        </div>
        <div>
          <p>Password</p>
          <input
            className="auth-input"
            type="password"
            autoFocus
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p className="error-msg">{passwordError}</p>
        </div>
        <div className="btn-container">
          {hasAccount ? (
            <>
              <button className="auth-btn" onClick={handleLogin}>
                LOGIN
              </button>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/reset")}
              >
                Forgot password?
              </span>
              <p
                style={{ cursor: "pointer" }}
                onClick={() => setHasAccount(!hasAccount)}
              >
                SIGN UP
              </p>
            </>
          ) : (
            <>
              <button className="auth-btn" onClick={handleSignUp}>
                SIGN UP
              </button>
              <span>Already have an account?</span>
              <p
                style={{ cursor: "pointer" }}
                onClick={() => setHasAccount(!hasAccount)}
              >
                LOGIN
              </p>
            </>
          )}
        </div>
        <button
          className="auth-btn"
          style={{ height: "30px", width: "auto", marginBottom: "10px" }}
          onClick={authWithGoogle}
        >
          <img
            style={{ marginRight: "10px" }}
            width="15px"
            src="https://www.tunartravel.com/img/google_logo.png"
            alt=""
          />
          Google
        </button>
        <button
          style={{ width: "auto" }}
          className="auth-btn"
          onClick={handleSignInViaEmail}
        >
          Via Email Verification
        </button>
      </div>
    </div>
  );
};

export default Login;
