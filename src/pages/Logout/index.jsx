import React from "react";
import { Link } from "react-router-dom";
import { RiHeartFill } from "react-icons/ri";
const Logout = () => {
  localStorage.clear();
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
                        <h5>You are Logged Out</h5>
                        <p className="text-muted fs-15">
                          Thank you for using
                          <span className="fw-semibold text-dark">ChatApp</span>
                        </p>
                        <div className="mt-4">
                          <Link
                            to="/login"
                            className="btn btn-primary w-100 waves-effect waves-light"
                          >
                            Sign In
                          </Link>
                        </div>
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
                        © ChatApp. Crafted with
                        <RiHeartFill
                          style={{
                            marginLeft: "2px",
                            marginRight: "2px",
                            marginTop: "-3px",
                            color: "red",
                          }}
                        />
                        by
                        <Link to="" target="_blank">
                          Themesdesign
                        </Link>
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
  );
};

export default Logout;
