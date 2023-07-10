import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Style/Login.css";
import DoneIcon from "@mui/icons-material/Done";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute } from "../utils/APIRoutes";
import Loader from "../asset/loader.gif";

const Login = () => {
  const navigate = useNavigate();
  const toastOptions = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const handleSubmit = async (e) => {
    setLoader(true);
    try {
      e.preventDefault();
      const { data } = await axios.post(loginRoute, {
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
            localStorage.setItem("chatMentor", JSON.stringify(data.token));

            navigate("/home");
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
            <div className="content">
              <ToastContainer />
              <div className="right">
                <h1 className="right-heading">Hello Again!</h1>
                <p className="right-subheading">
                  Explore more by connecting with us
                </p>
                <form className="right-form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />

                  <button className="login-btn" type="submit">
                    Login
                  </button>

                  <p className="not-mem">
                    <Link to="/register">Register Now</Link>
                    <Link to="/forget-password">Forget Password</Link>
                  </p>
                </form>
              </div>
              <div className="left">
                <div className="left-text">
                  <h1 class="left-heading">ChatMentor</h1>

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

export default Login;
