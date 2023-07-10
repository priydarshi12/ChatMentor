import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/Chat.css";
import ChatGif from "../asset/Chat.gif";
import SendIcon from "@mui/icons-material/Send";
import { chatRoute } from "../utils/APIRoutes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Chat = () => {
  const toastOptions = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
  };
  const [inputValue, setInputValue] = useState("");
  const [outValue, setoutValue] = useState("");

  const adjustInputHeight = (event) => {
    const { scrollHeight, clientHeight } = event.target;
    event.target.style.height = `${Math.min(scrollHeight, 200)}px`;

    if (scrollHeight > clientHeight) {
      event.target.style.overflowY = "scroll";
    } else {
      event.target.style.overflowY = "hidden";
    }

    setInputValue(event.target.value);
  };
  const adjustOutputHeight = (event) => {

    setoutValue(event.target.value);
  };
  const handleSubmit = async (e) => {
    if (inputValue === "") {
      toast.error("Please type some message", toastOptions);
      console.log("error");
    } else {
      try {
        toast.info("please wait while loading your result", toastOptions);
        const { data } = await axios.post(chatRoute, {
          text: inputValue,
        });

        setoutValue(data.msg);
      } catch (err) {
        toast.error(err, toastOptions);
      }
    }
  };
  return (
    <div className="outer-container-chat">
      <ToastContainer />
      <div className="image">
        <img src={ChatGif} alt="Chat with ai" />
      </div>

      <div className="container-chat">
        <h1 className="heading-para">AI ChatBot</h1>

        <div className="input">
          <textarea
            value={inputValue}
            placeholder="send a message"
            className="input-text"
            onChange={adjustInputHeight}
          />
          <SendIcon onClick={handleSubmit} />
        </div>

        <div className="output">
          <textarea
            value={outValue}
            onChange={adjustOutputHeight}
            placeholder="Your result will be displayed here"
            className="output-chat"
          ></textarea>
        </div>
        <div>
          Not this tool ? <Link to="/home">Go Back</Link>
        </div>
      </div>
    </div>
  );
};

export default Chat;
