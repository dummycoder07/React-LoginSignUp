import { useState } from "react";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      {action === "Login" ? (
        <div></div>
      ) : (
        <div className="inputs">
          <div className="input">
            <i className="fa-solid fa-user icon user" />
            <input type="text" placeholder="User" />
          </div>
        </div>
      )}

      <div className="inputs">
        <div className="input">
          <i className="fa-solid fa-envelope icon email" />
          <input type="email" placeholder="Email" />
        </div>
      </div>
      <div className="inputs">
        <div className="input">
          <i className="fa-solid fa-lock icon password" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Lost Password? <span>Click Here!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          SignUp
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};
export default LoginSignup;
