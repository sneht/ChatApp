/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { GroupDetails } from "../../App";
import { updateUser, updateUserImg } from "../../service/auth.request";
import { useLocation } from "react-router-dom";
import { emailRegex, unameRegex } from "../../utils/helper";

const SettingsPanel = () => {
  const location = useLocation();
  const details = useContext(GroupDetails);
  const userDetails = JSON.parse(localStorage.getItem("userData"));
  const [userName, setUserName] = useState();
  const [userNameError, setUserNameError] = useState("");
  const [userEmail, setUserEmail] = useState();
  const [userEmailError, setUserEmailError] = useState("");
  const [userImage, setUserImage] = useState();
  const [showUserImg, setShowUserImg] = useState();
  const [loader, setLoader] = useState(false);
  const [userStatus, setUserStatus] = useState("");

  const validation = () => {
    let isValid = true;
    if (!userName.trim()) {
      setUserNameError("Please enter userName");
      isValid = false;
    } else if (!unameRegex.test(userName)) {
      setUserEmailError("Please enter valid userName");
    } else {
      setUserNameError("");
    }
    if (!userEmail) {
      setUserEmailError("Please enter email");
      isValid = false;
    } else if (!emailRegex.test(userEmail)) {
      setUserEmailError("Please enter valid Email");
      isValid = false;
    } else {
      setUserEmailError("");
    }
    return isValid;
  };

  useEffect(() => {
    setUserName(userDetails.userName);
    setUserEmail(userDetails.userEmail);
  }, []);

  const updateUserButton = async (status) => {
    if (validation()) {
      if (userImage) {
        if (!status) {
          setLoader(true);
        }
        let formData = new FormData();
        formData.append("userImg", userImage ? userImage : userDetails.userImg);
        formData.append("username", userName);
        formData.append("email", userEmail);
        formData.append("userStatus", status ? status : userDetails.userStatus);
        formData.append("isActive", true);
        const res = await updateUserImg(formData, userDetails.id);
        if (res.success) {
          details.setUserImage(res.data.userImg);
          details.setUserName(res.data.username);
          setUserStatus(res.data.userStatus);
          const userData = {
            id: res.data._id,
            img: res.data.userImg,
            userName: res.data.username,
            userEmail: res.data.email,
            userStatus: res.data.userStatus,
          };
          localStorage.setItem("userData", JSON.stringify(userData));
          setLoader(false);
        } else {
          setLoader(false);
        }
      } else {
        if (!status) {
          setLoader(true);
        }
        let body = {
          username: userName,
          email: userEmail,
          userStatus: status ? status : userDetails.userStatus,
        };
        const response = await updateUser(body, userDetails.id);
        if (response.success) {
          setLoader(false);
          details.setUserName(response.data.username);
          setUserStatus(response.data.userStatus);
          const userData = {
            id: response.data._id,
            img: response.data.userImg,
            userName: response.data.username,
            userEmail: response.data.email,
            userStatus: response.data.userStatus,
          };
          localStorage.setItem("userData", JSON.stringify(userData));
          setUserImage(response.data.img);
        } else {
          setLoader(false);
          console.log(response);
        }
      }
    }
  };

  return (
    <div
      className={`tab-pane ${location.search === "?setting" ? "active" : ""}`}
      id="pills-setting"
      role="tabpanel"
      aria-labelledby="pills-setting-tab"
    >
      <div>
        <div className="user-profile-img">
          <img
            src="/images/4902908.jpg"
            className="profile-img profile-foreground-img"
            alt=""
          />
          <div className="overlay-content">
            <div>
              <div className="user-chat-nav p-3">
                <div className="d-flex w-100 align-items-center">
                  <div className="flex-grow-1">
                    <h5 className="text-white mb-0">Settings</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center p-3 p-lg-4 border-bottom pt-2 pt-lg-2 mt-n5 position-relative">
          <label className="mb-3 profile-user">
            <img
              src={userImage ? showUserImg : userDetails.img}
              className="rounded-circle avatar-lg img-thumbnail user-profile-image"
              alt=""
            />
            <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
              <input
                id="profile-img-file-input"
                type="file"
                className="profile-img-file-input"
                onChange={(e) => [
                  setUserImage(e.target.files[0]),
                  setShowUserImg(URL.createObjectURL(e.target.files[0])),
                ]}
              />
              <label
                htmlFor="profile-img-file-input"
                className="profile-photo-edit avatar-xs"
              >
                <span className="avatar-title rounded-circle bg-light text-body">
                  <i className="bx bxs-camera" />
                </span>
              </label>
            </div>
          </label>
          <h5 className="fs-16 mb-1 text-truncate"> </h5>
          <div className="dropdown d-inline-block">
            <a
              className="text-muted dropdown-toggle d-block text-capitalize"
              href=" "
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i
                className={
                  userDetails.userStatus === "active"
                    ? "bx bxs-circle text-success fs-10 me-1 align-middle"
                    : userDetails.userStatus === "away"
                    ? "bx bxs-circle text-warning fs-10 me-1 align-middle"
                    : userDetails.userStatus === "donotdisturb"
                    ? "bx bxs-circle text-danger fs-10 me-1 align-middle"
                    : ""
                }
              />
              {userStatus === "donotdisturb"
                ? "Do Not Disturb"
                : userStatus
                ? userStatus
                : userDetails.userStatus === "donotdisturb"
                ? "Do Not Disturb"
                : userDetails.userStatus}
            </a>
            <div className="dropdown-menu">
              <button
                className="dropdown-item"
                onClick={() => updateUserButton("active")}
              >
                <i className="bx bxs-circle text-success fs-10 me-1 align-middle" />
                Active
              </button>
              <button
                className="dropdown-item"
                onClick={() => updateUserButton("away")}
              >
                <i className="bx bxs-circle text-warning fs-10 me-1 align-middle" />
                Away
              </button>
              <button
                className="dropdown-item"
                onClick={() => updateUserButton("donotdisturb")}
              >
                <i className="bx bxs-circle text-danger text-uppercase fs-10 me-1 align-middle" />
                Do Not Disturb
              </button>
            </div>
          </div>
        </div>
        <div className="user-setting" data-simplebar>
          <div id="settingprofile" className="accordion accordion-flush">
            <div className="accordion-item">
              <div
                id="personalinfo"
                className="accordion-collapse collapse show"
                aria-labelledby="headerpersonalinfo"
                data-bs-parent="#settingprofile"
              >
                <div className="accordion-body edit-input">
                  <div>
                    <label className="form-label text-muted fs-13">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={userName}
                      value={userName}
                      onChange={(e) => [
                        setUserName(e.target.value),
                        setUserNameError(""),
                      ]}
                      placeholder="Enter name"
                    />
                    {userNameError ? (
                      <div className="error">{userNameError}</div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                    <label className="form-label text-muted fs-13 mt-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      defaultValue={userEmail}
                      onChange={(e) => [
                        setUserEmail(e.target.value),
                        setUserEmailError(""),
                      ]}
                      placeholder="Enter email"
                    />
                    {userEmailError ? (
                      <div className="error">{userEmailError}</div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="text-center mt-4">
                    <div className="row">
                      <div className="col-6">
                        <button
                          className="btn btn-primary w-100 groupCreateButton"
                          type="submit"
                          onClick={() => updateUserButton()}
                        >
                          {loader ? (
                            <div
                              className="spinner-border-setting"
                              role="status"
                            ></div>
                          ) : (
                            "Save"
                          )}
                        </button>
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
export default SettingsPanel;
