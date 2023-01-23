/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { loginhandle } from "../../components/auth.request";
import jwtDecode from "jwt-decode";
import { GroupDetails } from "../../App";
const Login = () => {
  const userimage = useContext(GroupDetails);
  localStorage.clear();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState();
  const [passwordError, setPasswordError] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleCallbackResponse = async (response) => {
    var userObject = jwtDecode(response.credential);
    let email = userObject.email;
    let password = userObject.sub;
    var data = {
      email: email,
      password: password,
    };
    const resp = await loginhandle(data);
    if (resp) {
      setMessage(resp.message);
      localStorage.setItem("accessToken", resp.data.token);
      localStorage.setItem("userName", resp.data.username);
      localStorage.setItem("userEmail", resp.data.email);
      localStorage.setItem("id", resp.data.id);
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
      setLoader(true);
      let data = {
        email: email,
        password: password,
      };
      const response = await loginhandle(data);
      if (response.success) {
        userimage.setUserImage(response.data.userImg);
        userimage.setUserName(response.data.username);
        // userimage.setUserDetails("hello")
        setLoader(false);
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
        setLoader(false);
        setMessage(response.message);
      }
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
                            Sign in to continue to Chat-App.
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
                                {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
                              </button>
                              <div className="error">{passwordError}</div>
                            </div>
                          </div>


                          <div className="text-center mt-4">
                            <button
                              className="btn btn-primary w-100"
                              type="submit"
                            >
                              {/* <Link to={`?n=${userimage.userName}`}>
                              </Link> */}
                              {loader ? (
                                <div className="spinner-border" role="status">
                                  <span className="sr-only"></span>
                                </div>
                              ) : (
                                "Log In"
                              )}
                            </button>
                          </div>
                          <div className="error text-center mt-1">
                            {message}
                          </div>
                          <div className="mt-4 text-center">
                            <div className="signin-other-title">
                              <h5 className="fs-14 mb-4 title">Sign in with</h5>
                            </div>
                            <div className="row">
                              <div
                                className="col-6"
                                style={{
                                  display: "block",
                                  marginLeft: "auto",
                                  marginRight: "auto",
                                }}
                              >
                                <div id="signInDiv"></div>
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
                              className="fw-medium text-decoration-none"
                            >
                              Register
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                  </div>
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
