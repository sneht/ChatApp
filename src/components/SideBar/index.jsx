import React from "react";
import {
  RiSettings4Line,
  RiBookmark3Line,
  RiContactsBookLine,
  RiDiscussLine,
  RiUser3Line,
  RiMoonLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
const SideBar = () => {
  const logOut = () => {
    localStorage.clear();
  };
  return (
    <>
      <div className="navbar-brand-box">
        <a href=" " className="logo logo-dark">
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
        </a>
        <Link to="/" className="logo logo-light">
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
          <li className="nav-item d-none d-lg-block">
            <button
              className="nav-link"
              id="pills-user-tab"
              data-bs-toggle="pill"
              // onclick={() => profileHandle()}
              href="#pills-user"
              role="tab"
            >
              <RiUser3Line />
            </button>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active"
              id="pills-chat-tab"
              data-bs-toggle="pill"
              href="#pills-chat"
              role="tab"
            >
              <RiDiscussLine />
              {/* <span className="badge bg-danger fs-11 rounded-pill sidenav-item-badge">
                
              </span> */}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-contacts-tab"
              data-bs-toggle="pill"
              href="#pills-contacts"
              role="tab"
            >
              <RiContactsBookLine />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-bookmark-tab"
              data-bs-toggle="pill"
              href="#pills-bookmark"
              role="tab"
            >
              <RiBookmark3Line />
            </a>
          </li>
          <li className="nav-item d-none d-lg-block">
            <a
              className="nav-link"
              id="pills-setting-tab"
              data-bs-toggle="pill"
              href="#pills-setting"
              role="tab"
            >
              <RiSettings4Line />
            </a>
          </li>
          <li className="nav-item mt-lg-auto">
            <a className="nav-link light-dark-mode" href=" ">
              <RiMoonLine />
            </a>
          </li>
          <li className="nav-item dropdown profile-user-dropdown">
            <a
              className="nav-link dropdown-toggle bg-light"
              href=" "
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src="/images/users/avatar-1.jpg"
                alt=""
                className="profile-user rounded-circle"
              />
            </a>
            <div className="dropdown-menu">
              <a
                className="dropdown-item d-flex align-items-center justify-content-between"
                id="pills-user-tab"
                data-bs-toggle="pill"
                href="#pills-user"
                role="tab"
              >
                Profile <i className="bx bx-user-circle text-muted ms-1" />
              </a>
              <a
                className="dropdown-item d-flex align-items-center justify-content-between"
                id="pills-setting-tab"
                data-bs-toggle="pill"
                href="#pills-setting"
                role="tab"
              >
                Setting <i className="bx bx-cog text-muted ms-1" />
              </a>
              <a
                className="dropdown-item d-flex align-items-center justify-content-between"
                href="auth-changepassword.html"
              >
                Change Password
                <i className="bx bx-lock-open text-muted ms-1" />
              </a>
              <div className="dropdown-divider" />
              <Link
                className="dropdown-item d-flex align-items-center justify-content-between"
                to="/logout"
                onClick={() => logOut()}
              >
                Log out <i className="bx bx-log-out-circle text-muted ms-1" />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
