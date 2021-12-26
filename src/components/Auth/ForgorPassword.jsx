import React from "react";
import { useAuth } from "../../contexts/authContext";

import "./Login.css";

const ForgorPassword = () => {
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
    forgotPassword,
  } = useAuth();
  return (
    <div>
      <div className="login">
        <div className="login-container">
          <h2>RESET PASSWORD</h2>
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
            <button
              style={{ width: "auto" }}
              className="auth-btn"
              onClick={forgotPassword}
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgorPassword;
