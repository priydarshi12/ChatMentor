import React from "react";
import "../Style/Footer.css";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate=useNavigate()
  return (

    <div className="footer">

      <div className="left-footer">&copy; 2023 ChatMentor, Inc</div>
      <div className="right-footer">
        <h5>
          <div className="dot">.</div><div>Contact</div>
        </h5>
        <h5 onClick={()=>navigate("/legal/privacy")}>
          <div className="dot">.</div>Privacy Policy
        </h5>
        <h5 onClick={()=>navigate("/terms")}>
          <div className="dot">.</div>Term & Conditions
        </h5>
      </div>
    </div>
  );
};

export default Footer;
