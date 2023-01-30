/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { searchUser } from "../../service/auth.request";
import { contactUserBody } from "../../utils/helper";
import { getUsersList } from "../../service/auth.request";
import { GroupDetails } from "../../App";

const ContactPanel = () => {
  const location = useLocation();
  const details = useContext(GroupDetails);
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [userCount, setUserCount] = useState();
  const [totalUserList, setTotalUserList] = useState(10);
  const [loader, setLoader] = useState(false);
  let loginUser = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    getUser();
  }, []);

  const searchHandle = async (e) => {
    try {
      if (e.length > 3) {
        setMessage("");
        let body = {
          searchText: e,
        };
        const response = await searchUser(body);
        if (response.success) {
          let newList = response.data.filter(
            (e) => e.email !== loginUser.userEmail
          );
          setUsers(newList);
        } else {
          setUsers(response.data);
          setMessage(response.message);
        }
      } else {
        getUser();
      }
    } catch {
      console.error("Somthing went wrong");
    }
  };

  const getUser = async (usersLength) => {
    try {
      setLoader(true);
      const response = await getUsersList(
        contactUserBody({
          where: {
            isActive: true,
          },
          rowsPerPage: usersLength ? usersLength : totalUserList,
          sortBy: "createdAt",
          page: 1,
        })
      );
      if (response) {
        setLoader(false);
        if (response.success) {
          setMessage("");
          setUsers(
            response.data.list.filter((e) => e.email !== loginUser.userEmail)
          );
          if (!users) {
            setUserCount("No User Found");
          } else {
            setUserCount("");
          }
        } else {
          console.log(response);
        }
      } else {
        setLoader(false);
        console.error("Somthing went wrong");
      }
    } catch {
      console.error("Somthing went wrong");
    }
  };

  const viewMore = () => {
    setTotalUserList(totalUserList + 10);
    getUser(totalUserList + 10);
  };

  return (
    <div
      className={`tab-pane ${
        location.search === "?contactList" ? "active" : ""
      }`}
      id="pills-contacts"
      role="tabpanel"
      aria-labelledby="pills-contacts-tab"
    >
      <div>
        <div className="px-4 pt-4">
          <div className="d-flex align-items-start">
            <div className="flex-grow-1">
              <h4 className="mb-4">Contacts</h4>
            </div>
          </div>
          <form>
            <div className="input-group search-panel mb-4">
              <input
                type="text"
                className="form-control bg-light border-0"
                id="searchContact"
                placeholder="Search contacts..."
                aria-label="Search Contacts..."
                aria-describedby="button-searchcontactsaddon"
                onChange={(e) => searchHandle(e.target.value)}
              />
            </div>
          </form>
          <div className="chat-room-list user-list-contact" data-simplebar>
            <div className="chat-message-list">
              <ul
                className="list-unstyled chat-list chat-user-list"
                id="favourite-users"
              >
                {loader ? (
                  <div className="spinner-border-spinner" role="status">
                    <span className="sr-only"></span>
                  </div>
                ) : (
                  users?.map((item, index) => {
                    return (
                      <li data-name="favorite" key={index}>
                        <Link to="?contactList" className="unread-msg-user">
                          <div className="d-flex align-items-center">
                            <div className="chat-user-img online align-self-center me-2 ms-0">
                              <img
                                src={
                                  item.userImg.length > 0
                                    ? item.userImg
                                    : "/images/users/avatar-2.jpg"
                                }
                                className="rounded-circle avatar-xs"
                                alt=""
                              />
                              <span
                                className={
                                  item.userStatus === "active"
                                    ? "user-status"
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
                            {userCount ? (
                              <div className="error text-center">
                                {userCount}
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </Link>
                      </li>
                    );
                  })
                )}
                {details.users.length === totalUserList ? (
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
                {message ? <div className="imgerror">{message}</div> : ""}
                {message ? (
                  <div>
                    <img
                      src="/images/No result Found.jpg"
                      alt=""
                      className="noSearchFound"
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
            <div className="chat-message-list">
              <ul
                className="list-unstyled chat-list chat-user-list mb-3"
                id="channelList"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPanel;
