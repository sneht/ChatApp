/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  RiEyeFill,
  RiFacebookCircleFill,
  RiGoogleFill,
  RiHeartFill,
  RiEyeOffFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
// import { EndPointing } from "../../helper";
// import axios from "axios";
import { postUserData } from "../../components/auth.request";
import jwtDecode from "jwt-decode";
// import GoogleButton from 'react-google-button'

const Login = () => {
  localStorage.clear();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState();
  const [passwordError, setPasswordError] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setloader] = useState(false);
  const [passManage, setPassManage] = useState(false);
  const [user, setUser] = useState({});

  const handleCallbackResponse = async (response) => {
    // console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
    let email = userObject.email;
    let password = userObject.sub;
    const resp = await postUserData(email, password);
    if (resp) {
      console.log(resp);
      setloader(false);
      setMessage(resp.message);
      const token = resp.data.data.token;
      localStorage.setItem("accessToken", JSON.stringify(token));
      navigate("/");
    }
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "720571755003-bpacvgmam44os9dn53o656rdec8sr53i.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "medium",
    });
  }, []);

  function handleSignOut(e) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }
  const validation = () => {
    let userIsValid = true;
    if (email) {
      setEmailError("");
    } else if (!email) {
      setEmailError("Please enter user name");
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

  const submit = async (e) => {
    e.preventDefault();
    if (validation()) {
      setloader(true);
      const response = await postUserData(email, password);
      if (response) {
        setloader(false);
        setMessage(response.message);
        const token = response.data.data.token;
        localStorage.setItem("accessToken", JSON.stringify(token));
        navigate("/");
      }
    } else {
      console.log("Please fill up form");
    }
  };
  const passManagehandle = () => {
    if (passManage === false) {
      setPassManage(true);
    } else {
      setPassManage(false);
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
                              Email
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="username"
                              placeholder="Enter Email"
                              value={email}
                              onChange={(e) => [
                                setEmail(e.target.value),
                                setEmailError(""),
                                setMessage(""),
                              ]}
                            />
                            <div className="error">{emailError}</div>
                          </div>
                          <div className="mb-3">
                            <div className="float-end">
                              <Link to="" className="text-muted">
                                Forgot password?
                              </Link>
                            </div>
                            <label
                              htmlFor="userpassword"
                              className="form-label"
                            >
                              Password
                            </label>
                            <div className="position-relative auth-pass-inputgroup mb-3">
                              <input
                                type={passManage ? "text" : "password"}
                                className="form-control pe-5"
                                placeholder="Enter Password"
                                id="password-input"
                                value={password}
                                onChange={(e) => [
                                  setPassword(e.target.value),
                                  setPasswordError(""),
                                  setMessage(""),
                                ]}
                              />
                              <button
                                className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                                type="button"
                                id="password-addon"
                                onClick={() => passManagehandle()}
                              >
                                {passManage ? <RiEyeFill /> : <RiEyeOffFill />}
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
                          <div className="error">{message}</div>
                          <div className="text-center mt-4">
                            <button
                              className="btn btn-primary w-100"
                              type="submit"
                              onSubmit={() => submit()}
                            >
                              {loader ? (
                                <div className="spinner-border" role="status">
                                  <span className="sr-only"></span>
                                </div>
                              ) : (
                                "Log In"
                              )}
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
                                <div id="signInDiv"></div>
                                {Object.keys(user).length !== 0 && (
                                  <button onClick={(e) => handleSignOut(e)}>
                                    Sign Out{" "}
                                  </button>
                                )}
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
