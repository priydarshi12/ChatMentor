import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Default.css";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import ChatIcon from "@mui/icons-material/Chat";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import JavascriptIcon from "@mui/icons-material/Javascript";
import ImageIcon from "@mui/icons-material/Image";
const Default = () => {
  const navigate = useNavigate();
  return (
    <div className="container-d">
      <div className="box">
        <h1 className="box-title">Paragraph Summarizer</h1>
        <div
          className=" inner-box "
          onClick={(e) => {
            navigate("paragraph");
          }}
        >
          <AlignHorizontalLeftIcon
            sx={{ width: "150px", height: "150px" }}
            className="icon"
          />
          <p className="inner-box-text">
            Summarize long text into short sentence
          </p>
        </div>
      </div>
      <div className="box">
        <h1 className="box-title">Text Generator</h1>
        <div
          className=" inner-box"
          onClick={(e) => {
            navigate("text");
          }}
        >
          <TextSnippetIcon
            sx={{ width: "150px", height: "150px" }}
            className="icon"
          />
          <p className="inner-box-text">Generate text with words</p>
        </div>
      </div>
      <div className="box">
        <h1 className="box-title">AI ChatBot</h1>
        <div
          className=" inner-box text-summary"
          onClick={(e) => {
            navigate("chat");
          }}
        >
          <ChatIcon sx={{ width: "150px", height: "150px" }} className="icon" />
          <p className="inner-box-text">Chat with AI ChatBot</p>
        </div>
      </div>
      <div className="box">
        <h1 className="box-title">Javascript Converter</h1>
        <div
          className=" inner-box text-summary"
          onClick={(e) => {
            navigate("js");
          }}
        >
          <JavascriptIcon
            sx={{ width: "150px", height: "150px" }}
            className="icon"
          />
          <p className="inner-box-text">Translate english to Javascript code</p>
        </div>
      </div>
      <div className="box">
        <h1 className="box-title">AI SciFi Images</h1>
        <div
          className=" inner-box text-summary"
          onClick={(e) => {
            navigate("sci-img");
          }}
        >
          <ImageIcon
            sx={{ width: "150px", height: "150px" }}
            className="icon"
          />
          <p className="inner-box-text">Generate SciFi Image</p>
        </div>
      </div>
    </div>
  );
};

export default Default;
