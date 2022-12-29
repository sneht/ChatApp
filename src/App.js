import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Protect from "./components/Protect";
import PageNotFound from "./pages/PageNotFound";
import Logout from "./pages/Logout";
import Verify from "./pages/VerifyEmail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/verify" element={<Verify />} />
        <Route element={<Protect />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
