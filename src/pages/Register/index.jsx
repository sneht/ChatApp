import React, { useState } from "react";
import {
  RiFacebookCircleFill,
  RiGoogleFill,
  RiHeartFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState("");
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
    if (email) {
      setEmailError("");
    } else if (!email) {
      setEmailError("Please enter email");
      userIsValid = false;
    }

    return userIsValid;
  };

  const submit = (e) => {
    e.preventDefault();
    if (validation()) {
      navigate("/login");
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
                            Get your free Vhato account now.
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
                            <input
                              type="password"
                              className="form-control"
                              id="userpassword"
                              placeholder="Enter password"
                              value={password}
                              onChange={(e) => [
                                setPassword(e.target.value),
                                setPasswordError(""),
                              ]}
                            />
                            <div className="error">{passwordError}</div>
                          </div>
                          <div className="mb-4">
                            <p className="mb-0">
                              By registering you agree to the Vhato
                              <a href=" " className="text-primary">
                                Terms of Use
                              </a>
                            </p>
                          </div>
                          <div className="mb-3">
                            <button
                              className="btn btn-primary w-100 waves-effect waves-light"
                              type="submit"
                              onSubmit={() => submit()}
                            >
                              Register
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
