import React from "react";
import { Link } from "react-router-dom";

const Verify = () => {
  return (
    <div className="auth-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="authentication-page-content shadow-lg">
              <div className="d-flex flex-column h-100 px-4 pt-4">
                <div className="row justify-content-center my-auto">
                  <div className="col-sm-8 col-lg-6 col-xl-5 col-xxl-4">
                    <div className="py-md-5 py-4 text-center">
                      <div className="avatar-xl mx-auto">
                        <div className="avatar-title bg-soft-primary text-primary h1 rounded-circle">
                          <i className="bx bxs-user" />
                        </div>
                      </div>
                      <div className="mt-4 pt-2">
                        <h5>Verify Your Email Address</h5>
                        <p>
                          We just need you to verify your email adderss to
                          complete setting up your account.
                        </p>
                        <p className="text-muted fs-15">
                          Thank you for using{" "}
                          <span className="fw-semibold text-dark">
                            FrontEndArmy ChatApp
                          </span>
                        </p>
                        <div className="mt-4">
                          <Link to="/login">
                            <button className="btn btn-primary w-100 waves-effect waves-light">
                              Login
                            </button>
                          </Link>{" "}
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
    </div>
  );
};

export default Verify;
