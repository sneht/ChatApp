import { React, useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getUsersList, searchUser } from "../auth.request";
import Avatar from "react-avatar";
import { GroupDetails } from "../../App";
import { data } from "../../helper";

const MessagePane = () => {
  const location = useLocation();

  const details = useContext(GroupDetails);

  const [searchedText, setSearchedText] = useState("");
  let loginUser = JSON.parse(localStorage.getItem("userData"));

  const searchHandle = async (e) => {
    setSearchedText(e);
    if (e.length > 3) {
      details.setMessage("");
      let body = {
        searchText: e,
      };
      const response = await searchUser(body);
      if (response.success) {
        let newList = response.data.filter(
          (e) => e.email !== loginUser.userEmail
        );
        details.setUsers(newList);
      } else {
        details.setUsers(response.data);
        details.setMessage(response.message);
      }
    } else {
      getUser();
    }
  };
  const getUser = async () => {
    const response = await getUsersList(data);
    if (response.success) {
      details.setMessage("");
      details.setUsers(
        response.data.list.filter((e) => e.email !== loginUser.userEmail)
      );
      if (!details.users) {
        details.setUserCount("No User Found");
      } else {
        details.setUserCount("");
      }
    } else {
      console.log(response);
    }
  };

  const active = (e) => {
    details.setCurrentId(e._id);
    details.setCurrentGroupDetails(e);
  };

  const showHandle = (e) => {
    details.setButtonCheck(e);
    details.setCloseModal(true);
  };
  return (
    <div
      className={`tab-pane show ${location.search === "?chat" ? "active" : location.search === '' ? "active" : ""} `}
      id="pills-chat"
      role="tabpanel"
      aria-labelledby="pills-chat-tab"
    >
      <div>
        <div className="px-4 pt-4">
          <div className="d-flex align-items-start">
            <div className="flex-grow-1">
              <h4 className="mb-4">
                Messages <span className="text-primary fs-13">(128)</span>
              </h4>
            </div>
          </div>
          <form>
            <div className="input-group search-panel mb-3">
              <input
                type="text"
                className="form-control bg-light border-0"
                id="searchChatUser"
                placeholder="Search here..."
                aria-label="Example text with button addon"
                aria-describedby="searchbtn-addon"
                onChange={(e) => searchHandle(e.target.value)}
              />
            </div>
          </form>
        </div>
        {searchedText.length > 3 ? (
          <ul
            className="list-unstyled chat-list chat-user-list"
            id="favourite-users"
          >
            {details.users?.map((item, index) => {
              return (
                <li
                  id="UserList"
                  data-name="favorite"
                  className={details.currentId === item._id ? "active" : ""}
                  onClick={() => active(item)}
                  key={index}
                >
                  <Link to="" className="unread-msg-user">
                    <div className="d-flex align-items-center">
                      <div className="chat-user-img online align-self-center me-2 ms-0">
                        {item.userImg.length > 1 ? (
                          <img
                            src={item.userImg}
                            className="rounded-circle avatar-xs"
                            alt=""
                          />
                        ) : (
                          <Avatar
                            name={item.username[0]}
                            size="30"
                            textSizeRatio={1.75}
                            round="20px"
                          />
                        )}
                        <span
                          className={
                            item.userStatus === "active"
                              ? "user-status-active"
                              : item.userStatus === "away"
                                ? "user-status-away"
                                : item.userStatus === "donotdisturb"
                                  ? "user-status-doNotDisturb"
                                  : ""
                          }
                        ></span>
                      </div>
                      <div className="overflow-hidden me-2">
                        <p className="text-truncate chat-username mb-0">
                          {item.username}
                        </p>
                        <p className="text-truncate text-muted fs-13 mb-0">
                          Hey there! I am Using ChatApp
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
            <div className="error" style={{ textAlign: "center" }}>
              {details.message}
            </div>
            {details.message ? (
              <div>
                <img
                  src="/images/No result Found.jpg"
                  alt=""
                  style={{ width: "13%", marginLeft: "18%", marginTop: "-11%" }}
                />
              </div>
            ) : (
              ""
            )}
          </ul>
        ) : (
          <div className="chat-room-list" data-simplebar>
            <div className="chat-message-list">
              <ul
                className="list-unstyled chat-list chat-user-list"
                id="favourite-users"
              >
                {details.userLoader ? (
                  <div
                    className="spinner-border"
                    role="status"
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "30%",
                    }}
                  ></div>
                ) : (
                  details.users?.map((item, index) => {
                    return (
                      <li
                        id="UserList"
                        data-name="favorite"
                        className={
                          details.currentId === item._id ? "active" : ""
                        }
                        onClick={() => active(item)}
                        key={index}
                      >
                        <Link to="" className="unread-msg-user">
                          <div className="d-flex align-items-center">
                            <div className="chat-user-img online align-self-center me-2 ms-0">
                              {item.userImg.length > 1 ? (
                                <img
                                  src={item.userImg}
                                  className="rounded-circle avatar-xs"
                                  alt=""
                                />
                              ) : (
                                <Avatar
                                  name={item.username[0]}
                                  size="30"
                                  textSizeRatio={1.75}
                                  round="20px"
                                />
                              )}
                              <span
                                className={
                                  item.userStatus === "active"
                                    ? "user-status-active"
                                    : item.userStatus === "away"
                                      ? "user-status-away"
                                      : item.userStatus === "donotdisturb"
                                        ? "user-status-doNotDisturb"
                                        : ""
                                }
                              ></span>
                            </div>
                            <div className="overflow-hidden me-2">
                              <p className="text-truncate chat-username mb-0">
                                {item.username}
                              </p>
                              <p className="text-truncate text-muted fs-13 mb-0">
                                Hey there! I am Using ChatApp
                              </p>
                            </div>
                          </div>
                        </Link>
                      </li>
                    );
                  })
                )}
                <div className="error text-center">{details.userCount}</div>
                <div className="error" style={{ textAlign: "center" }}>
                  {details.userLoader ? "" : details.message}
                </div>
                {details.userLoader ? (
                  ""
                ) : details.message ? (
                  <div>
                    <img
                      src="/images/No result Found.jpg"
                      alt=""
                      style={{
                        width: "13%",
                        marginLeft: "18%",
                        marginTop: "-9%",
                      }}
                    />
                  </div>
                ) : (
                  ""
                )}
              </ul>
            </div>
            <div className="chat-message-list">
              <ul
                className="list-unstyled chat-list chat-user-list"
                id="usersList"
              />
            </div>
            <div className="d-flex align-items-center px-4 mt-5 mb-2">
              <div className="flex-grow-1">
                <h4 className="mb-0 fs-11 text-muted text-uppercase">
                  {details.userLoader ||details.responseMessage? "" : "Groups"}
                </h4>
              </div>
              <div className="flex-shrink-0">
                <div>
                  {details.userLoader || details.responseMessage ? (
                    ""
                  ) : (
                    <button
                      type="button"
                      className="btn btn-success btn-sm"
                      value="createButton"
                      onClick={() => showHandle("Create Group")}
                    >
                      <i className="bx bx-plus align-middle" />
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="error" style={{ textAlign: "center" }}>{details.responseMessage}</div>

            <div className="chat-message-list">
              <ul
                className="list-unstyled chat-list chat-user-list mb-3"
                id="channelList"
              >
                {details.userLoader
                  ? ""
                  : details.group.map((item, index) => {
                    return (
                      <li
                        id="UserList"
                        data-name="favorite"
                        className={
                          details.currentId === item._id ? "active" : ""
                        }
                        onClick={() => active(item)}
                        key={index}
                      >
                        <Link to="" className="unread-msg-user">
                          <div className="d-flex align-items-center">
                            <div className="chat-user-img online align-self-center me-2 ms-0">
                              {item.groupImg.length > 1 ? (
                                <img
                                  src={item.groupImg}
                                  className="rounded-circle avatar-xs"
                                  alt=""
                                />
                              ) : (
                                <Avatar
                                  name={item.groupName[0]}
                                  size="30"
                                  textSizeRatio={1.75}
                                />
                              )}
                            </div>
                            <div className="overflow-hidden me-2">
                              <p className="text-truncate chat-username mb-0">
                                {item.groupName}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
              </ul>
              <div className="error text-center">
                {details.userLoader ? "" : details.groupCount}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagePane;
