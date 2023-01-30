import { React, useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getUsersList, searchUser } from "../../service/auth.request";
import Avatar from "react-avatar";
import { GroupDetails } from "../../App";
import { userBody } from "../../utils/helper";

const MessagePanel = (props) => {
  const location = useLocation();
  const details = useContext(GroupDetails);
  const [searchedText, setSearchedText] = useState("");
  let loginUser = JSON.parse(localStorage.getItem("userData"));

  const searchHandle = async (e) => {
    setSearchedText(e);
    try {
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
    } catch {
      console.log("Somthing went wrong");
    }
  };

  const getUser = async () => {
    try {
      const response = await getUsersList(
        userBody({
          where: {
            isActive: true,
          },
          rowsPerPage: details.userListLength,
          page: 1,
        })
      );
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
    } catch {
      console.log("Somthing went wrong");
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

  const viewMore = (data) => {
    if (data === "groupList") {
      props.getGroupList(details.groupLength + 10, "group");
      details.setGroupLength(details.groupLength + 10);
    } else {
      props.getGroupList(details.userListLength + 10, "user");
      details.setUserListLength(details.userListLength + 10);
    }
  };

  return (
    <div
      className={`tab-pane show ${location.search === "" ? "active" : ""} `}
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
            {details.message ? (
              <>
                <div className="imgerror">{details.message}</div>
                <div>
                  <img
                    src="/images/No result Found.jpg"
                    alt=""
                    className="noSearchFound"
                  />
                </div>
              </>
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
                  <div className="spinner-border-spinner" role="status"></div>
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
                {details.userLoader ? (
                  ""
                ) : details.userCount ? (
                  <div className="error text-center">{details.userCount}</div>
                ) : details.users.length === details.userListLength ? (
                  <div>
                    <button
                      className="btn-success btn-sm viewMore"
                      onClick={() => viewMore()}
                    >
                      View More
                    </button>
                  </div>
                ) : (
                  ""
                )}
                {details.userLoader ? (
                  ""
                ) : details.message ? (
                  <>
                    <div className="imgerror">{details.message}</div>
                    <div>
                      <img
                        src="/images/No result Found.jpg"
                        alt=""
                        className="noSearchFound"
                      />
                    </div>
                  </>
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
                  {details.userLoader || details.responseMessage
                    ? ""
                    : "Groups"}
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
            {details.responseMessage ? (
              <div className="imgerror">{details.responseMessage}</div>
            ) : (
              ""
            )}
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
              {details.userLoader ? (
                ""
              ) : (
                <>
                  {details.groupCount ? (
                    <div className="error text-center">
                      {details.groupCount}
                    </div>
                  ) : details.group.length === details.groupLength ? (
                    <div>
                      <button
                        className="btn-success btn-sm viewMore"
                        onClick={() => viewMore("groupList")}
                      >
                        View More
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagePanel;
