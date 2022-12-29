import React, { useState } from "react";
import SideBar from "../../components/SideBar/index";
import {
  RiSettings4Line,
  RiShoppingBag3Line,
  RiCloseFill,
  RiCloseLine,
} from "react-icons/ri";
import Pane from "../../components/Panes";
import { Link } from "react-router-dom";

const Home = () => {
  //   const [profile, setProfile] = useState(false);

  const [text, setText] = useState();
  const [textError, setTextError] = useState("");
  //   const profileHandle = () => {
  //     if (profile === false) {
  //       setProfile(true);
  //     } else {
  //       setProfile(false);
  //     }
  //   };

  const sendButton = (e) => {
    e.preventDefault();
    let msgIsValid = true;

    if (text) {
      console.log(text);
    } else if (!text) {
      setTextError("Please enter Message");
      msgIsValid = false;
    }
    return msgIsValid;
  };
  return (
    <div>
      <div>
        <div className="layout-wrapper d-lg-flex">
          <div className="side-menu flex-lg-column">
            <SideBar />
          </div>
          <Pane />
          <div className="user-chat w-100 overflow-hidden">
            <div className="chat-content d-lg-flex">
              {/* start chat conversation section */}
              <div className="w-100 overflow-hidden position-relative">
                {/* conversation user */}
                <div id="users-chat" className="position-relative">
                  <div className="py-3 user-chat-topbar">
                    <div className="row align-items-center">
                      <div className="col-sm-4 col-8">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 d-block d-lg-none me-3">
                            <a
                              href=" "
                              className="btn-primary user-chat-remove fs-18 p-1"
                            >
                              <i className="bx bx-chevron-left align-middle" />
                            </a>
                          </div>
                          <div className="flex-grow-1 overflow-hidden">
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
                                <img
                                  src="/images/users/avatar-2.jpg"
                                  className="rounded-circle avatar-sm"
                                  alt=""
                                />
                                <span className="user-status" />
                              </div>
                              <div className="flex-grow-1 overflow-hidden">
                                <h6 className="text-truncate mb-0 fs-18">
                                  <Link
                                    to=" "
                                    className="user-profile-show text-reset"
                                  >
                                    Victoria Lane
                                  </Link>
                                </h6>
                                <p className="text-truncate text-muted mb-0">
                                  <small>Online</small>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-8 col-4">
                        <ul className="list-inline user-chat-nav text-end mb-0">
                          <li className="list-inline-item">
                            <div className="dropdown">
                              <button
                                className="btn nav-btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-search"></i>
                              </button>
                              <div className="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg">
                                <div className="search-box p-2">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search.."
                                    id="searchChatMessage"
                                  />
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                            <button
                              type="button"
                              className="btn nav-btn"
                              data-bs-toggle="modal"
                              data-bs-target=".audiocallModal"
                            >
                              <i className="bx bxs-phone-call" />
                            </button>
                          </li>
                          <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                            <button
                              type="button"
                              className="btn nav-btn"
                              data-bs-toggle="modal"
                              data-bs-target=".videocallModal"
                            >
                              <i className="bx bx-video" />
                            </button>
                          </li>
                          <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                            <button
                              type="button"
                              className="btn nav-btn"
                              data-bs-toggle="modal"
                              data-bs-target=".pinnedtabModal"
                            >
                              <i className="bx bx-bookmark" />
                            </button>
                          </li>
                          <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                            <button
                              type="button"
                              className="btn nav-btn user-profile-show"
                            >
                              <i className="bx bxs-info-circle" />
                            </button>
                          </li>
                          <li className="list-inline-item">
                            <div className="dropdown">
                              <button
                                className="btn nav-btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-vertical-rounded" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item d-flex justify-content-between align-items-center d-lg-none user-profile-show"
                                  href="  "
                                >
                                  View Profile{" "}
                                  <i className="bx bx-user text-muted" />
                                </a>
                                <a
                                  className="dropdown-item d-flex justify-content-between align-items-center d-lg-none"
                                  href=" "
                                  data-bs-toggle="modal"
                                  data-bs-target=".audiocallModal"
                                >
                                  Audio{" "}
                                  <i className="bx bxs-phone-call text-muted" />
                                </a>
                                <a
                                  className="dropdown-item d-flex justify-content-between align-items-center d-lg-none"
                                  href=" "
                                  data-bs-toggle="modal"
                                  data-bs-target=".videocallModal"
                                >
                                  Video <i className="bx bx-video text-muted" />
                                </a>
                                <a
                                  className="dropdown-item d-flex justify-content-between align-items-center"
                                  href=" "
                                >
                                  Archive{" "}
                                  <i className="bx bx-archive text-muted" />
                                </a>
                                <a
                                  className="dropdown-item d-flex justify-content-between align-items-center"
                                  href=" "
                                >
                                  Muted
                                  <i className="bx bx-microphone-off text-muted" />
                                </a>
                                <a
                                  className="dropdown-item d-flex justify-content-between align-items-center"
                                  href=" "
                                >
                                  Delete{" "}
                                  <i className="bx bx-trash text-muted" />
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* end chat user head */}
                  {/* start chat conversation */}
                  <div
                    className="chat-conversation p-3 p-lg-4"
                    id="chat-conversation"
                    data-simplebar
                  >
                    <ul
                      className="list-unstyled chat-conversation-list"
                      id="users-conversation"
                    />
                  </div>
                  {/* <div
                    className="alert alert-warning alert-dismissible copyclipboard-alert px-4 fade show"
                    id="copyClipBoard"
                    role="alert"
                  >
                    Message copied
                  </div> */}
                  {/* end chat conversation end */}
                </div>
                {/* conversation group */}

                {/* start chat input section */}
                <div className="position-relative">
                  <div className="chat-input-section p-4 border-top">
                    <form onSubmit={sendButton}>
                      <div className="row g-0 align-items-center">
                        <div className="file_Upload" />
                        <div className="col-auto">
                          <div className="chat-input-links me-md-2">
                            <div
                              className="links-list-item"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              data-bs-placement="top"
                              title="More"
                            >
                              <button
                                type="button"
                                className="btn btn-link text-decoration-none btn-lg waves-effect"
                                data-bs-toggle="collapse"
                                data-bs-target="#chatinputmorecollapse"
                                aria-expanded="false"
                                aria-controls="chatinputmorecollapse"
                              >
                                <i className="bx bx-dots-horizontal-rounded align-middle" />
                              </button>
                            </div>
                            <div
                              className="links-list-item"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              data-bs-placement="top"
                              title="Emoji"
                            >
                              <button
                                type="button"
                                className="btn btn-link text-decoration-none btn-lg waves-effect emoji-btn"
                                id="emoji-btn"
                              >
                                <i className="bx bx-smile align-middle" />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="position-relative">
                            <input
                              type="text"
                              className="form-control form-control-lg bg-light border-0 chat-input"
                              id="chat-input"
                              placeholder="Type your message..."
                              value={text}
                              onChange={(e) => [
                                setText(e.target.value),
                                setTextError(""),
                              ]}
                            />
                            {/* <div className="chat-input-typing">
                              <span className="typing-user d-flex">
                                Victoria Lane is typing
                                <span className="typing ms-2">
                                  <span className="dot" />
                                  <span className="dot" />
                                  <span className="dot" />
                                </span>
                              </span>
                            </div> */}
                            <div className="error">{textError}</div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="chat-input-links ms-2 gap-md-1">
                            <div
                              className="links-list-item d-none d-sm-block"
                              data-bs-container=".chat-input-links"
                              data-bs-toggle="popover"
                              data-bs-trigger="focus"
                              data-bs-html="true"
                              data-bs-placement="top"
                              data-bs-content="<div className='loader-line'><div className='line'></div><div className='line'></div><div className='line'></div><div className='line'></div><div className='line'></div></div>"
                            >
                              <button
                                type="button"
                                className="btn btn-link text-decoration-none btn-lg waves-effect"
                                // onClick="audioPermission()"
                              >
                                <i className="bx bx-microphone align-middle" />
                              </button>
                            </div>
                            <div className="links-list-item">
                              <button
                                type="submit"
                                className="btn btn-primary btn-lg chat-send waves-effect waves-light"
                                onSubmit={() => sendButton()}
                              >
                                <i
                                  className="bx bxs-send align-middle"
                                  id="submit-btn"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div
                      className="chat-input-collapse chat-input-collapse1 collapse"
                      id="chatinputmorecollapse"
                    >
                      <div className="card mb-0">
                        <div className="card-body py-3">
                          {/* Swiper */}
                          <div className="swiper chatinput-links">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                <div className="text-center px-2 position-relative">
                                  <div>
                                    <input
                                      id="attachedfile-input"
                                      type="file"
                                      className="d-none"
                                      accept=".zip,.rar,.7zip,.pdf"
                                      multiple
                                    />
                                    <label
                                      htmlFor="attachedfile-input"
                                      className="avatar-sm mx-auto stretched-link"
                                    >
                                      <span className="avatar-title fs-18 bg-soft-primary text-primary rounded-circle">
                                        <i className="bx bx-paperclip" />
                                      </span>
                                    </label>
                                  </div>
                                  <h5 className="fs-11 text-uppercase mt-3 mb-0 text-body text-truncate">
                                    Attached
                                  </h5>
                                </div>
                              </div>
                              <div className="swiper-slide">
                                <div className="text-center px-2">
                                  <div className="avatar-sm mx-auto">
                                    <div className="avatar-title fs-18 bg-soft-primary text-primary rounded-circle">
                                      <i className="bx bxs-camera" />
                                    </div>
                                  </div>
                                  <h5 className="fs-11 text-uppercase text-truncate mt-3 mb-0">
                                    <a
                                      href=" "
                                      className="text-body stretched-link"
                                      //   onClick="cameraPermission()"
                                    >
                                      Camera
                                    </a>
                                  </h5>
                                </div>
                              </div>
                              <div className="swiper-slide">
                                <div className="text-center px-2 position-relative">
                                  <div>
                                    <input
                                      id="galleryfile-input"
                                      type="file"
                                      className="d-none"
                                      accept="image/png, image/gif, image/jpeg"
                                      multiple
                                    />
                                    <label
                                      htmlFor="galleryfile-input"
                                      className="avatar-sm mx-auto stretched-link"
                                    >
                                      <span className="avatar-title fs-18 bg-soft-primary text-primary rounded-circle">
                                        <i className="bx bx-images" />
                                      </span>
                                    </label>
                                  </div>
                                  <h5 className="fs-11 text-uppercase text-truncate mt-3 mb-0">
                                    Gallery
                                  </h5>
                                </div>
                              </div>
                              <div className="swiper-slide">
                                <div className="text-center px-2">
                                  <div>
                                    <input
                                      id="audiofile-input"
                                      type="file"
                                      className="d-none"
                                      accept="audio/*"
                                      multiple
                                    />
                                    <label
                                      htmlFor="audiofile-input"
                                      className="avatar-sm mx-auto stretched-link"
                                    >
                                      <span className="avatar-title fs-18 bg-soft-primary text-primary rounded-circle">
                                        <i className="bx bx-headphone" />
                                      </span>
                                    </label>
                                  </div>
                                  <h5 className="fs-11 text-uppercase text-truncate mt-3 mb-0">
                                    Audio
                                  </h5>
                                </div>
                              </div>
                              <div className="swiper-slide">
                                <div className="text-center px-2">
                                  <div className="avatar-sm mx-auto">
                                    <div className="avatar-title fs-18 bg-soft-primary text-primary rounded-circle">
                                      <i className="bx bx-current-location" />
                                    </div>
                                  </div>
                                  <h5 className="fs-11 text-uppercase text-truncate mt-3 mb-0">
                                    <a
                                      href=" "
                                      className="text-body stretched-link"
                                      //   onClick="getLocation()"
                                    >
                                      Location
                                    </a>
                                  </h5>
                                </div>
                              </div>
                              <div className="swiper-slide">
                                <div className="text-center px-2">
                                  <div className="avatar-sm mx-auto">
                                    <div className="avatar-title fs-18 bg-soft-primary text-primary rounded-circle">
                                      <i className="bx bxs-user-circle" />
                                    </div>
                                  </div>
                                  <h5 className="fs-11 text-uppercase text-truncate mt-3 mb-0">
                                    <a
                                      href=" "
                                      className="text-body stretched-link"
                                      data-bs-toggle="modal"
                                      data-bs-target=".contactModal"
                                    >
                                      Contacts
                                    </a>
                                  </h5>
                                </div>
                              </div>
                              <div className="swiper-slide d-block d-sm-none">
                                <div className="text-center px-2">
                                  <div className="avatar-sm mx-auto">
                                    <div className="avatar-title fs-18 bg-soft-primary text-primary rounded-circle">
                                      <i className="bx bx-microphone" />
                                    </div>
                                  </div>
                                  <h5 className="fs-11 text-uppercase text-truncate mt-3 mb-0">
                                    <a
                                      href=" "
                                      className="text-body stretched-link"
                                    >
                                      Audio
                                    </a>
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="replyCard">
                    <div className="card mb-0">
                      <div className="card-body py-3">
                        <div className="replymessage-block mb-0 d-flex align-items-start">
                          <div className="flex-grow-1">
                            {/* <h5 className="conversation-name"></h5> */}
                            <p className="mb-0" />
                          </div>
                          <div className="flex-shrink-0">
                            <button
                              type="button"
                              id="close_toggle"
                              className="btn btn-sm btn-link mt-n2 me-n3 fs-18"
                            >
                              <i className="bx bx-x align-middle" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end chat input section */}
              </div>
              {/* end chat conversation section */}
              {/* start User profile detail sidebar */}
              <div className="user-profile-sidebar">
                <div className="p-3 border-bottom">
                  <div className="user-profile-img">
                    <img
                      src=" /images/users/avatar-2.jpg"
                      className="profile-img rounded"
                      alt=""
                    />
                    <div className="overlay-content rounded">
                      <div className="user-chat-nav p-2">
                        <div className="d-flex w-100">
                          <div className="flex-grow-1">
                            <button
                              type="button"
                              className="btn nav-btn text-white user-profile-show d-none d-lg-block"
                            >
                              <i className="bx bx-x" />
                            </button>
                            <button
                              type="button"
                              className="btn nav-btn text-white user-profile-show d-block d-lg-none"
                            >
                              <i className="bx bx-left-arrow-alt" />
                            </button>
                          </div>
                          <div className="flex-shrink-0">
                            <div className="dropdown">
                              <button
                                className="btn nav-btn text-white dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-vertical-rounded" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item d-flex justify-content-between align-items-center d-lg-none user-profile-show"
                                  href=" "
                                >
                                  View Profile{" "}
                                  <i className="bx bx-user text-muted" />
                                </a>
                                <a
                                  className="dropdown-item d-flex justify-content-between align-items-center d-lg-none"
                                  href=" "
                                  data-bs-toggle="modal"
                                  data-bs-target=".audiocallModal"
                                >
                                  Audio{" "}
                                  <i className="bx bxs-phone-call text-muted" />
                                </a>
                                <a
                                  className="dropdown-item d-flex justify-content-between align-items-center d-lg-none"
                                  href=" "
                                  data-bs-toggle="modal"
                                  data-bs-target=".videocallModal"
                                >
                                  Video <i className="bx bx-video text-muted" />
                                </a>
                                <a
                                  className="dropdown-item d-flex justify-content-between align-items-center"
                                  href=" "
                                >
                                  Archive{" "}
                                  <i className="bx bx-archive text-muted" />
                                </a>
                                <a
                                  className="dropdown-item d-flex justify-content-between align-items-center"
                                  href=" "
                                >
                                  Muted
                                  <i className="bx bx-microphone-off text-muted" />
                                </a>
                                <a
                                  className="dropdown-item d-flex justify-content-between align-items-center"
                                  href=" "
                                >
                                  Delete{" "}
                                  <i className="bx bx-trash text-muted" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-auto p-3">
                        <h5 className="user-name mb-0 text-truncate">
                          Victoria Lane
                        </h5>
                        <p className="fs-14 text-truncate user-profile-status mt-1 mb-0">
                          <i className="bx bxs-circle fs-10 text-success me-1 ms-0" />
                          Online
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End profile user */}
                {/* Start user-profile-desc */}
                <div className="p-4 user-profile-desc" data-simplebar>
                  <div className="text-center border-bottom border-bottom-dashed">
                    <div className="d-flex gap-2 justify-content-center mb-4">
                      <button type="button" className="btn avatar-sm p-0">
                        <span className="avatar-title rounded bg-soft-info text-info">
                          <i className="bx bxs-message-alt-detail" />
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn avatar-sm p-0 favourite-btn"
                      >
                        <span className="avatar-title rounded bg-soft-danger text-body">
                          <i className="bx bx-heart" />
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn avatar-sm p-0"
                        data-bs-toggle="modal"
                        data-bs-target=".audiocallModal"
                      >
                        <span className="avatar-title rounded bg-soft-success text-success">
                          <i className="bx bxs-phone-call" />
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn avatar-sm p-0"
                        data-bs-toggle="modal"
                        data-bs-target=".videocallModal"
                      >
                        <span className="avatar-title rounded bg-soft-warning text-warning">
                          <i className="bx bx-video" />
                        </span>
                      </button>
                      <div className="dropdown">
                        <button
                          className="btn avatar-sm p-0 dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="avatar-title bg-soft-primary text-primary rounded">
                            <i className="bx bx-dots-horizontal-rounded" />
                          </span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item d-flex justify-content-between align-items-center"
                            href=" "
                          >
                            Archive <i className="bx bx-archive text-muted" />
                          </a>
                          <a
                            className="dropdown-item d-flex justify-content-between align-items-center"
                            href=" "
                          >
                            Muted{" "}
                            <i className="bx bx-microphone-off text-muted" />
                          </a>
                          <a
                            className="dropdown-item d-flex justify-content-between align-items-center"
                            href=" "
                          >
                            Delete <i className="bx bx-trash text-muted" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-muted pt-4">
                    <h5 className="fs-12 text-muted text-uppercase">
                      Status :
                    </h5>
                    <p className="mb-4">
                      A professional profile is a brief summary of your skills,
                      strengths, and key experiences.
                    </p>
                  </div>
                  <div className="pb-4 border-bottom border-bottom-dashed mb-4">
                    <h5 className="fs-12 text-muted text-uppercase mb-2">
                      Info :
                    </h5>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <i className="ri-user-line align-middle fs-15 text-muted" />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h5 className="fs-14 text-truncate mb-0">
                          Victoria Lane
                        </h5>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mt-3">
                      <div className="flex-shrink-0">
                        <i className="ri-mail-line align-middle fs-15 text-muted" />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h5 className="fs-14 text-truncate mb-0">
                          bellacote@vhato.com
                        </h5>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mt-3">
                      <div className="flex-shrink-0">
                        <i className="ri-phone-line align-middle fs-15 text-muted" />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h5 className="fs-14 text-truncate mb-0">
                          +(345) 3216 48751
                        </h5>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mt-3">
                      <div className="flex-shrink-0">
                        <i className="ri-mail-line align-middle fs-15 text-muted" />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h5 className="fs-14 text-truncate mb-0">
                          California, USA
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="pb-4 border-bottom border-bottom-dashed mb-4">
                    <div className="d-flex">
                      <div className="flex-grow-1">
                        <h5 className="fs-12 text-muted text-uppercase">
                          Group in common
                        </h5>
                      </div>
                    </div>
                    <ul className="list-unstyled chat-list mx-n4">
                      <li>
                        <a href=" ">
                          <div className="d-flex align-items-center">
                            <img
                              src=" /images/users/group-img.jpg"
                              alt=""
                              className="avatar-sm rounded-circle me-3"
                            />
                            <div className="flex-grow-1 overflow-hidden">
                              <h6 className="text-truncate mb-0">
                                Landing Design
                              </h6>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href=" ">
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 avatar-sm me-3">
                              <span className="avatar-title rounded-circle bg-light text-dark">
                                SM
                              </span>
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                              <h6 className="text-truncate mb-0">
                                Sales &amp; Marketing
                              </h6>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="pb-4 border-bottom border-bottom-dashed mb-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="flex-grow-1">
                        <h5 className="fs-12 text-muted text-uppercase mb-0">
                          Shared Images
                        </h5>
                      </div>
                      <div className="flex-shrink-0">
                        <a href=" " className="fs-12 fw-medium d-block">
                          Show all
                        </a>
                      </div>
                    </div>
                    <div className="profile-media-img">
                      <div className="row g-1">
                        <div className="col-lg-4 col-6">
                          <a href=" ">
                            <img
                              src=" /images/small/img-1.jpg"
                              alt="media img"
                              className="img-fluid rounded"
                            />
                          </a>
                        </div>
                        <div className="col-lg-4 col-6">
                          <a href=" ">
                            <img
                              src=" /images/small/img-2.jpg"
                              alt="media img"
                              className="img-fluid rounded"
                            />
                          </a>
                        </div>
                        <div className="col-lg-4 col-6">
                          <a href=" ">
                            <img
                              src=" /images/small/img-3.jpg"
                              alt="media img"
                              className="img-fluid rounded"
                            />
                          </a>
                        </div>
                        <div className="col-lg-4 col-6">
                          <a href=" ">
                            <img
                              src=" /images/small/img-4.jpg"
                              alt="media img"
                              className="img-fluid rounded"
                            />
                          </a>
                        </div>
                        <div className="col-lg-4 col-6">
                          <a href=" ">
                            <img
                              src=" /images/small/img-5.jpg"
                              alt="media img"
                              className="img-fluid rounded"
                            />
                          </a>
                        </div>
                        <div className="col-lg-4 col-6">
                          <div className="position-relative rounded overflow-hidden">
                            <a href=" " className="d-block">
                              <img
                                src=" /images/small/img-6.jpg"
                                alt="media img"
                                className="img-fluid rounded"
                              />
                              <div className="bg-overlay" />
                              <div className="position-absolute top-50 start-50 text-white translate-middle fs-16">
                                +10
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h5 className="fs-11 text-muted text-uppercase mb-3">
                        Attached Files
                      </h5>
                    </div>
                    <div>
                      <div className="card mb-2 border border-dashed">
                        <div className="card-body p-2">
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 ms-1 me-3">
                              <img
                                src=" /images/pdf-file.png"
                                alt=""
                                className="avatar-xs"
                              />
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                              <h5 className="fs-14 text-truncate mb-1">
                                design-phase-1-approved.pdf
                              </h5>
                              <p className="text-muted fs-13 mb-0">12.5 MB</p>
                            </div>
                            <div className="flex-shrink-0 ms-3">
                              <div className="d-flex gap-2">
                                <div>
                                  <a href=" " className="text-muted px-1">
                                    <i className="bx bxs-download" />
                                  </a>
                                </div>
                                <div className="dropdown">
                                  <a
                                    className="dropdown-toggle text-muted px-1"
                                    href=" "
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i className="bx bx-dots-horizontal-rounded" />
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-end">
                                    <a
                                      className="dropdown-item d-flex align-items-center justify-content-between"
                                      href=" "
                                    >
                                      Share
                                      <i className="bx bx-share-alt ms-2 text-muted" />
                                    </a>
                                    <a
                                      className="dropdown-item d-flex align-items-center justify-content-between"
                                      href=" "
                                    >
                                      Bookmark
                                      <i className="bx bx-bookmarks text-muted ms-2" />
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a
                                      className="dropdown-item d-flex align-items-center justify-content-between"
                                      href=" "
                                    >
                                      Delete
                                      <i className="bx bx-trash ms-2 text-muted" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card border border-dashed mb-2">
                        <div className="card-body p-2">
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 ms-1 me-3">
                              <img
                                src=" /images/image-file.png"
                                alt=""
                                className="avatar-xs"
                              />
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                              <h5 className="fs-14 text-truncate mb-1">
                                Image-1.jpg
                              </h5>
                              <p className="text-muted fs-13 mb-0">4.2 MB</p>
                            </div>
                            <div className="flex-shrink-0 ms-3">
                              <div className="d-flex gap-2">
                                <div>
                                  <a href=" " className="text-muted px-1">
                                    <i className="bx bxs-download" />
                                  </a>
                                </div>
                                <div className="dropdown">
                                  <a
                                    className="dropdown-toggle text-muted px-1"
                                    href=" "
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i className="bx bx-dots-horizontal-rounded" />
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-end">
                                    <a
                                      className="dropdown-item d-flex align-items-center justify-content-between"
                                      href=" "
                                    >
                                      Share
                                      <i className="bx bx-share-alt ms-2 text-muted" />
                                    </a>
                                    <a
                                      className="dropdown-item d-flex align-items-center justify-content-between"
                                      href=" "
                                    >
                                      Bookmark
                                      <i className="bx bx-bookmarks text-muted ms-2" />
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a
                                      className="dropdown-item d-flex align-items-center justify-content-between"
                                      href=" "
                                    >
                                      Delete
                                      <i className="bx bx-trash ms-2 text-muted" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card p-2 border border-dashed mb-2">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 ms-1 me-3">
                            <img
                              src=" /images/image-file.png"
                              alt=""
                              className="avatar-xs"
                            />
                          </div>
                          <div className="flex-grow-1 overflow-hidden">
                            <h5 className="fs-14 text-truncate mb-1">
                              Image-2.jpg
                            </h5>
                            <p className="text-muted fs-13 mb-0">3.1 MB</p>
                          </div>
                          <div className="flex-shrink-0 ms-3">
                            <div className="d-flex gap-2">
                              <div>
                                <a href=" " className="text-muted px-1">
                                  <i className="bx bxs-download" />
                                </a>
                              </div>
                              <div className="dropdown">
                                <a
                                  className="dropdown-toggle text-muted px-1"
                                  href=" "
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="bx bx-dots-horizontal-rounded" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a
                                    className="dropdown-item d-flex align-items-center justify-content-between"
                                    href=" "
                                  >
                                    Share
                                    <i className="bx bx-share-alt ms-2 text-muted" />
                                  </a>
                                  <a
                                    className="dropdown-item d-flex align-items-center justify-content-between"
                                    href=" "
                                  >
                                    Bookmark
                                    <i className="bx bx-bookmarks text-muted ms-2" />
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a
                                    className="dropdown-item d-flex align-items-center justify-content-between"
                                    href=" "
                                  >
                                    Delete
                                    <i className="bx bx-trash ms-2 text-muted" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card p-2 border border-dashed mb-0">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 ms-1 me-3">
                            <img
                              src=" /images/zip-file.png"
                              alt=""
                              className="avatar-xs"
                            />
                          </div>
                          <div className="flex-grow-1 overflow-hidden">
                            <h5 className="fs-14 text-truncate mb-1">
                              Landing-A.zip
                            </h5>
                            <p className="text-muted fs-13 mb-0">6.7 MB</p>
                          </div>
                          <div className="flex-shrink-0 ms-3">
                            <div className="d-flex gap-2">
                              <div>
                                <a href=" " className="text-muted px-1">
                                  <i className="bx bxs-download" />
                                </a>
                              </div>
                              <div className="dropdown">
                                <a
                                  className="dropdown-toggle text-muted px-1"
                                  href=" "
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="bx bx-dots-horizontal-rounded" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a
                                    className="dropdown-item d-flex align-items-center justify-content-between"
                                    href=" "
                                  >
                                    Share
                                    <i className="bx bx-share-alt ms-2 text-muted" />
                                  </a>
                                  <a
                                    className="dropdown-item d-flex align-items-center justify-content-between"
                                    href=" "
                                  >
                                    Bookmark
                                    <i className="bx bx-bookmarks text-muted ms-2" />
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a
                                    className="dropdown-item d-flex align-items-center justify-content-between"
                                    href=" "
                                  >
                                    Delete
                                    <i className="bx bx-trash ms-2 text-muted" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end user-profile-desc */}
              </div>
              {/* end User profile detail sidebar */}
            </div>
            {/* end user chat content */}
          </div>
          <div
            className="modal fade"
            id="addContact-exampleModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="addContact-exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content modal-header-colored shadow-lg border-0">
                <div className="modal-header">
                  <h5
                    className="modal-title text-white fs-16"
                    id="addContact-exampleModalLabel"
                  >
                    Create Contact
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body p-4">
                  <form>
                    <div className="mb-3">
                      <label
                        htmlFor="addcontactemail-input"
                        className="form-label"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="addcontactemail-input"
                        placeholder="Enter Email"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="addcontactname-input"
                        className="form-label"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="addcontactname-input"
                        placeholder="Enter Name"
                      />
                    </div>
                    <div className="mb-0">
                      <label
                        htmlFor="addcontact-invitemessage-input"
                        className="form-label"
                      >
                        Invatation Message
                      </label>
                      <textarea
                        className="form-control"
                        id="addcontact-invitemessage-input"
                        rows={3}
                        placeholder="Enter Message"
                        defaultValue={""}
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-link"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Invite
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade audiocallModal"
            tabIndex={-1}
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content border border-0 overflow-hidden">
                <div className="modal-body p-0">
                  <div className="text-center p-4 pb-0">
                    <div className="avatar-xl mx-auto mb-4">
                      <img
                        src=" /images/users/avatar-7.jpg"
                        alt=""
                        className="img-thumbnail rounded-circle"
                      />
                    </div>
                    <div>
                      <h5 className="fs-22 text-truncate mb-0">
                        Victoria Lane
                      </h5>
                      <p className="text-muted">05:45</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
                      <a href=" " className="avatar-sm">
                        <div className="avatar-title bg-soft-danger text-danger fs-20 rounded-circle">
                          <i className="bx bx-video-recording" />
                        </div>
                      </a>
                      <a href=" " className="avatar-sm">
                        <div className="avatar-title bg-soft-success text-success fs-20 rounded-circle">
                          <i className="bx bx-volume-full" />
                        </div>
                      </a>
                      <a href=" " className="avatar-sm">
                        <div className="avatar-title bg-soft-info text-info fs-20 rounded-circle">
                          <i className="bx bx-user-plus" />
                        </div>
                      </a>
                    </div>
                    <div className="mt-4">
                      <button
                        type="button"
                        className="btn btn-danger avatar-md call-close-btn rounded-circle"
                        data-bs-dismiss="modal"
                      >
                        <span className="avatar-title bg-transparent fs-24">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-telephone-x"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            <path
                              fillRule="evenodd"
                              d="M11.146 1.646a.5.5 0 0 1 .708 0L13 2.793l1.146-1.147a.5.5 0 0 1 .708.708L13.707 3.5l1.147 1.146a.5.5 0 0 1-.708.708L13 4.207l-1.146 1.147a.5.5 0 0 1-.708-.708L12.293 3.5l-1.147-1.146a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="p-4 bg-primary-gradient mt-n4">
                    <div className="d-flex audio-call-menu">
                      <div className="flex-grow-1">
                        <button
                          type="button"
                          className="btn btn-light avatar-sm"
                        >
                          <span className="avatar-title bg-transparent fs-20">
                            <i className="ri-question-answer-line" />
                          </span>
                        </button>
                      </div>
                      <div className="flex-shrink-0">
                        <button
                          type="button"
                          className="btn btn-light avatar-sm"
                        >
                          <span className="avatar-title bg-transparent fs-20">
                            <i className="bx bx-microphone-off" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade videocallModal"
            tabIndex={-1}
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content border-0">
                <div className="modal-body p-0">
                  <div className="videocall-overlay" />
                  <div className="video-call-title position-absolute top-0 start-50 translate-middle-x mt-3 text-center">
                    <h5 className="fs-22 text-truncate text-white">
                      Victoria Lane
                    </h5>
                    <span className="badge text-white fs-12">05:27</span>
                  </div>
                  <img
                    src=" /images/users/avatar-2.jpg"
                    alt=""
                    className="videocallModal-bg"
                  />
                  <div>
                    <img
                      src=" /images/users/avatar-1.jpg"
                      alt=""
                      className="avatar-lg video-call-profile rounded"
                    />
                  </div>
                  <div className="position-absolute start-0 end-0 bottom-0">
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn btn-danger avatar-md call-close-btn rounded-circle"
                        data-bs-dismiss="modal"
                      >
                        <span className="avatar-title bg-transparent fs-24">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-telephone-x"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            <path
                              fillRule="evenodd"
                              d="M11.146 1.646a.5.5 0 0 1 .708 0L13 2.793l1.146-1.147a.5.5 0 0 1 .708.708L13.707 3.5l1.147 1.146a.5.5 0 0 1-.708.708L13 4.207l-1.146 1.147a.5.5 0 0 1-.708-.708L12.293 3.5l-1.147-1.146a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div className="p-4 bg-primary-gradient mt-n4">
                      <div className="d-flex gap-4 justify-content-center video-call-menu mt-2">
                        <a
                          href=" "
                          className="btn btn-light avatar-sm rounded-circle"
                        >
                          <span className="avatar-title bg-transparent fs-20">
                            <i className="bx bx-microphone-off" />
                          </span>
                        </a>
                        <a
                          href=" "
                          className="btn btn-light avatar-sm rounded-circle me-4"
                        >
                          <span className="avatar-title bg-transparent fs-20">
                            <i className="bx bx-video-off" />
                          </span>
                        </a>
                        <a
                          href=" "
                          className="btn btn-light avatar-sm rounded-circle ms-5"
                        >
                          <span className="avatar-title bg-transparent fs-20">
                            <i className="bx bx-volume-full" />
                          </span>
                        </a>
                        <a
                          href=" "
                          className="btn btn-light avatar-sm rounded-circle"
                        >
                          <span className="avatar-title bg-transparent fs-20">
                            <i className="bx bx-refresh" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade groupvideocallModal"
            tabIndex={-1}
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content border-0">
                <div className="modal-body p-0 overflow-hidden">
                  <div className="videocall-overlay" />
                  <div className="video-call-title position-absolute top-0 start-0 mt-3 ms-3">
                    <h5 className="user-profile-show fs-22 text-truncate text-white">
                      Reporting
                    </h5>
                    <span className="badge text-white fs-11">05:27</span>
                  </div>
                  <img
                    src=" /images/users/avatar-7.jpg"
                    alt=""
                    className="videocallModal-bg rounded"
                  />
                  <ul className="list-unstyled groud-call-user vstack gap-3 position-absolute end-0 top-0 p-3">
                    <li>
                      <a href=" ">
                        <img
                          src=" /images/users/avatar-11.jpg"
                          alt=""
                          className="avatar-lg rounded"
                        />
                      </a>
                    </li>
                    <li>
                      <a href=" ">
                        <img
                          src=" /images/users/avatar-6.jpg"
                          alt=""
                          className="avatar-lg rounded"
                        />
                      </a>
                    </li>
                    <li>
                      <a href=" ">
                        <img
                          src=" /images/users/avatar-3.jpg"
                          alt=""
                          className="avatar-lg rounded"
                        />
                      </a>
                    </li>
                  </ul>
                  <div className="position-absolute video-call-menu start-0 end-0 bottom-0 mb-3">
                    <div className="hstack justify-content-center gap-3">
                      <a
                        href=" "
                        className="btn btn-light avatar-sm rounded-circle"
                      >
                        <span className="avatar-title bg-transparent fs-20">
                          <i className="bx bx-microphone-off" />
                        </span>
                      </a>
                      <a
                        href=" "
                        className="btn btn-light avatar-sm rounded-circle me-4"
                      >
                        <span className="avatar-title bg-transparent fs-20">
                          <i className="bx bx-video-off" />
                        </span>
                      </a>
                      <button
                        type="button"
                        className="btn btn-danger avatar-sm call-close-btn shadow-none rounded-circle"
                        data-bs-dismiss="modal"
                      >
                        <span className="avatar-title bg-transparent fs-24">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-telephone-x"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            <path
                              fillRule="evenodd"
                              d="M11.146 1.646a.5.5 0 0 1 .708 0L13 2.793l1.146-1.147a.5.5 0 0 1 .708.708L13.707 3.5l1.147 1.146a.5.5 0 0 1-.708.708L13 4.207l-1.146 1.147a.5.5 0 0 1-.708-.708L12.293 3.5l-1.147-1.146a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </span>
                      </button>
                      <a
                        href=" "
                        className="btn btn-light avatar-sm rounded-circle ms-4"
                      >
                        <span className="avatar-title bg-transparent fs-20">
                          <i className="bx bx-volume-full" />
                        </span>
                      </a>
                      <a
                        href=" "
                        className="btn btn-light avatar-sm rounded-circle"
                      >
                        <span className="avatar-title bg-transparent fs-20">
                          <i className="bx bx-refresh" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end modal */}
          {/* Start add group Modal */}
          <div
            className="modal fade"
            id="addgroup-exampleModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="addgroup-exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content modal-header-colored border-0">
                <div className="modal-header">
                  <h5
                    className="modal-title text-white fs-16"
                    id="addgroup-exampleModalLabel"
                  >
                    Create New Group
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body p-4">
                  <form>
                    <div className="mb-4">
                      <label
                        htmlFor="addgroupname-input"
                        className="form-label"
                      >
                        Group Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="addgroupname-input"
                        placeholder="Enter Group Name"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Group Members</label>
                      <div className="mb-3">
                        <button
                          className="btn btn-light btn-sm"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#groupmembercollapse"
                          aria-expanded="false"
                          aria-controls="groupmembercollapse"
                        >
                          Select Members
                        </button>
                      </div>
                      <div className="collapse" id="groupmembercollapse">
                        <div className="card border">
                          <div className="card-header">
                            <h5 className="fs-15 mb-0">Contacts</h5>
                          </div>
                          <div className="card-body py-2 px-0">
                            <div data-simplebar style={{ maxHeight: "180px" }}>
                              <div>
                                <div className="contact-list-title">A</div>
                                <ul className="list-unstyled contact-list">
                                  <li>
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="memberCheck1"
                                        defaultChecked
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="memberCheck1"
                                      >
                                        Albert Rodarte
                                      </label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="memberCheck2"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="memberCheck2"
                                      >
                                        Allison Etter
                                      </label>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <div className="contact-list-title">C</div>
                                <ul className="list-unstyled contact-list">
                                  <li>
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="memberCheck3"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="memberCheck3"
                                      >
                                        Craig Smiley
                                      </label>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <div className="contact-list-title">D</div>
                                <ul className="list-unstyled contact-list">
                                  <li>
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="memberCheck4"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="memberCheck4"
                                      >
                                        Daniel Clay
                                      </label>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <div className="contact-list-title">I</div>
                                <ul className="list-unstyled contact-list">
                                  <li>
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="memberCheck5"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="memberCheck5"
                                      >
                                        Iris Wells
                                      </label>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <div className="contact-list-title">J</div>
                                <ul className="list-unstyled contact-list">
                                  <li>
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="memberCheck6"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="memberCheck6"
                                      >
                                        Juan Flakes
                                      </label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="memberCheck7"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="memberCheck7"
                                      >
                                        John Hall
                                      </label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="memberCheck8"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="memberCheck8"
                                      >
                                        Joy Southern
                                      </label>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <div className="contact-list-title">M</div>
                                <ul className="list-unstyled contact-list">
                                  <li>
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="memberCheck9"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="memberCheck9"
                                      >
                                        Michael Hinton
                                      </label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="memberCheck10"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="memberCheck10"
                                      >
                                        Mary Farmer
                                      </label>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <div className="contact-list-title">P</div>
                                <ul className="list-unstyled contact-list">
                                  <li>
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="memberCheck11"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="memberCheck11"
                                      >
                                        Phillis Griffin
                                      </label>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <div className="contact-list-title">R</div>
                                <ul className="list-unstyled contact-list">
                                  <li>
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="memberCheck12"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="memberCheck12"
                                      >
                                        Rocky Jackson
                                      </label>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <div className="contact-list-title">S</div>
                                <ul className="list-unstyled contact-list">
                                  <li>
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="memberCheck13"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="memberCheck13"
                                      >
                                        Simon Velez
                                      </label>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="addgroupdescription-input"
                        className="form-label"
                      >
                        Description
                      </label>
                      <textarea
                        className="form-control"
                        id="addgroupdescription-input"
                        rows={3}
                        placeholder="Enter Description"
                        defaultValue={""}
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer border-top-dashed">
                  <button
                    type="button"
                    className="btn btn-link link-danger m-0"
                    data-bs-dismiss="modal"
                  >
                    <RiCloseLine /> Close
                  </button>
                  <button type="button" className="btn btn-primary m-0">
                    Create Groups
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* End add group Modal */}
          {/* Start Add pinned tab Modal */}
          <div
            className="modal fade pinnedtabModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="pinnedtabModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content modal-header-colored border-0">
                <div className="modal-header">
                  <h5
                    className="modal-title text-white fs-16"
                    id="pinnedtabModalLabel"
                  >
                    Bookmark
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-grow-1">
                      <div>
                        <h5 className="fs-16 mb-0">10 Pinned tabs</h5>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <div>
                        <button
                          type="button"
                          className="btn btn-sm btn-warning"
                        >
                          <i className="bx bx-plus align-middle" /> Pin
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="chat-bookmark-list mx-n4"
                    data-simplebar
                    style={{ maxHeight: "299px" }}
                  >
                    <ul className="list-unstyled chat-list">
                      <li>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 ms-1 me-3">
                            <img
                              src=" /images/pdf-file.png"
                              alt=""
                              className="avatar-xs"
                            />
                          </div>
                          <div className="flex-grow-1 overflow-hidden">
                            <h5 className="fs-14 text-truncate mb-1">
                              <a href=" " className="p-0">
                                design-phase-1-approved.pdf
                              </a>
                            </h5>
                            <p className="text-muted fs-13 mb-0">12.5 MB</p>
                          </div>
                          <div className="flex-shrink-0 ms-3">
                            <div className="dropdown">
                              <a
                                className="dropdown-toggle fs-18 text-muted px-1"
                                href=" "
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-horizontal-rounded" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item d-flex align-items-center justify-content-between"
                                  href=" "
                                >
                                  Open
                                  <i className="bx bx-folder-open ms-2 text-muted" />
                                </a>
                                <a
                                  className="dropdown-item d-flex align-items-center justify-content-between"
                                  href=" "
                                >
                                  Edit{" "}
                                  <i className="bx bx-pencil ms-2 text-muted" />
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  className="dropdown-item d-flex align-items-center justify-content-between"
                                  href=" "
                                >
                                  Delete{" "}
                                  <i className="bx bx-trash ms-2 text-muted" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 ms-1 me-3">
                            <img
                              src=" /images/link-file.png"
                              alt=""
                              className="avatar-xs"
                            />
                          </div>
                          <div className="flex-grow-1 overflow-hidden">
                            <h5 className="fs-14 text-truncate mb-1">
                              <a href=" " className="p-0">
                                Bg Pattern
                              </a>
                            </h5>
                            <p className="text-muted fs-13 mb-0">
                              https://bgpattern.com/
                            </p>
                          </div>
                          <div className="flex-shrink-0 ms-3">
                            <div className="dropdown">
                              <a
                                className="dropdown-toggle fs-18 text-muted px-1"
                                href=" "
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-horizontal-rounded" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item d-flex align-items-center justify-content-between"
                                  href=" "
                                >
                                  Open
                                  <i className="bx bx-folder-open ms-2 text-muted" />
                                </a>
                                <a
                                  className="dropdown-item d-flex align-items-center justify-content-between"
                                  href=" "
                                >
                                  Edit{" "}
                                  <i className="bx bx-pencil ms-2 text-muted" />
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  className="dropdown-item d-flex align-items-center justify-content-between"
                                  href=" "
                                >
                                  Delete{" "}
                                  <i className="bx bx-trash ms-2 text-muted" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 ms-1 me-3">
                            <img
                              src=" /images/image-file.png"
                              alt=""
                              className="avatar-xs"
                            />
                          </div>
                          <div className="flex-grow-1 overflow-hidden">
                            <h5 className="fs-14 text-truncate mb-1">
                              <a href=" " className="p-0">
                                Image-001.jpg
                              </a>
                            </h5>
                            <p className="text-muted fs-13 mb-0">4.2 MB</p>
                          </div>
                          <div className="flex-shrink-0 ms-3">
                            <div className="dropdown">
                              <a
                                className="dropdown-toggle fs-18 text-muted px-1"
                                href=" "
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-horizontal-rounded" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item d-flex align-items-center justify-content-between"
                                  href=" "
                                >
                                  Open
                                  <i className="bx bx-folder-open ms-2 text-muted" />
                                </a>
                                <a
                                  className="dropdown-item d-flex align-items-center justify-content-between"
                                  href=" "
                                >
                                  Edit{" "}
                                  <i className="bx bx-pencil ms-2 text-muted" />
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  className="dropdown-item d-flex align-items-center justify-content-between"
                                  href=" "
                                >
                                  Delete{" "}
                                  <i className="bx bx-trash ms-2 text-muted" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 ms-1 me-3">
                            <img
                              src=" /images/link-file.png"
                              alt=""
                              className="avatar-xs"
                            />
                          </div>
                          <div className="flex-grow-1 overflow-hidden">
                            <h5 className="fs-14 text-truncate mb-1">
                              <a href=" " className="p-0">
                                Images
                              </a>
                            </h5>
                            <p className="text-muted fs-13 mb-0">
                              https://images123.com/
                            </p>
                          </div>
                          <div className="flex-shrink-0 ms-3">
                            <div className="dropdown">
                              <a
                                className="dropdown-toggle fs-18 text-muted px-1"
                                href=" "
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-horizontal-rounded" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item d-flex align-items-center justify-content-between"
                                  href=" "
                                >
                                  Open
                                  <i className="bx bx-folder-open ms-2 text-muted" />
                                </a>
                                <a
                                  className="dropdown-item d-flex align-items-center justify-content-between"
                                  href=" "
                                >
                                  Edit{" "}
                                  <i className="bx bx-pencil ms-2 text-muted" />
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  className="dropdown-item d-flex align-items-center justify-content-between"
                                  href=" "
                                >
                                  Delete{" "}
                                  <i className="bx bx-trash ms-2 text-muted" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 ms-1 me-3">
                            <img
                              src=" /images/link-file.png"
                              alt=""
                              className="avatar-xs"
                            />
                          </div>
                          <div className="flex-grow-1 overflow-hidden">
                            <h5 className="fs-14 text-truncate mb-1">
                              <a href=" " className="p-0">
                                Bg Gradient
                              </a>
                            </h5>
                            <p className="text-muted fs-13 mb-0">
                              https://bggradient.com/
                            </p>
                          </div>
                          <div className="flex-shrink-0 ms-3">
                            <div className="dropdown">
                              <a
                                className="dropdown-toggle fs-18 text-muted px-1"
                                href=" "
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-horizontal-rounded" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item d-flex align-items-center justify-content-between"
                                  href=" "
                                >
                                  Open
                                  <i className="bx bx-folder-open ms-2 text-muted" />
                                </a>
                                <a
                                  className="dropdown-item d-flex align-items-center justify-content-between"
                                  href=" "
                                >
                                  Edit{" "}
                                  <i className="bx bx-pencil ms-2 text-muted" />
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  className="dropdown-item d-flex align-items-center justify-content-between"
                                  href=" "
                                >
                                  Delete{" "}
                                  <i className="bx bx-trash ms-2 text-muted" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 ms-1 me-3">
                            <img
                              src=" /images/image-file.png"
                              alt=""
                              className="avatar-xs"
                            />
                          </div>
                          <div className="flex-grow-1 overflow-hidden">
                            <h5 className="fs-14 text-truncate mb-1">
                              <a href=" " className="p-0">
                                Image-012.jpg
                              </a>
                            </h5>
                            <p className="text-muted fs-13 mb-0">3.1 MB</p>
                          </div>
                          <div className="flex-shrink-0 ms-3">
                            <div className="dropdown">
                              <a
                                className="dropdown-toggle fs-18 text-muted px-1"
                                href=" "
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-horizontal-rounded" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item d-flex align-items-center justify-content-between"
                                  href=" "
                                >
                                  Open
                                  <i className="bx bx-folder-open ms-2 text-muted" />
                                </a>
                                <a
                                  className="dropdown-item d-flex align-items-center justify-content-between"
                                  href=" "
                                >
                                  Edit{" "}
                                  <i className="bx bx-pencil ms-2 text-muted" />
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  className="dropdown-item d-flex align-items-center justify-content-between"
                                  href=" "
                                >
                                  Delete{" "}
                                  <i className="bx bx-trash ms-2 text-muted" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 ms-1 me-3">
                            <img
                              src=" /images/zip-file.png"
                              alt=""
                              className="avatar-xs"
                            />
                          </div>
                          <div className="flex-grow-1 overflow-hidden">
                            <h5 className="fs-14 text-truncate mb-1">
                              <a href=" " className="p-0">
                                analytics dashboard.zip
                              </a>
                            </h5>
                            <p className="text-muted fs-13 mb-0">6.7 MB</p>
                          </div>
                          <div className="flex-shrink-0 ms-3">
                            <div className="dropdown">
                              <a
                                className="dropdown-toggle fs-18 text-muted px-1"
                                href=" "
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-horizontal-rounded" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item d-flex align-items-center justify-content-between"
                                  href=" "
                                >
                                  Open
                                  <i className="bx bx-folder-open ms-2 text-muted" />
                                </a>
                                <a
                                  className="dropdown-item d-flex align-items-center justify-content-between"
                                  href=" "
                                >
                                  Edit{" "}
                                  <i className="bx bx-pencil ms-2 text-muted" />
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  className="dropdown-item d-flex align-items-center justify-content-between"
                                  href=" "
                                >
                                  Delete{" "}
                                  <i className="bx bx-trash ms-2 text-muted" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="text-center">
                      <a href="#pills-bookmark" className="link-success">
                        View All
                        <i className="ri-arrow-right-line ms-2 align-bottom" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Add pinned tab Modal */}
          {/* forward Modal */}
          <div
            className="modal fade forwardModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="forwardModalModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content modal-header-colored border-0">
                <div className="modal-header">
                  <h5 className="modal-title text-white fs-16">
                    Share this Message
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body p-4">
                  <div>
                    <div className="replymessage-block mb-2">
                      <h5 className="conversation-name">Jean Berwick</h5>
                      <p className="mb-0">
                        Yeah everything is fine. Our next meeting tomorrow at
                        10.00 AM
                      </p>
                    </div>
                    <textarea
                      className="form-control"
                      placeholder="Type your message..."
                      rows={2}
                      defaultValue={""}
                    />
                  </div>
                  <hr className="my-4" />
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control bg-light border-0 pe-0"
                      placeholder="Search here.."
                    />
                    <button
                      className="btn btn-light"
                      type="button"
                      id="forwardSearchbtn-addon"
                    >
                      <i className="bx bx-search align-middle" />
                    </button>
                  </div>
                  <div className="d-flex align-items-center px-1">
                    <div className="flex-grow-1">
                      <h4 className="mb-0 fs-11 text-muted text-uppercase">
                        Contacts
                      </h4>
                    </div>
                    <div className="flex-shrink-0">
                      <button type="button" className="btn btn-sm btn-primary">
                        Share All
                      </button>
                    </div>
                  </div>
                  <div
                    data-simplebar
                    style={{ maxHeight: "150px" }}
                    className="mx-n4 px-1"
                  >
                    <div>
                      <div className="contact-list-title">A</div>
                      <ul className="list-unstyled contact-list">
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                              <h5 className="fs-14 m-0">Albert Rodarte</h5>
                            </div>
                            <div className="flex-shrink-0">
                              <button
                                type="button"
                                className="btn btn-sm btn-primary"
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                              <h5 className="fs-14 m-0">Allison Etter</h5>
                            </div>
                            <div className="flex-shrink-0">
                              <button
                                type="button"
                                className="btn btn-sm btn-primary"
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* end contact list A */}
                    <div className="mt-3">
                      <div className="contact-list-title">C</div>
                      <ul className="list-unstyled contact-list">
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                              <h5 className="fs-14 m-0">Craig Smiley</h5>
                            </div>
                            <div className="flex-shrink-0">
                              <button
                                type="button"
                                className="btn btn-sm btn-primary"
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* end contact list C */}
                    <div className="mt-3">
                      <div className="contact-list-title">D</div>
                      <ul className="list-unstyled contact-list">
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                              <h5 className="fs-14 m-0">Daniel Clay</h5>
                            </div>
                            <div className="flex-shrink-0">
                              <button
                                type="button"
                                className="btn btn-sm btn-primary"
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                              <h5 className="fs-14 m-0">Doris Brown</h5>
                            </div>
                            <div className="flex-shrink-0">
                              <button
                                type="button"
                                className="btn btn-sm btn-primary"
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* end contact list D */}
                    <div className="mt-3">
                      <div className="contact-list-title">I</div>
                      <ul className="list-unstyled contact-list">
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                              <h5 className="fs-14 m-0">Iris Wells</h5>
                            </div>
                            <div className="flex-shrink-0">
                              <button
                                type="button"
                                className="btn btn-sm btn-primary"
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* end contact list I */}
                    <div className="mt-3">
                      <div className="contact-list-title">J</div>
                      <ul className="list-unstyled contact-list">
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                              <h5 className="fs-14 m-0">Juan Flakes</h5>
                            </div>
                            <div className="flex-shrink-0">
                              <button
                                type="button"
                                className="btn btn-sm btn-primary"
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                              <h5 className="fs-14 m-0">John Hall</h5>
                            </div>
                            <div className="flex-shrink-0">
                              <button
                                type="button"
                                className="btn btn-sm btn-primary"
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                              <h5 className="fs-14 m-0">Joy Southern</h5>
                            </div>
                            <div className="flex-shrink-0">
                              <button
                                type="button"
                                className="btn btn-sm btn-primary"
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* end contact list J */}
                    <div className="mt-3">
                      <div className="contact-list-title">M</div>
                      <ul className="list-unstyled contact-list">
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                              <h5 className="fs-14 m-0">Mary Farmer</h5>
                            </div>
                            <div className="flex-shrink-0">
                              <button
                                type="button"
                                className="btn btn-sm btn-primary"
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                              <h5 className="fs-14 m-0">Mark Messer</h5>
                            </div>
                            <div className="flex-shrink-0">
                              <button
                                type="button"
                                className="btn btn-sm btn-primary"
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                              <h5 className="fs-14 m-0">Michael Hinton</h5>
                            </div>
                            <div className="flex-shrink-0">
                              <button
                                type="button"
                                className="btn btn-sm btn-primary"
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* end contact list M */}
                    <div className="mt-3">
                      <div className="contact-list-title">O</div>
                      <ul className="list-unstyled contact-list">
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                              <h5 className="fs-14 m-0">Ossie Wilson</h5>
                            </div>
                            <div className="flex-shrink-0">
                              <button
                                type="button"
                                className="btn btn-sm btn-primary"
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* end contact list O */}
                    <div className="mt-3">
                      <div className="contact-list-title">P</div>
                      <ul className="list-unstyled contact-list">
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                              <h5 className="fs-14 m-0">Phillis Griffin</h5>
                            </div>
                            <div className="flex-shrink-0">
                              <button
                                type="button"
                                className="btn btn-sm btn-primary"
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                              <h5 className="fs-14 m-0">Paul Haynes</h5>
                            </div>
                            <div className="flex-shrink-0">
                              <button
                                type="button"
                                className="btn btn-sm btn-primary"
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* end contact list P */}
                    <div className="mt-3">
                      <div className="contact-list-title">R</div>
                      <ul className="list-unstyled contact-list">
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                              <h5 className="fs-14 m-0">Rocky Jackson</h5>
                            </div>
                            <div className="flex-shrink-0">
                              <button
                                type="button"
                                className="btn btn-sm btn-primary"
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* end contact list R */}
                    <div className="mt-3">
                      <div className="contact-list-title">S</div>
                      <ul className="list-unstyled contact-list mb-0">
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                              <h5 className="fs-14 m-0">Sara Muller</h5>
                            </div>
                            <div className="flex-shrink-0">
                              <button
                                type="button"
                                className="btn btn-sm btn-primary"
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                              <h5 className="fs-14 m-0">Simon Velez</h5>
                            </div>
                            <div className="flex-shrink-0">
                              <button
                                type="button"
                                className="btn btn-sm btn-primary"
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                              <h5 className="fs-14 m-0">Steve Walker</h5>
                            </div>
                            <div className="flex-shrink-0">
                              <button
                                type="button"
                                className="btn btn-sm btn-primary"
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* end contact list S */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* forward Modal */}
          {/* contactModal */}
          <div
            className="modal fade contactModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="pinnedtabModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content modal-header-colored border-0">
                <div className="modal-header">
                  <h5
                    className="modal-title text-white fs-16"
                    id="pinnedtabModalLabel"
                  >
                    Contacts
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body p-4">
                  <div className="input-group mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search here.."
                      id="searchContactModal"
                      //   onKeyup="searchContactOnModal()"
                      aria-label="Example text with button"
                      aria-describedby="contactSearchbtn-addon"
                    />
                    <button
                      className="btn btn-danger"
                      type="button"
                      id="contactSearchbtn-addon"
                    >
                      <i className="bx bx-search align-middle" />
                    </button>
                  </div>
                  <div className="d-flex align-items-center px-1">
                    <div className="flex-grow-1">
                      <h4 className="fs-12 text-muted text-uppercase">
                        Contacts
                      </h4>
                    </div>
                  </div>
                  <div
                    className="contact-modal-list px-1"
                    data-simplebar
                    style={{ maxHeight: "258px" }}
                  >
                    <div>
                      <div className="contact-list-title">A</div>
                      <ul className="list-unstyled contact-list mb-0">
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 avatar-sm">
                              <div className="avatar-title bg-info rounded-circle">
                                A
                              </div>
                            </div>
                            <h5 className="fs-14 mb-0 ms-2">Albert Rodarte</h5>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <img
                                src=" /images/users/avatar-10.jpg"
                                alt=""
                                className="avatar-sm rounded-circle"
                              />
                            </div>
                            <h5 className="fs-14 mb-0 ms-2">Allison Etter</h5>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* end contact list A */}
                    <div className="mt-2">
                      <div className="contact-list-title">C</div>
                      <ul className="list-unstyled contact-list mb-0">
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 avatar-sm">
                              <div className="avatar-title bg-danger rounded-circle">
                                C
                              </div>
                            </div>
                            <h5 className="fs-14 mb-0 ms-2">Craig Smiley</h5>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* end contact list C */}
                    <div className="mt-2">
                      <div className="contact-list-title">D</div>
                      <ul className="list-unstyled contact-list mb-0">
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <img
                                src=" /images/users/avatar-4.jpg"
                                alt=""
                                className="avatar-sm rounded-circle"
                              />
                            </div>
                            <h5 className="fs-14 mb-0 ms-2">Daniel Clay</h5>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <img
                                src=" /images/users/avatar-8.jpg"
                                alt=""
                                className="avatar-sm rounded-circle"
                              />
                            </div>
                            <h5 className="fs-14 mb-0 ms-2">Doris Brown</h5>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* end contact list D */}
                    <div className="mt-2">
                      <div className="contact-list-title">I</div>
                      <ul className="list-unstyled contact-list mb-0">
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <img
                                src=" /images/users/avatar-12.jpg"
                                alt=""
                                className="avatar-sm rounded-circle"
                              />
                            </div>
                            <h5 className="fs-14 mb-0 ms-2">Iris Wells</h5>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* end contact list I */}
                    <div className="mt-2">
                      <div className="contact-list-title">J</div>
                      <ul className="list-unstyled contact-list mb-0">
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 avatar-sm">
                              <div className="avatar-title bg-success rounded-circle">
                                J
                              </div>
                            </div>
                            <h5 className="fs-14 mb-0 ms-2">Juan Flakes</h5>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 avatar-sm">
                              <div className="avatar-title bg-info rounded-circle">
                                J
                              </div>
                            </div>
                            <h5 className="fs-14 mb-0 ms-2">John Hall</h5>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <img
                                src=" /images/users/avatar-3.jpg"
                                alt=""
                                className="avatar-sm rounded-circle"
                              />
                            </div>
                            <h5 className="fs-14 mb-0 ms-2">Joy Southern</h5>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* end contact list J */}
                    <div className="mt-2">
                      <div className="contact-list-title">M</div>
                      <ul className="list-unstyled contact-list mb-0">
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 avatar-sm">
                              <div className="avatar-title bg-primary rounded-circle">
                                M
                              </div>
                            </div>
                            <h5 className="fs-14 mb-0 ms-2">Mary Farmer</h5>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 avatar-sm">
                              <div className="avatar-title bg-dark rounded-circle">
                                M
                              </div>
                            </div>
                            <h5 className="fs-14 mb-0 ms-2">Mark Messer</h5>
                          </div>
                          <div />
                        </li>
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 avatar-sm">
                              <div className="avatar-title bg-warning rounded-circle">
                                M
                              </div>
                            </div>
                            <h5 className="fs-14 mb-0 ms-2">Michael Hinton</h5>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* end contact list M */}
                    <div className="mt-2">
                      <div className="contact-list-title">O</div>
                      <ul className="list-unstyled contact-list">
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <img
                                src=" /images/users/avatar-6.jpg"
                                alt=""
                                className="avatar-sm rounded-circle"
                              />
                            </div>
                            <h5 className="fs-14 mb-0 ms-2">Ossie Wilson</h5>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* end contact list O */}
                    <div className="mt-2">
                      <div className="contact-list-title mb-0">P</div>
                      <ul className="list-unstyled contact-list">
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <img
                                src=" /images/users/avatar-10.jpg"
                                alt=""
                                className="avatar-sm rounded-circle"
                              />
                            </div>
                            <h5 className="fs-14 mb-0 ms-2">Phillis Griffin</h5>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 avatar-sm">
                              <div className="avatar-title bg-info rounded-circle">
                                P
                              </div>
                            </div>
                            <h5 className="fs-14 mb-0 ms-2">Paul Haynes</h5>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* end contact list P */}
                    <div className="mt-2">
                      <div className="contact-list-title mb-0">R</div>
                      <ul className="list-unstyled contact-list">
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 avatar-sm">
                              <div className="avatar-title bg-success rounded-circle">
                                R
                              </div>
                            </div>
                            <h5 className="fs-14 mb-0 ms-2">Rocky Jackson</h5>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* end contact list R */}
                    <div className="mt-2">
                      <div className="contact-list-title">S</div>
                      <ul className="list-unstyled contact-list mb-0">
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <img
                                src=" /images/users/avatar-11.jpg"
                                alt=""
                                className="avatar-sm rounded-circle"
                              />
                            </div>
                            <h5 className="fs-14 mb-0 ms-2">Sara Muller</h5>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 avatar-sm">
                              <div className="avatar-title bg-warning rounded-circle">
                                S
                              </div>
                            </div>
                            <h5 className="fs-14 mb-0 ms-2">Simon Velez</h5>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 avatar-sm">
                              <div className="avatar-title bg-danger rounded-circle">
                                S
                              </div>
                            </div>
                            <h5 className="fs-14 mb-0 ms-2">Steve Walker</h5>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <a href=" " className="btn btn-link" data-bs-dismiss="modal">
                    <RiCloseFill /> Cancel
                  </a>
                  <button type="button" className="btn btn-primary">
                    <i className="bx bxs-send align-middle" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div id="style-switcher">
            <ul className="list-unstyled mb-0 vstack gap-2">
              <li>
                <a
                  data-bs-toggle="offcanvas"
                  href="#theme-settings-offcanvas"
                  className="settings bg-soft-success text-success rounded"
                >
                  {/* <i className="mdi mdi-cog mdi-spin" /> */}
                  <RiSettings4Line />
                </a>
              </li>
              <li>
                <a
                  href=" "
                  className="settings bg-soft-danger text-danger rounded"
                >
                  <RiShoppingBag3Line />
                </a>
              </li>
            </ul>
          </div>
          {/* end switcher*/}
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="theme-settings-offcanvas"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header bg-soft-info">
              <h5
                className="offcanvas-title"
                id="theme-settings-offcanvasLabel"
              >
                Theme Customizer
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>

            <div className="offcanvas-body customizer-palettes">
              <div className="row g-3">
                <div className="col-lg-12">
                  <div className="mt-3">
                    <h6 className="text-muted text-uppercase fs-13 mb-0">
                      Select Custome Colors
                    </h6>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-check card-radio">
                    <input
                      id="customizer-color01"
                      name="bgcolor-radio"
                      type="radio"
                      defaultValue="color01"
                      className="form-check-input theme-color"
                    />
                    <label
                      className="form-check-label customizer-color01 p-0 avatar-md w-100"
                      htmlFor="customizer-color01"
                    />
                  </div>
                  <h5 className="fs-13 text-center mt-2">Color-01</h5>
                </div>
                <div className="col-6">
                  <div className="form-check card-radio">
                    <input
                      id="customizer-color02"
                      name="bgcolor-radio"
                      type="radio"
                      defaultValue="color02"
                      className="form-check-input theme-color"
                      defaultChecked
                    />
                    <label
                      className="form-check-label customizer-color02 p-0 avatar-md w-100"
                      htmlFor="customizer-color02"
                    />
                  </div>
                  <h5 className="fs-13 text-center mt-2">Color-02</h5>
                </div>
                <div className="col-6">
                  <div className="form-check card-radio">
                    <input
                      id="customizer-color03"
                      name="bgcolor-radio"
                      type="radio"
                      defaultValue="color03"
                      className="form-check-input theme-color"
                    />
                    <label
                      className="form-check-label customizer-color03 p-0 avatar-md w-100"
                      htmlFor="customizer-color03"
                    />
                  </div>
                  <h5 className="fs-13 text-center mt-2">Color-03</h5>
                </div>
                {/* end col */}
                <div className="col-6">
                  <div className="form-check card-radio">
                    <input
                      id="customizer-color04"
                      name="bgcolor-radio"
                      type="radio"
                      defaultValue="color04"
                      className="form-check-input theme-color"
                    />
                    <label
                      className="form-check-label customizer-color04 p-0 avatar-md w-100"
                      htmlFor="customizer-color04"
                    />
                  </div>
                  <h5 className="fs-13 text-center mt-2">Color-04</h5>
                </div>
                {/* end col */}
                <div className="col-6">
                  <div className="form-check card-radio">
                    <input
                      id="customizer-color05"
                      name="bgcolor-radio"
                      type="radio"
                      defaultValue="color05"
                      className="form-check-input theme-color"
                    />
                    <label
                      className="form-check-label customizer-color05 p-0 avatar-md w-100"
                      htmlFor="customizer-color05"
                    />
                  </div>
                  <h5 className="fs-13 text-center mt-2">Color-05</h5>
                </div>
                {/* end col */}
                <div className="col-6">
                  <div className="form-check card-radio">
                    <input
                      id="customizer-color06"
                      name="bgcolor-radio"
                      type="radio"
                      defaultValue="color06"
                      className="form-check-input theme-color"
                    />
                    <label
                      className="form-check-label customizer-color06 p-0 avatar-md w-100"
                      htmlFor="customizer-color06"
                    />
                  </div>
                  <h5 className="fs-13 text-center mt-2">Color-06</h5>
                </div>
                {/* end col */}
                <div className="col-6">
                  <div className="form-check card-radio">
                    <input
                      id="customizer-color07"
                      name="bgcolor-radio"
                      type="radio"
                      defaultValue="color07"
                      className="form-check-input theme-color"
                    />
                    <label
                      className="form-check-label customizer-color07 p-0 avatar-md w-100"
                      htmlFor="customizer-color07"
                    />
                  </div>
                  <h5 className="fs-13 text-center mt-2">Color-07</h5>
                </div>
                {/* end col */}
                <div className="col-6">
                  <div className="form-check card-radio">
                    <input
                      id="customizer-color08"
                      name="bgcolor-radio"
                      type="radio"
                      defaultValue="color08"
                      className="form-check-input theme-color"
                    />
                    <label
                      className="form-check-label customizer-color08 p-0 avatar-md w-100"
                      htmlFor="customizer-color08"
                    />
                  </div>
                  <h5 className="fs-13 text-center mt-2">Color-08</h5>
                </div>
                {/* end col */}
              </div>
              {/*end row*/}
              <div className="row mt-4">
                <div className="col-lg-12">
                  <div className="d-flex mb-3">
                    <h6 className="flex-grow-1 text-muted text-uppercase fs-13 mb-0">
                      Select Custome Colors to Picker
                    </h6>
                  </div>
                </div>
                {/*end col*/}
                <div className="col-lg-6">
                  <div className="custom-colors-picker">
                    <div className="colorpicker-primary" />
                  </div>
                  <h5 className="fs-13 text-center mt-2">Primary</h5>
                </div>
                {/*end col*/}
                <div className="col-lg-6">
                  <div className="custom-colors-picker">
                    <div className="colorpicker-secondary" />
                  </div>
                  <h5 className="fs-13 text-center mt-2">Secondary</h5>
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
