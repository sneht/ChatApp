import React, { useContext } from "react";
import { RiMessage2Line } from "react-icons/ri";
import "simplebar";
import "simplebar/dist/simplebar.css";
import { GroupDetails } from "../../App";
import { useLocation } from "react-router-dom";

const ProfilePanel = () => {
  const location = useLocation();
  const details = useContext(GroupDetails);
  const userDetails = JSON.parse(localStorage.getItem("userData"));

  return (
    <div
      className={`tab-pane ${location.search === "?profile" ? "active" : ""} `}
      id="pills-user"
      role="tabpanel"
      aria-labelledby="pills-user-tab"
    >
      <div>
        <div className="user-profile-img">
          <img src="/images/4902908.jpg" className="profile-img" alt="" />
          <div className="overlay-content">
            <div>
              <div className="user-chat-nav p-2 ps-3">
                <div className="d-flex w-100 align-items-center">
                  <div className="flex-grow-1">
                    <h5 className="text-white mb-0">My Profile</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center border-bottom border-bottom-dashed pt-2 pb-4 mt-n5 position-relative">
          <div className="mb-lg-3 mb-2">
            <img
              src={`${userDetails.img}`}
              className="rounded-circle avatar-lg img-thumbnail"
              alt=""
            />
          </div>
          <h5 className="fs-17 mb-1  text-capitalize">
            {details.userName ? details.userName : userDetails.userName}
          </h5>
          <p className="text-muted fs-14 text-truncate mb-0">
            Front end Developer
          </p>
        </div>
        <div className="p-4 profile-desc" data-simplebar>
          <div className="text-muted">
            <p className="mb-3">
              A professional profile is an introductory section on your resume
              that highlights your relevant qualifications and skills.
            </p>
          </div>
          <div className="border-bottom border-bottom-dashed mb-4 pb-2">
            <div className="d-flex py-2 align-items-center">
              <div className="flex-shrink-0 me-3">
                <i className="bx bx-user align-middle text-muted fs-19" />
              </div>
              <div className="flex-grow-1">
                <p className="mb-0 text-capitalize">
                  {details.userName ? details.userName : userDetails.userName}
                </p>
              </div>
            </div>
            <div className="d-flex py-2 align-items-center">
              <div className="flex-shrink-0 me-3">
                <RiMessage2Line />
              </div>
              <div className="flex-grow-1">
                <p className="fw-medium mb-0">{userDetails.userEmail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;
