import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Sciimg.css";
import sciimg from "../asset/AIIMG.png";
import Loadingimg from "../asset/Loading-ai-img.gif";
import output from "../asset/Rocket-bro.png";
import SendIcon from "@mui/icons-material/Send";
import { saveAs } from 'file-saver';
import { imgRoute } from "../utils/APIRoutes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const SciImg = () => {
  const toastOptions = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
  };
  const [inputValue, setInputValue] = useState("");
  const [image, setImage] = useState(output);

  const adjustInputHeight = (event) => {
    setInputValue(event.target.value);
  };
  
  const handleSubmit = async (e) => {
    if (inputValue === "") {
      toast.error("Please type some message", toastOptions);
      console.log("error");
    } else {
      setImage(Loadingimg);
      try {
        toast.info("please wait while loading your result", toastOptions);
        const { data } = await axios.post(imgRoute, {
          text: inputValue,
        });

        setImage(data.msg);
      } catch (err) {
        toast.error(err, toastOptions);
        setImage(image);
      }
    }
  };
  const navigate = useNavigate();
  return (
    <div className="outer-container-chat">
      <ToastContainer />
      <div className="image">
        <img src={sciimg} alt="Chat with ai" />
      </div>

      <div className="container-chat">
        <h1 className="heading-para">AI SciFi Images</h1>

        <div className="input-img">
          <textarea
            value={inputValue}
            placeholder="Image Generator"
            className="input-img-gen"
            onChange={adjustInputHeight}
          />
          <SendIcon onClick={handleSubmit} />
        </div>

        <div className="output-img">
          <img src={image} alt="" className="output-imgC" />
        </div>
   
        <div className="opt-sec-para">
          <button className="btn-go-back-img" onClick={()=>navigate("/home")}>
            Go Back
          </button>

          <button className="btn-download-img" onClick={()=>{saveAs(image,"ChatMentor.png")}}>Download
          <a href={image} download="ChatMentor"></a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SciImg;
