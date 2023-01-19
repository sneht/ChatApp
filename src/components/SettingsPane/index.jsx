import React, { useContext } from "react";
import { useState } from "react";
import { GroupDetails } from "../../App";
import { updateUser, updateUserImg } from "../auth.request";
import { useLocation } from "react-router-dom";

const SettingsPane = () => {
  const location = useLocation();

  const details = useContext(GroupDetails);
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userStatus, setUserStatus] = useState("");
  const [statusIcon, setStatusIcon] = useState("");
  const [userImage, setUserImage] = useState();
  const [showUserImg, setShowUserImg] = useState();
  const [loader, setLoader] = useState(false);

  const userDetails = JSON.parse(localStorage.getItem("userData"));
  const updateUserButton = async () => {
    if (userImage) {
      setLoader(true);
      let formData = new FormData();
      formData.append("userImg", userImage ? userImage : userDetails.userImg);
      formData.append("username", userName ? userName : userDetails.userName);
      formData.append("email", userEmail ? userEmail : userDetails.userEmail);
      formData.append(
        "userStatus",
        userStatus ? userStatus : userDetails.userStatus
      );
      formData.append("isActive", true);
      const res = await updateUserImg(formData, userDetails.id);

      if (res.success) {
        details.setUserImage(res.data.userImg);
        details.setUserName(res.data.username);
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
      setLoader(true);
      let body = {
        username: userName ? userName : userDetails.userName,
        email: userEmail ? userEmail : userDetails.userEmail,
        userStatus: userStatus ? userStatus : userDetails.userStatus,
      };
      const response = await updateUser(body, userDetails.id);
      if (response.success) {
        details.setUserName(response.data.username);
        setLoader(false);
        setUserName(response.data.userName);
        const userData = {
          id: response.data._id,
          img: response.data.userImg,
          userName: response.data.username,
          userEmail: response.data.email,
          userStatus: response.data.userStatus,
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        setUserStatus(response.data.userStatus);
        setUserImage(response.data.img);
      } else {
        setLoader(false);
        console.log(response);
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
            style={{ height: "160px" }}
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
                  setShowUserImg(URL.createObjectURL(e.target.files[0]))
                ]
                }
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
          <div className="dropdown d-inline-block" >
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
                  statusIcon.length > 0
                    ? statusIcon
                    : userStatus || userDetails.userStatus === "active"
                      ? "bx bxs-circle text-success fs-10 me-1 align-middle"
                      : userStatus || userDetails.userStatus === "away"
                        ? "bx bxs-circle text-warning fs-10 me-1 align-middle"
                        : userStatus || userDetails.userStatus === "donotdisturb"
                          ? "bx bxs-circle text-danger fs-10 me-1 align-middle"
                          : ""
                }
              />
              {userStatus ? userStatus : userDetails.userStatus}
            </a>
            <div className="dropdown-menu">
              <button
                className="dropdown-item"
                onClick={() => [
                  setUserStatus("active"),
                  setStatusIcon(
                    "bx bxs-circle text-success fs-10 me-1 align-middle"
                  ),
                ]}
              >
                <i className="bx bxs-circle text-success fs-10 me-1 align-middle" />
                Active
              </button>
              <button
                className="dropdown-item"
                onClick={() => [
                  setUserStatus("away"),
                  setStatusIcon(
                    "bx bxs-circle text-warning fs-10 me-1 align-middle"
                  ),
                ]}
              >
                <i className="bx bxs-circle text-warning fs-10 me-1 align-middle" />
                Away
              </button>
              <button
                className="dropdown-item"
                onClick={() => [
                  setUserStatus("donotdisturb"),
                  setStatusIcon(
                    "bx bxs-circle text-danger fs-10 me-1 align-middle"
                  ),
                ]}
              >
                <i className="bx bxs-circle text-danger text-uppercase fs-10 me-1 align-middle" />
                Do Not Disturb
              </button>
            </div>
          </div>
        </div>
        <div
          className="user-setting"
          data-simplebar
          style={{ height: "calc(33vh)" }}
        >
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
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label text-muted fs-13"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      defaultValue={userName ? userName : userDetails.userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="Enter name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label text-muted fs-13"
                      style={{ marginTop: "5px" }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputPassword1"
                      defaultValue={userDetails.userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <div className="row">
                      <div className="col-6">
                        <button
                          className="btn btn-primary w-100"
                          type="submit"
                          onClick={() => updateUserButton()}
                          style={{ width: "27%", height: "37px" }}
                        >
                          {loader ? (
                            <div
                              className="spinner-border"
                              role="status"
                              style={{
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                                marginTop: "-5px",
                              }}
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

export default SettingsPane;
