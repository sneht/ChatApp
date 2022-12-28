import React from "react";
import ProfilePane from "../ProfilePane";
import ContctPane from "../ContactPane";
import BookMarkPane from "../BookMarkPane";
import SettingsPane from "../SettingsPane";
import MessagePane from "../MessagePane";

const Messages = () => {
  return (
    <div className="chat-leftsidebar">
      <div className="tab-content">
        <ProfilePane />
        <MessagePane />
        <ContctPane />
        {/* Start calls tab-pane */}
        <div
          className="tab-pane"
          id="pills-calls"
          role="tabpanel"
          aria-labelledby="pills-calls-tab"
        >
          {/* Start Contact content */}
          <div>
            <div className="px-4 pt-4">
              <div className="d-flex align-items-start">
                <div className="flex-grow-1">
                  <h4 className="mb-3">Calls</h4>
                </div>
              </div>
            </div>
            {/* end p-4 */}
            {/* Start contact lists */}
            <div className="chat-message-list chat-call-list" data-simplebar>
              <ul className="list-unstyled chat-list" id="callList" />
            </div>
            {/* end contact lists */}
          </div>
          {/* Start Contact content */}
        </div>
        {/* End calls tab-pane */}
        <BookMarkPane />
        <SettingsPane />
      </div>
    </div>
  );
};

export default Messages;
