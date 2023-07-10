import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Style/Register.css";
import DoneIcon from "@mui/icons-material/Done";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { registerRoute } from "../utils/APIRoutes";
import Loader from "../asset/loader.gif";
const Register = () => {
  const navigate = useNavigate();
  const toastOptions = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
  };
  const [email, setEmail] = useState("");
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const handleSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();
    try {
      const { data } = await axios.post(registerRoute, {
        username: userName,
        email: email,
        password: password,
      });
      if (data) {
        setLoader(false);
        setTimeout(() => {
          if (data.status === false) {
            toast.error(data.msg, toastOptions);
          }
          if (data.status === true) {
            toast.success(data.msg, toastOptions);
            navigate("/");
          }
        }, 1);
      }
    } catch (err) {
    }
  };
  return (
    <>
      {loader === false ? (
        <div className="outercontainer">
          <div className="container">
            <div className="title-bar">
              <h1 className="logo-left">
                <span className="l-mentor">Chat</span>Mentor
              </h1>
            </div>
            <ToastContainer />
            <div className="content">
              <div className="right">
                <h3 className="right-heading">Unleash your potential</h3>
                <p className="right-subheading">
                  Explore more by connecting with us
                </p>
                <form className="right-form" onSubmit={(e) => handleSubmit(e)}>
                  <input
                    type="text"
                    value={userName}
                    placeholder="UserName"
                    onChange={(e) => setuserName(e.target.value)}
                  />

                  <input
                    type="text"
                    value={email}
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button className="login-btn" type="submit">
                    Sign Up
                  </button>

                  <p className="not-mem">
                    Already a Member:
                    <Link to="/">Login Now</Link>
                  </p>
                </form>
              </div>
              <div className="left">
                <div className="left-text">
                  <h1 className="left-heading">ChatMentor</h1>

                  <DoneIcon sx={{ color: "rgb(0,237,100)", fontSize: 18 }} />

                  <span className="left-subheading">Image Generation:</span>
                  <p className="left-content">
                    Future image generation tool revolutionizes visuals with AI,
                    creating captivating, customized images for blogs, social
                    media, and presentations.
                  </p>

                  <DoneIcon sx={{ color: "rgb(0,237,100)", fontSize: 18 }} />

                  <span className="left-subheading">
                    Paragraph Summarization:
                  </span>
                  <p className="left-content">
                    Save time and effort with our automatic summarization
                    feature. Paste text, and our system generates concise
                    summaries, helping you extract crucial information
                    efficiently.
                  </p>

                  <DoneIcon sx={{ color: "rgb(0,237,100)", fontSize: 18 }} />

                  <span className="left-subheading">
                    Text-to-Code Conversion:
                  </span>
                  <p className="left-content">
                    Simplify code conversion: Enter text description or logic,
                    and our tool automatically generates executable code in your
                    preferred language. Perfect for developers
                  </p>

                  <DoneIcon sx={{ color: "rgb(0,237,100)", fontSize: 18 }} />

                  <span className="left-subheading">AI Chat-Bot</span>
                  <p className="left-content">
                    Our AI chatbot is here to solve all your queries. Simply ask
                    any question, and it will provide prompt and accurate
                    responses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <img src={Loader} alt="loading..." className="load-icon" />
      )}
    </>
  );
};

export default Register;
