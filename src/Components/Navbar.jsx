import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Style/Navbar.css";

const Navbar = () => {
  const toastOptions = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
  };
  const navigate = useNavigate();

  const [userName, setUsername] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("chatMentor");
    if (token) {
      const token1 = JSON.parse(token);
      setUsername(token1.username);
    }
  }, []);
  return (
    <div className="nav-home">
        <ToastContainer/>
      <h1 className="nav-left-title">ChatMentor</h1>
      <div className="nav-right-option">
        <HomeIcon
          className="Home-icon"
          onClick={() => {
            navigate("/home");
          }}
        />
        <h3 className="nav-right-username">{userName}</h3>
        <LogoutIcon
          className="logoutIcon"
          onClick={() => {
            localStorage.clear();
            toast.success("Logout successfully", toastOptions);
            navigate("/");
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
