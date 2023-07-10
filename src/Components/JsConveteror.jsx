import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Style/Js.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DownloadIcon from "@mui/icons-material/Download";
import Js from "../asset/JS.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { jsPDF } from "jspdf";
import { jsRoute } from "../utils/APIRoutes";
import { CopyToClipboard } from "react-copy-to-clipboard";

const JsConveteror = () => {
  const toastOptions = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
  };
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [load, setLoad] = useState(false);
  const [copyText, setCopyText] = useState("Copy");

  const handleSubmit = async (e) => {
    if (input === "") {
      toast.error("Please provide some input", toastOptions);
      console.log("error");
    } else {
      try {
        setLoad(true);
        toast.info("please wait while loading your result", toastOptions);
        const { data } = await axios.post(jsRoute, {
          text: input,
        });
        if (data) setLoad(false);
        setOutput(data.msg);
      } catch (err) {
        toast.error(err, toastOptions);
      }
    }
  };
  const handleDownload = () => {
    toast.success("Downloaded successfully!");
    const doc = new jsPDF();

    doc.setFont("times");
    doc.setFontSize(25);
    doc.text("ChatMentor", 90, 12);
    doc.setFont("normal");
    doc.setFontSize(14);
    const availableWidth = doc.internal.pageSize.getWidth() - 30;

    const lines = doc.splitTextToSize(output, availableWidth);
    doc.setTextColor(255, 0, 0);
    doc.text("Javascript code :", 10, 25);
    doc.setTextColor(0, 0, 0);
    doc.text(lines, 10, 35);
    doc.save("ChatMentor.pdf");
  };

  const handleClick = (e) => {
    toast.info("Copied to Clipboard", toastOptions);
    setCopyText("Copied");
    setTimeout(() => {
      setCopyText("Copy");
    }, 800);
  };

  return (
    <div className="outer-container-js">
      <ToastContainer />

      <div className="image">
        <img src={Js} alt="Write Js query" />
      </div>
      <div className="container-js">
        <h1 className="heading-js">Javascript Converter</h1>
        <textarea
          placeholder="Enter your query here"
          className="input-js"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></textarea>
        <div className="opt-sec-js">
          <button
            type="submit"
            className="btn-js btn-js-go "
            onClick={() => {
              navigate("/home");
            }}
          >
            Go Back
          </button>
          {load === false ? (
            <button type="submit" className="btn-js" onClick={handleSubmit}>
              Submit
            </button>
          ) : (
            <button className="btn-para load">Loading...</button>
          )}
        </div>
        <textarea
          placeholder="Your code will be displayed here"
          className="output-js"
          value={output}
          onChange={(e) => setOutput(e.target.value)}
        ></textarea>
        <div className="button-section-js">
          <CopyToClipboard text={output}>
            <button className="copy-btn-js" onClick={handleClick}>
              {copyText} <ContentCopyIcon />
            </button>
          </CopyToClipboard>
          <button className="download-btn-js" onClick={handleDownload}>
            Download <DownloadIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JsConveteror;
