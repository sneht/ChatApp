import React, { useState } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { changePassword, checkPassword } from "../../service/auth.request";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [passShow, setPassShow] = useState(false);
  const [ConfirmPassShow, setConfirmPassShow] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [oldPassword, setOldPassword] = useState();
  const [oldPasswordError, setOldPasswordError] = useState("");
  const [newPassword, setNewPassword] = useState();
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState();
  const [confirmNewPasswordError, setConfirmNewPasswordError] = useState("");
  const [loader, setloader] = useState(false);
  const userName = JSON.parse(localStorage.getItem("userData"));

  const validation = () => {
    if (passwordMatch) {
      let isvalid = true;
      if (!newPassword) {
        setNewPasswordError("Please enter password");
        isvalid = false;
      } else {
        setNewPasswordError("");
      }
      if (!confirmNewPassword) {
        setConfirmNewPasswordError("Please enter Confirm password");
        isvalid = false;
      } else if (confirmNewPassword === newPassword) {
        setConfirmNewPasswordError("");
      } else {
        setConfirmNewPasswordError("Please enter same password");
        isvalid = false;
      }
      return isvalid;
    } else {
      let isValid = true;
      if (!oldPassword) {
        setOldPasswordError("Please enter old password");
        isValid = false;
      } else {
        setOldPasswordError("");
      }
      return isValid;
    }
  };

  const passWordHandle = async (e) => {
    e.preventDefault();
    if (passwordMatch) {
      if (validation()) {
        setloader(true);
        let newData = {
          confirmPassword: newPassword,
        };
        const resp = await changePassword(newData, userName.id);
        if (resp.success) {
          setloader(false);
          toast.success(resp.message);
          navigate("/");
        } else {
          setloader(false);
        }
      }
    } else {
      if (validation()) {
        setloader(true);
        let data = {
          oldPassword: oldPassword,
        };
        const response = await checkPassword(data, userName.id);
        if (response.success) {
          setloader(false);
          setPasswordMatch(true);
        } else {
          setloader(false);
          toast.error(response.message);
          setPasswordMatch(false);
        }
      }
    }
  };

  const cancelHandle = () => {
    navigate("/");
  };

  return (
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
                        <h3>Change Password</h3>
                      </div>
                      <div className="user-thumb text-center mb-4">
                        <img
                          src={userName.img}
                          className="rounded-circle img-thumbnail avatar-lg"
                          alt="thumbnail"
                        />
                        <h5 className="fs-15 mt-3 text-capitalize ">
                          {userName.userName}
                        </h5>
                      </div>
                      <form onSubmit={passWordHandle}>
                        {passwordMatch ? (
                          <div>
                            <div className="mb-3">
                              <label
                                htmlFor="newpassword-input"
                                className="form-label"
                              >
                                New Password
                              </label>
                              <div className="position-relative auth-pass-inputgroup mb-3">
                                <input
                                  type={passShow ? "text" : "password"}
                                  className="form-control pe-5"
                                  placeholder="Enter New Password"
                                  id="password-input"
                                  value={newPassword}
                                  onChange={(e) => [
                                    setNewPassword(e.target.value),
                                    setNewPasswordError(""),
                                  ]}
                                />
                                {newPasswordError ? (
                                  <div className="error">
                                    {newPasswordError}
                                  </div>
                                ) : (
                                  ""
                                )}
                                <button
                                  className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                                  type="button"
                                  id="password-addon"
                                  onClick={() =>
                                    passShow
                                      ? setPassShow(false)
                                      : setPassShow(true)
                                  }
                                >
                                  {passShow ? <RiEyeFill /> : <RiEyeOffFill />}
                                </button>
                              </div>
                            </div>

                            <div className="mb-3">
                              <label
                                htmlFor="confirmpassword-input"
                                className="form-label"
                              >
                                Confirm New Password
                              </label>
                              <div className="position-relative auth-pass-inputgroup  mb-3">
                                <input
                                  type={ConfirmPassShow ? "text" : "password"}
                                  className="form-control pe-5"
                                  id="confirmpassword-input"
                                  placeholder="Enter Confirm Password"
                                  value={confirmNewPassword}
                                  onChange={(e) => [
                                    setConfirmNewPassword(e.target.value),
                                    setConfirmNewPasswordError(""),
                                  ]}
                                />
                                {confirmNewPasswordError ? (
                                  <div className="error">
                                    {confirmNewPasswordError}
                                  </div>
                                ) : (
                                  ""
                                )}
                                <button
                                  className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                                  type="button"
                                  id="password-addon"
                                  onClick={() =>
                                    ConfirmPassShow
                                      ? setConfirmPassShow(false)
                                      : setConfirmPassShow(true)
                                  }
                                >
                                  {ConfirmPassShow ? (
                                    <RiEyeFill />
                                  ) : (
                                    <RiEyeOffFill />
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="mb-3">
                            <label
                              htmlFor="oldpassword-input"
                              className="form-label"
                            >
                              Old Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="oldpassword-input"
                              value={oldPassword}
                              onChange={(e) => [
                                setOldPassword(e.target.value),
                                setOldPasswordError(""),
                              ]}
                              placeholder="Enter Old Password"
                            />
                            {oldPasswordError ? (
                              <div className="error">{oldPasswordError}</div>
                            ) : (
                              ""
                            )}
                          </div>
                        )}
                        <div className="text-center mt-4">
                          <div className="row">
                            <div className="col-6">
                              <button
                                className="btn btn-primary w-100"
                                type="submit"
                              >
                                {loader ? (
                                  <div className="spinner-border" role="status">
                                    <span className="sr-only"></span>
                                  </div>
                                ) : passwordMatch ? (
                                  "Save"
                                ) : (
                                  "Submit"
                                )}
                              </button>
                            </div>
                            <div className="col-6">
                              <button
                                className="btn btn-light w-100"
                                type="button"
                                onClick={() => cancelHandle()}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
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

export default ChangePassword;
