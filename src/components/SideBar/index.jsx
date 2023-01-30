import React, { useContext } from "react";
import {
  RiSettings4Line,
  RiContactsBookLine,
  RiDiscussLine,
  RiUser3Line,
} from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GroupDetails } from "../../App";

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const details = useContext(GroupDetails);
  const img = JSON.parse(localStorage.getItem("userData"));

  const logOut = () => {
    localStorage.clear();
    details.setCurrentId("");
    details.currentGroupDetails("");
    navigate("/logout");
  };

  return (
    <>
      <div className="navbar-brand-box">
        <Link to="" className="logo logo-dark">
          <span className="logo-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={30}
              height={30}
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z" />
            </svg>
          </span>
        </Link>
      </div>
      <div className="flex-lg-column my-0 sidemenu-navigation">
        <ul className="nav nav-pills side-menu-nav" role="tablist">
          <li className="nav-item">
            <Link to="">
              <button
                className={`nav-link ${
                  location.search === "" ? "active" : ""
                } `}
                id="pills-chat-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-chat"
                role="tab"
              >
                <RiDiscussLine />
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="?contactList">
              <button
                className={`nav-link ${
                  location.search === "?contactList" ? "active" : ""
                } `}
                id="pills-contacts-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contacts"
                role="tab"
              >
                <RiContactsBookLine />
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="?profile">
              <button
                className={`nav-link ${
                  location.search === "?profile" ? "active" : ""
                } `}
                id="pills-user-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-user"
                role="tab"
              >
                <RiUser3Line />
              </button>
            </Link>
          </li>
          <li className="nav-item d-none d-lg-block">
            <Link to="?setting">
              <button
                className={`nav-link ${
                  location.search === "?setting" ? "active" : ""
                } `}
                id="pills-setting-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-setting"
                role="tab"
              >
                <RiSettings4Line />
              </button>
            </Link>
          </li>
          <li className="nav-item dropdown profile-user-dropdown">
            <button
              className="nav-link bg-light"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src={details.userImage ? details.userImage : img.img}
                alt=""
                className="profile-user rounded-circle"
              />
            </button>
            <div className="dropdown-menu">
              <Link
                className="dropdown-item d-flex align-items-center justify-content-between"
                to="/changepassword"
              >
                Change Password
                <i className="bx bx-lock-open text-muted ms-1" />
              </Link>
              <div className="dropdown-divider" />
              <button
                className="dropdown-item d-flex align-items-center justify-content-between"
                onClick={() => logOut()}
              >
                Log out <i className="bx bx-log-out-circle text-muted ms-1" />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
