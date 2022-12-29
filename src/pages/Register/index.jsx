/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
  RiFacebookCircleFill,
  RiGoogleFill,
  RiHeartFill,
  RiEyeFill,
  RiEyeOffFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
// import { EndPointing } from "../../helper";
// import axios from "axios";
import { postRegisterData } from "../../components/auth.request";
import { postGoogleRegisterData } from "../../components/auth.request";

import jwtDecode from "jwt-decode";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [password, setPassword] = useState();
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState();
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setloader] = useState(false);
  const [passManage, setPassManage] = useState(false);
  const [cPassManage, setCPassManage] = useState(false);
  const [user, setUser] = useState({});

  const handleCallbackResponse = async (response) => {
    // console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
    console.log(user);
    let userName = userObject.given_name;
    let email = userObject.email;
    let password = userObject.sub;
    const res = await postGoogleRegisterData(userName, email, password);
    if (res.success === false) {
      console.log(res);
      setMessage(res.message);
      setloader(false);
    } else {
      setloader(false);
      console.log(res);
      navigate("/verify");
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
      setEmailError("Please enter email");
      userIsValid = false;
    }
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
    if (!confirmPassword) {
      setConfirmPasswordError("Please enter confirm password");
      userIsValid = false;
    } else if (confirmPassword === password) {
      setConfirmPasswordError("");
    } else {
      setConfirmPasswordError("Please enter same password");
      userIsValid = false;
    }
    return userIsValid;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (validation()) {
      setloader(true);
      // axios
      //   .post(`${EndPointing}api/v1/user/signup`, {
      //     username: userName,
      //     email: email,
      //     password: password,
      //   })
      const response = await postRegisterData(userName, email, password);
      if (response.success === false) {
        console.log(response);
        setMessage(response.message);
        setloader(false);
      } else {
        setloader(false);
        console.log(response);
        navigate("/verify");
      }
      // else{
      //   setloader(false);
      //   console.log(err);
      // }
    }
  };

  const passManagehandle = () => {
    if (passManage === false) {
      setPassManage(true);
    } else {
      setPassManage(false);
    }
  };
  const cPassManagehandle = () => {
    if (cPassManage === false) {
      setCPassManage(true);
    } else {
      setCPassManage(false);
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
                  <div className="row justify-content-center my-auto">
                    <div className="col-sm-8 col-lg-6 col-xl-6">
                      <div className="py-md-5 py-4">
                        <div className="text-center mb-5">
                          <h3>Register Account</h3>
                          <p className="text-muted">
                            Get your free ChatApp account now.
                          </p>
                        </div>
                        <form onSubmit={submit}>
                          <div className="mb-3">
                            <label htmlFor="useremail" className="form-label">
                              Email
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="useremail"
                              placeholder="Enter email"
                              onChange={(e) => [
                                setEmail(e.target.value),
                                setEmailError(""),
                              ]}
                            />
                            <div className="error">{emailError}</div>
                          </div>
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
                            <label
                              htmlFor="userpassword"
                              className="form-label"
                            >
                              Password
                            </label>
                            <div className="position-relative auth-pass-inputgroup mb-3">
                              <input
                                type={passManage ? "text" : "password"}
                                className="form-control"
                                id="userpassword"
                                placeholder="Enter password"
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
                                onClick={() => passManagehandle()}
                              >
                                {passManage ? <RiEyeFill /> : <RiEyeOffFill />}
                              </button>
                            </div>
                            <div className="error">{passwordError}</div>
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="userpassword"
                              className="form-label"
                            >
                              Confirm Password
                            </label>
                            <div className="position-relative auth-pass-inputgroup mb-3">
                              <input
                                type={cPassManage ? "text" : "password"}
                                className="form-control"
                                id="userpassword"
                                placeholder="Enter password"
                                value={confirmPassword}
                                onChange={(e) => [
                                  setConfirmPassword(e.target.value),
                                  setConfirmPasswordError(""),
                                ]}
                              />
                              <button
                                className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                                type="button"
                                id="password-addon"
                                onClick={() => cPassManagehandle()}
                              >
                                {cPassManage ? <RiEyeFill /> : <RiEyeOffFill />}
                              </button>
                            </div>
                            <div className="error">{confirmPasswordError}</div>
                          </div>

                          <div className="mb-4">
                            <p className="mb-0">
                              By registering you agree to the ChatApp
                              <Link to="" className="text-primary">
                                Terms of Use
                              </Link>
                            </p>
                          </div>
                          <div className="error">{message}</div>
                          <div className="mb-3">
                            <button
                              className="btn btn-primary w-100 waves-effect waves-light"
                              type="submit"
                              onSubmit={() => submit()}
                            >
                              {loader ? (
                                <div className="spinner-border" role="status">
                                  <span className="sr-only"></span>
                                </div>
                              ) : (
                                "Register"
                              )}
                            </button>
                          </div>
                          <div className="mt-4 text-center">
                            <div className="signin-other-title">
                              <h5 className="fs-14 mb-4 title">
                                Sign up using
                              </h5>
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
                            Already have an account ?
                            <Link
                              to="/login"
                              className="fw-medium text-decoration-underline"
                            >
                              Login
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

export default Register;
