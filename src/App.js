import "./App.css";
import { useState, createContext } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Protect from "./components/Protect";
import PageNotFound from "./pages/PageNotFound";
import Logout from "./pages/Logout";
import Verify from "./pages/VerifyEmail";
import ChangePassword from "./pages/ChangePassword";
import { ToastContainer } from "react-toastify";
export const GroupDetails = createContext();

function App() {
  const [users, setUsers] = useState([]);
  const [userImage, setUserImage] = useState();
  const [responseMessage, setResponseMessage] = useState();
  const [userName, setUserName] = useState();
  const [currentId, setCurrentId] = useState();
  const [message, setMessage] = useState("");
  const [group, setGroup] = useState([]);
  const [groupCount, setGroupCount] = useState();
  const [userLoader, setUserLoader] = useState(true);
  const [userCount, setUserCount] = useState();

  const [groupName, setGroupName] = useState();
  const [checkedUser, setCheckedUser] = useState([]);
  const [groupImage, setGroupImage] = useState();

  const [currentGroupDetails, setCurrentGroupDetails] = useState();
  const [closeModal, setCloseModal] = useState(false);
  const [buttonCheck, setButtonCheck] = useState("");

  return (
    <GroupDetails.Provider
      value={{
        userImage,
        setUserImage,
        userName,
        setUserName,
        responseMessage,
        setResponseMessage,
        userCount,
        setUserCount,
        users,
        setUsers,
        closeModal,
        setButtonCheck,
        setCloseModal,
        buttonCheck,
        currentGroupDetails,
        setCurrentGroupDetails,
        groupName,
        setGroupName,
        checkedUser,
        setCheckedUser,
        groupImage,
        setGroupImage,
        currentId,
        setCurrentId,
        message,
        setMessage,
        group,
        setGroup,
        userLoader,
        setUserLoader,
        groupCount,
        setGroupCount,
      }}
    >
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/verify" element={<Verify />} />
            <Route element={<Protect />}>
              <Route path="/" element={<Home />} />
              <Route path="/changepassword" element={<ChangePassword />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          limit={2}
        />
      </div>
    </GroupDetails.Provider>
  );
}

export default App;
