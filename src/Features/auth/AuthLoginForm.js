import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authLoginApi } from "../users/AuthSlice";

const AuthLoginForm = () => {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const doSubmit = (event) => {
    event.preventDefault();
    dispatch(authLoginApi({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-5 m-5 bg-light rounded-3">
      <h1>Welcome Back, Friends!</h1>
      <p className="text-muted">Login with your Account</p>
      <form name="loginForm" onSubmit={doSubmit}>
        <div className="form-group">
          <label className="form-label mt-4">Email address</label>
          <input
            type="email"
            name="email"
            onChange={emailChange}
            value={email}
            className="form-control"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label className="form-label mt-4">Password</label>
          <input
            type="password"
            name="password"
            onChange={passwordChange}
            value={password}
            className="form-control"
            placeholder="Password"
          />
        </div>

        <button type="submit" value="login" className="btn btn-primary mt-4">
          Submit
        </button>

        <div className="Message">
          {authState.isLoginPending && (
            <div>
              {" "}
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif"
                alt="Loading..."
              />{" "}
            </div>
          )}

          {authState.isLoginSuccess && <div>Success!</div>}

          {authState.errorMessage && <div>{authState.errorMessage}</div>}
        </div>
      </form>
    </div>
  );
};

export default AuthLoginForm;