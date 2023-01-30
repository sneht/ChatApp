/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { loginhandle, forgotPassword } from "../../service/auth.request";
import jwtDecode from "jwt-decode";
import { GroupDetails } from "../../App";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  localStorage.clear();
  const userimage = useContext(GroupDetails);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState();
  const [passwordError, setPasswordError] = useState("");
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPasswordShow, setForgotPassword] = useState();
  const [spinner, setSpinner] = useState(false);

  const handleCallbackResponse = async (response) => {
    var userObject = jwtDecode(response.credential);
    let email = userObject.email;
    let password = userObject.sub;
    let data = {
      email: email,
      password: password,
    };
    const resp = await loginhandle(data);
    if (resp) {
      if (resp.success) {
        setMessage(resp.message);
        let userDetails = {
          userName: resp.data.username,
          userEmail: resp.data.email,
          id: resp.data.id,
        };
        localStorage.setItem("accessToken", resp.data.token);
        localStorage.setItem("userDetails", userDetails);
        navigate("/");
      } else {
      }
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

  const validation = () => {
    if (forgotPasswordShow) {
      let userIsValid = true;
      if (email) {
        setForgotPasswordEmail("");
      } else if (!email) {
        setForgotPasswordEmail("Please enter email");
        userIsValid = false;
      }
      return userIsValid;
    } else {
      let userIsValid = true;
      if (email) {
        setEmailError("");
      } else if (!email) {
        setEmailError("Please enter email");
        userIsValid = false;
      }
      if (password) {
        setPasswordError("");
      } else if (!password) {
        setPasswordError("Please enter password");
        userIsValid = false;
      }
      return userIsValid;
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (validation()) {
        setLoader(true);
        let data = {
          email: email,
          password: password,
        };
        const response = await loginhandle(data);
        if (response) {
          setLoader(false);
          if (response.success) {
            userimage.setUserImage(response.data.userImg);
            userimage.setUserName(response.data.username);
            const userData = {
              id: response.data._id,
              img: response.data.userImg,
              userName: response.data.username,
              userEmail: response.data.email,
              userStatus: response.data.userStatus,
            };
            localStorage.setItem("accessToken", response.data.token);
            localStorage.setItem("userData", JSON.stringify(userData));
            navigate("/");
          } else {
            setMessage(response.message);
          }
        } else {
          setLoader(false);
        }
      }
    } catch {
      console.error("Somthing went wrong");
    }
  };

  const forgotPasswordHandle = async (e) => {
    e.preventDefault();
    let body = {
      email: email,
    };
    try {
      if (validation()) {
        setSpinner(true);
        const response = await forgotPassword(body);
        if (response) {
          setSpinner(false);
          if (response.success) {
            setEmail("");
            setForgotPassword("");
            toast.success(response.message);
          } else {
            toast.error(response.message);
          }
        } else {
          console.error("Somthing went wrong");
        }
      }
    } catch {
      setSpinner(false);
      console.error("Somthing went wrong");
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
                          <h3>
                            {forgotPasswordShow
                              ? "Change Password"
                              : "Welcome Back !"}
                          </h3>
                          <p className="text-muted">
                            {forgotPasswordShow
                              ? ""
                              : "Sign in to continue to Chat-App."}
                          </p>
                        </div>
                        <form
                          onSubmit={
                            forgotPasswordShow ? forgotPasswordHandle : submit
                          }
                        >
                          {forgotPasswordShow ? (
                            <>
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
                              {forgotPasswordEmail ? (
                                <div className="error">
                                  {forgotPasswordEmail}
                                </div>
                              ) : (
                                ""
                              )}
                              <div className="text-center mt-4">
                                <button
                                  className="btn btn-primary w-100"
                                  type="submit"
                                >
                                  {spinner ? (
                                    <div
                                      className="spinner-border"
                                      role="status"
                                    >
                                      <span className="sr-only"></span>
                                    </div>
                                  ) : (
                                    "Change Password"
                                  )}
                                </button>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="mb-3">
                                <label
                                  htmlFor="username"
                                  className="form-label"
                                >
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
                                {emailError ? (
                                  <div className="error">{emailError}</div>
                                ) : (
                                  ""
                                )}
                              </div>
                              <div className="mb-3">
                                <div className="float-end">
                                  <Link
                                    to=""
                                    className="text-muted"
                                    onClick={() => setForgotPassword("open")}
                                  >
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
                                    type={showPassword ? "text" : "password"}
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
                                    onClick={() =>
                                      showPassword
                                        ? setShowPassword(false)
                                        : setShowPassword(true)
                                    }
                                  >
                                    {showPassword ? (
                                      <RiEyeFill />
                                    ) : (
                                      <RiEyeOffFill />
                                    )}
                                  </button>
                                  {passwordError ? (
                                    <div className="error">{passwordError}</div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </div>

                              <div className="text-center mt-4">
                                <button
                                  className="btn btn-primary w-100"
                                  type="submit"
                                >
                                  {loader ? (
                                    <div
                                      className="spinner-border"
                                      role="status"
                                    >
                                      <span className="sr-only"></span>
                                    </div>
                                  ) : (
                                    "Log In"
                                  )}
                                </button>
                              </div>

                              {message ? (
                                <div className="error text-center mt-1">
                                  {message}
                                </div>
                              ) : (
                                ""
                              )}
                              <div className="mt-4 text-center">
                                <div className="signin-other-title">
                                  <h5 className="fs-14 mb-4 title">
                                    Sign in with
                                  </h5>
                                </div>
                                <div className="row">
                                  <div className="col-6 googleLogin ">
                                    <div id="signInDiv"></div>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </form>
                        {forgotPasswordShow ? (
                          ""
                        ) : (
                          <div className="mt-5 text-center text-muted">
                            <p>
                              Don't have an account ?
                              <Link
                                to="/register"
                                className="fw-medium text-decoration-none"
                              >
                                Register
                              </Link>
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
