/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { searchUser } from "../auth.request";
import { data } from "../../helper";
import { getUsersList } from "../../components/auth.request";

const ContctPane = () => {
  const location = useLocation();

  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [userCount, setUserCount] = useState();

  // const [currentId, setCurrentId] = useState();
  let loginUser = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    getUser();
  }, []);

  const searchHandle = async (e) => {
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
  };

  const getUser = async () => {
    const response = await getUsersList(data);
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
  };

  // const active = (e) => {
  //   setCurrentId(e._id);
  // };
  return (
    <div
      className={`tab-pane ${location.search === "?contactList" ? "active" : ""}`}
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
          <div
            className="chat-room-list"
            style={{ marginLeft: "-24px" }}
            data-simplebar
          >
            <div className="chat-message-list">
              <ul
                className="list-unstyled chat-list chat-user-list"
                id="favourite-users"
              >
                {users?.map((item, index) => {
                  return (
                    <li
                      data-name="favorite"
                      // className={currentId === item._id ? "active" : ""}
                      // onClick={() => active(item)}
                      key={index}
                    >
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
                              Hey, I'm going to meet a friend of
                            </p>
                          </div>
                          <div className="error text-center">{userCount}</div>
                        </div>
                      </Link>
                    </li>
                  );
                })}

                <div className="error" style={{ textAlign: "center" }}>
                  {message}
                </div>
                {message ? (
                  <div>
                    <img
                      src="/images/No result Found.jpg"
                      alt=""
                      style={{
                        width: "13%",
                        marginLeft: "18%",
                        marginTop: "-11%",
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

export default ContctPane;
