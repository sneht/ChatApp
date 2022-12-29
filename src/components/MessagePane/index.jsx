import { React } from "react";

const MessagePane = () => {
  // const [users, setUsers] = useState("");
  // useEffect(() => {
  //   getUsers();
  // });

  // const getUsers = () => {

  // };
  return (
    <div
      className="tab-pane show active"
      id="pills-chat"
      role="tabpanel"
      aria-labelledby="pills-chat-tab"
    >
      {/* Start chats content */}
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
                //   onkeyup="searchUser()"
                placeholder="Search here..."
                aria-label="Example text with button addon"
                aria-describedby="searchbtn-addon"
                autoComplete="off"
              />
              <button
                className="btn btn-light p-0"
                type="button"
                id="searchbtn-addon"
              >
                <i className="bx bx-search align-middle" />
              </button>
            </div>
          </form>
        </div>
        {/* .p-4 */}
        <div className="chat-room-list" data-simplebar>
          {/* Start chat-message-list */}
          <h5 className="mb-3 px-4 mt-4 fs-11 text-muted text-uppercase">
            Favourites
          </h5>
          <div className="chat-message-list">
            <ul
              className="list-unstyled chat-list chat-user-list"
              id="favourite-users"
            >
              <li id="contact-id-1" data-name="favorite" className="active">
                <a href=" " className="unread-msg-user">
                  <div className="d-flex align-items-center">
                    <div className="chat-user-img online align-self-center me-2 ms-0">
                      <img
                        src="/images/users/avatar-2.jpg"
                        className="rounded-circle avatar-xs"
                        alt=""
                      />
                      <span className="user-status"></span>
                    </div>
                    <div className="overflow-hidden me-2">
                      <p className="text-truncate chat-username mb-0">
                        Victoria Lane
                      </p>
                      <p className="text-truncate text-muted fs-13 mb-0">
                        Hey, I'm going to meet a friend of
                      </p>
                    </div>
                    <div className="ms-auto">
                      <span className="badge badge-soft-danger rounded p-1 fs-10">
                        18
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li id="contact-id-2" data-name="favorite" className="">
                <a href=" ">
                  <div className="d-flex align-items-center">
                    <div className="chat-user-img online align-self-center me-2 ms-0">
                      <img
                        src="/images/users/avatar-7.jpg"
                        className="rounded-circle avatar-xs"
                        alt=""
                      />
                      <span className="user-status"></span>
                    </div>
                    <div className="overflow-hidden me-2">
                      <p className="text-truncate chat-username mb-0">
                        Etta McDaniel
                      </p>
                      <p className="text-truncate text-muted fs-13 mb-0">
                        Yeah everything is fine. Our next meeting tomorrow
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li id="contact-id-3" data-name="favorite" className="">
                <a href=" ">
                  <div className="d-flex align-items-center">
                    <div className="chat-user-img online align-self-center me-2 ms-0">
                      <div className="avatar-xs">
                        <span className="avatar-title rounded-circle bg-primary text-white">
                          <span className="username">JP</span>
                          <span className="user-status"></span>
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden me-2">
                      <p className="text-truncate chat-username mb-0">
                        James Pinard
                      </p>
                      <p className="text-truncate text-muted fs-13 mb-0">
                        Wow that's great!
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li id="contact-id-4" data-name="favorite" className="">
                <a href=" ">
                  <div className="d-flex align-items-center">
                    <div className="chat-user-img online align-self-center me-2 ms-0">
                      <img
                        src="/images/users/avatar-4.jpg"
                        className="rounded-circle avatar-xs"
                        alt=""
                      />
                      <span className="user-status"></span>
                    </div>
                    <div className="overflow-hidden me-2">
                      <p className="text-truncate chat-username mb-0">
                        Ronald Downey
                      </p>
                      <p className="text-truncate text-muted fs-13 mb-0">
                        Why I try the to get demo data following the instruction
                        from API Integration
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center px-4 mt-5 mb-2">
            <div className="flex-grow-1">
              <h4 className="mb-0 fs-11 text-muted text-uppercase">
                Direct Messages
              </h4>
            </div>
            <div className="flex-shrink-0">
              <div
                data-bs-toggle="tooltip"
                data-bs-trigger="hover"
                data-bs-placement="top"
                title="New Message"
              >
                {/* Button trigger modal */}
                <button
                  type="button"
                  className="btn btn-success btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target=".contactModal"
                >
                  <i className="bx bx-plus align-middle" />
                </button>
              </div>
            </div>
          </div>
          <div className="chat-message-list">
            <ul
              className="list-unstyled chat-list chat-user-list"
              id="usersList"
            />
          </div>
          <div className="d-flex align-items-center px-4 mt-5 mb-2">
            <div className="flex-grow-1">
              <h4 className="mb-0 fs-11 text-muted text-uppercase">Channels</h4>
            </div>
            <div className="flex-shrink-0">
              <div
                data-bs-toggle="tooltip"
                data-bs-trigger="hover"
                data-bs-placement="top"
                title="Create group"
              >
                {/* Button trigger modal */}
                <button
                  type="button"
                  className="btn btn-success btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#addgroup-exampleModal"
                >
                  <i className="bx bx-plus align-middle" />
                </button>
              </div>
            </div>
          </div>
          <div className="chat-message-list">
            <ul
              className="list-unstyled chat-list chat-user-list mb-3"
              id="channelList"
            />
          </div>
          {/* End chat-message-list */}
        </div>
      </div>
      {/* Start chats content */}
    </div>
  );
};

export default MessagePane;
