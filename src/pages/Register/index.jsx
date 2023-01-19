/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { registerHandle } from "../../components/auth.request";

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
  const [userImage, setUserImage] = useState();
  const [userImageError, setUserImageError] = useState("");
  const [showUserImg, setShowUserImg] = useState();

  const handleCallbackResponse = async (response) => {
    var userObject = jwtDecode(response.credential);
    let userName = userObject.given_name;
    let email = userObject.email;
    let password = userObject.sub;
    var data = {
      username: userName,
      email: email,
      password: password,
    };
    const res = await registerHandle(data);
    if (res.success) {
      setloader(false);
      navigate("/verify");
    } else {
      setMessage(res.message);
      setloader(false);
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
    if (!userImage) {
      setUserImageError("Please select Image");
      userIsValid = false;
    } else {
      setUserImageError("");
    }
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
      let formData = new FormData();
      formData.append("username", userName);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("userImg", userImage);
      const response = await registerHandle(formData);

      if (response.success) {
        setloader(false);
        navigate("/verify");
      } else {
        setloader(false);
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
                          <label className="mb-3 profile-user d-block">
                            <img
                              src={
                                userImage
                                  ? showUserImg
                                  : "/images/users/user-dummy-img.jpg"
                              }
                              className="rounded-circle avatar-lg img-thumbnail user-profile-image"
                              style={{
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                              }}
                              alt=""
                            />
                            <div
                              className="avatar-xs p-0 rounded-circle "
                              style={{
                                display: "block",
                                marginLeft: "55%",
                                marginTop: "-8%",
                                marginRight: "auto",
                              }}
                            >
                              <input
                                id="profile-img-file-input"
                                type="file"
                                className="profile-img-file-input"
                                onChange={(e) => [
                                  setUserImage(e.target.files[0]),
                                  setShowUserImg(
                                    URL.createObjectURL(e.target.files[0])
                                  ),
                                  setUserImageError(""),
                                ]}
                              />
                              <label
                                htmlFor="profile-img-file-input"
                                className="avatar-xs"
                              >
                                <span className="avatar-title rounded-circle bg-light text-body">
                                  <i className="bx bxs-camera" />
                                </span>
                              </label>
                            </div>
                            <div
                              className="error"
                              style={{ textAlign: "center" }}
                            >
                              {userImageError}
                            </div>
                          </label>
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
                                onClick={() =>
                                  passManage
                                    ? setPassManage(false)
                                    : setPassManage(true)
                                }
                              >
                                {passManage ? <RiEyeFill /> : <RiEyeOffFill />}
                              </button>
                              <div className="error">{passwordError}</div>
                            </div>
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="userCpassword"
                              className="form-label"
                            >
                              Confirm Password
                            </label>
                            <div className="position-relative auth-pass-inputgroup mb-3">
                              <input
                                type={cPassManage ? "text" : "password"}
                                className="form-control"
                                id="userCpassword"
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
                                onClick={() =>
                                  cPassManage
                                    ? setCPassManage(false)
                                    : setCPassManage(true)
                                }
                              >
                                {cPassManage ? <RiEyeFill /> : <RiEyeOffFill />}
                              </button>
                              <div className="error">
                                {confirmPasswordError}
                              </div>
                            </div>
                          </div>

                          <div className="mb-3">
                            <button
                              className="btn btn-primary w-100 waves-effect waves-light"
                              type="submit"
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
                          <div className="error text-center mt-1">
                            {message}
                          </div>
                          <div className="mt-4 text-center">
                            <div className="signin-other-title">
                              <h5 className="fs-14 mb-4 title">
                                Sign up using
                              </h5>
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
                            Already have an account ?
                            <Link
                              to="/login"
                              className="fw-medium text-decoration-none"
                            >
                              Login
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

export default Register;
