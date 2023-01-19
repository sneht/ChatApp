/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, createContext, useContext } from "react";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import Modal from "react-bootstrap/Modal";
import SideBar from "../../components/SideBar/index";
import MessagePane from "../../components/MessagePane";
import { data } from "../../helper";
import { getUsersList, groupList } from "../../components/auth.request";
import CreateGroupModal from "../../components/CreateGroupModal";
import ProfilePane from "../../components/ProfilePane";
import SettingsPane from "../../components/SettingsPane";
import ContctPane from "../../components/ContactPane";
import { GroupDetails } from "../../App";
export const GroupList = createContext();

const Home = () => {
  const name = useContext(GroupDetails);

  const [text, setText] = useState();
  const [textError, setTextError] = useState("");

  let loginUser = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    getGroupList();
  }, []);

  const showHandle = () => {
    name.setGroupName(name.currentGroupDetails.groupName);
    name.setCheckedUser(
      name.currentGroupDetails.groupUser.map((item, index) => item.userId)
    );
    name.setCloseModal(true);
  };
  const closeHandle = () => {
    name.setCloseModal(false);
    name.setGroupName("");
    name.setCheckedUser([]);
    name.setGroupImage("");
  };
  const sendButton = (e) => {
    e.preventDefault();
    let msgIsValid = true;

    if (text) {
      setText("");
    } else if (!text) {
      setTextError("Please enter Message");
      msgIsValid = false;
    }
    return msgIsValid;
  };
  const getGroupList = async () => {
    Promise.all([groupList(data), getUsersList(data)])
      .then((response) => {
        name.setResponseMessage("");
        name.setUserLoader(false);
        if (response[0].success) {
          name.setGroup(response[0].data.list);
          if (response[0].data.list.length < 1) {
            name.setGroupCount("No Group Found");
          } else {
            name.setGroupCount("");
          }
        } else {
          console.log(response);
        }
        if (response[1].success) {
          name.setMessage("");
          name.setUsers(
            response[1].data.list.filter((e) => e.email !== loginUser.userEmail)
          );
          if (!name.users) {
            name.setUserCount("No User Found");
          } else {
            name.setUserCount("");
          }
        } else {
          console.log(response);
        }
      })
      .catch((err) => {
        name.setResponseMessage("Somthing Went Wrong");
        name.setUserLoader(false);
      });
  };
  return (
    <div>
      <div className="layout-wrapper d-lg-flex">
        <div className="side-menu flex-lg-column">
          <SideBar />
        </div>
        <div className="chat-leftsidebar">
          <div className="tab-content">
            <ProfilePane />
            <MessagePane />
            <ContctPane />
            <SettingsPane />
          </div>
        </div>

        <div className="user-chat w-100 overflow-hidden">
          {name.currentGroupDetails ? (
            <div className="chat-content d-lg-flex">
              <div className="w-100 overflow-hidden position-relative">
                <div id="users-chat" className="position-relative">
                  <div className="py-3 user-chat-topbar">
                    <div className="row align-items-center">
                      <div className="col-sm-4 col-8">
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1 overflow-hidden">
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
                                <img
                                  src={`${name.groupImage
                                      ? name.groupImage
                                      : name.currentGroupDetails.userImg
                                        ? name.currentGroupDetails.userImg
                                        : name.currentGroupDetails.groupImg
                                    }`}
                                  className="rounded-circle avatar-sm"
                                  alt=""
                                />
                                <span
                                  className={
                                    name.currentGroupDetails.userStatus ===
                                      "active"
                                      ? "user-status-active"
                                      : name.currentGroupDetails.userStatus ===
                                        "away"
                                        ? "user-status-away"
                                        : name.currentGroupDetails.userStatus ===
                                          "donotdisturb"
                                          ? "user-status-doNotDisturb"
                                          : ""
                                  }
                                />
                              </div>
                              <div className="flex-grow-1 overflow-hidden">
                                <h6 className="text-truncate mb-0 fs-18">
                                  <Link
                                    to=""
                                    className="user-profile-show text-reset"
                                  >
                                    {name.groupName
                                      ? name.groupName
                                      : name.currentGroupDetails.username
                                        ? name.currentGroupDetails.username
                                        : name.currentGroupDetails.groupName}
                                  </Link>
                                </h6>
                                {name.currentGroupDetails.groupName ? (
                                  ""
                                ) : (
                                  <p className="text-truncate text-muted mb-0">
                                    <small>
                                      {name.currentGroupDetails.userStatus}
                                    </small>
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-8 col-4">
                        <ul className="list-inline user-chat-nav text-end mb-0">
                          {name.currentGroupDetails.username ? (
                            ""
                          ) : (
                            <li className="list-inline-item">
                              <div className="dropdown">
                                <button
                                  className="btn nav-btn"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="bx bx-dots-vertical-rounded"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <button
                                    className="dropdown-item d-flex justify-content-between align-items-center"
                                    onClick={() => showHandle()}
                                  >
                                    Edit
                                    <i className="bx bx-archive text-muted"></i>
                                  </button>
                                </div>
                              </div>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="chat-conversation p-3 p-lg-4"
                    id="chat-conversation"
                    data-simplebar
                  >
                    <ul
                      className="list-unstyled chat-conversation-list"
                      id="users-conversation"
                    ></ul>
                  </div>
                </div>
                <div className="position-relative">
                  <div className="chat-input-section p-4">
                    <form onSubmit={sendButton}>
                      <div className="row g-0 align-items-center">
                        <div className="file_Upload" />
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
                            <div className="error">{textError}</div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="chat-input-links ms-2 gap-md-1">
                            <div className="links-list-item">
                              <button
                                type="submit"
                                className="btn btn-primary btn-lg chat-send waves-effect waves-light"
                              // onSubmit={() => sendButton()}
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
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="DefaultPage">
              <div>
                <Avatar
                  name={loginUser.userName[0]}
                  size="30"
                  textSizeRatio={1.75}
                  round="20px"
                />
              </div>
              <div>{`Welcome! ${name.userName ? name.userName : loginUser.userName
                }`}</div>
              <div className="d-flex">
                <div>
                  <img
                    src="/images/skype/landing_page_meet_now.png"
                    className="firstImg"
                    style={{ width: "96%" }}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="/images/skype/landing_page_whats_new.png"
                    style={{ width: "100%" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <GroupList.Provider
        value={{
          getGroupList,
        }}
      >
        <Modal show={name.closeModal} onHide={closeHandle} animation={false}>
          <CreateGroupModal />
        </Modal>
      </GroupList.Provider>
    </div>
  );
};

export default Home;
