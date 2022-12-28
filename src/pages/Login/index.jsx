import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  RiEyeFill,
  RiFacebookCircleFill,
  RiGoogleFill,
  RiHeartFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const Login = () => {
  localStorage.clear()
  const navigate = useNavigate();

  const [userName, setUserName] = useState();
  const [userNameError, setUserNameError] = useState("");
  const [password, setPassword] = useState();
  const [passwordError, setPasswordError] = useState("");

  const validation = () => {
    let userIsValid = true;
    if (userName) {
      setUserNameError("");
    } else if (!userName) {
      setUserNameError("Please enter user name");
      userIsValid = false;
    }
    if (password) {
      setPasswordError("");
    } else if (!password) {
      setPasswordError("Please enter password");
      userIsValid = false;
    }
    return userIsValid;
  };

  const submit = (e) => {
    e.preventDefault();
    if (validation()) {
      localStorage.setItem("userName", JSON.stringify(userName));
      navigate("/");
    } else {
      console.log("Please fill up form");
    }
  };
  return (
    <div>
      <div className="auth-bg">
        <div className="container p-0">
          <div className="row justify-content-center g-0">
            <div className="col-xl-9 col-lg-8">
              <div className="authentication-page-content shadow-lg">
                <div className="d-flex flex-column h-100 px-4 pt-4">
                  <div className="row justify-content-center">
                    <div className="col-sm-8 col-lg-6 col-xl-6">
                      <div className="py-md-5 py-4">
                        <div className="text-center mb-5">
                          <h3>Welcome Back !</h3>
                          <p className="text-muted">
                            Sign in to continue to Vhato.
                          </p>
                        </div>
                        <form onSubmit={submit}>
                          <div className="mb-3">
                            <label htmlFor="username" className="form-label">
                              Username
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="username"
                              placeholder="Enter username"
                              value={userName}
                              onChange={(e) => [
                                setUserName(e.target.value),
                                setUserNameError(""),
                              ]}
                            />
                            <div className="error">{userNameError}</div>
                          </div>
                          <div className="mb-3">
                            <div className="float-end">
                              <a
                                href="auth-recoverpw.html"
                                className="text-muted"
                              >
                                Forgot password?
                              </a>
                            </div>
                            <label
                              htmlFor="userpassword"
                              className="form-label"
                            >
                              Password
                            </label>
                            <div className="position-relative auth-pass-inputgroup mb-3">
                              <input
                                type="password"
                                className="form-control pe-5"
                                placeholder="Enter Password"
                                id="password-input"
                                value={password}
                                onChange={(e) => [
                                  setPassword(e.target.value),
                                  setPasswordError(""),
                                ]}
                              />
                              <button
                                className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                                type="button"
                                id="password-addon"
                              >
                                <RiEyeFill />
                              </button>
                              <div className="error">{passwordError}</div>
                            </div>
                          </div>
                          {/* <div className="form-check form-check-info fs-16">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="remember-check"
                            />
                            <label
                              className="form-check-label fs-14"
                              htmlFor="remember-check"
                            >
                              Remember me
                            </label>
                          </div> */}
                          <div className="text-center mt-4">
                            <button
                              className="btn btn-primary w-100"
                              type="submit"
                              onSubmit={() => submit()}
                            >
                              Log In
                            </button>
                          </div>
                          <div className="mt-4 text-center">
                            <div className="signin-other-title">
                              <h5 className="fs-14 mb-4 title">Sign in with</h5>
                            </div>
                            <div className="row">
                              <div className="col-6">
                                <div>
                                  <button
                                    type="button"
                                    className="btn btn-soft-info w-100"
                                  >
                                    <RiFacebookCircleFill
                                      style={{ marginTop: "-3px" }}
                                    />{" "}
                                    Facebook
                                  </button>
                                </div>
                              </div>
                              <div className="col-6">
                                <div>
                                  <button
                                    type="button"
                                    className="btn btn-soft-danger w-100"
                                  >
                                    <RiGoogleFill
                                      style={{ marginTop: "-3px" }}
                                    />{" "}
                                    Google
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                        {/* end form */}
                        <div className="mt-5 text-center text-muted">
                          <p>
                            Don't have an account ?
                            <Link
                              to="/register"
                              className="fw-medium text-decoration-underline"
                            >
                              Register
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                  </div>
                  {/* end row */}
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="text-center text-muted p-4">
                        <p className="mb-0">
                          © Vhato. Crafted with
                          <RiHeartFill
                            style={{
                              marginLeft: "2px",
                              marginTop: "-3px",
                              color: "red",
                            }}
                          />{" "}
                          by
                          <a href=" " target="_blank">
                            Themesdesign
                          </a>
                        </p>
                      </div>
                    </div>
                    {/* end col */}
                  </div>
                  {/* end row */}
                </div>
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end container-fluid */}
      </div>
    </div>
  );
};

export default Login;
