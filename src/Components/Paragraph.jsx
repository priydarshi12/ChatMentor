import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../Style/Para.css";
import { jsPDF } from "jspdf";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DownloadIcon from "@mui/icons-material/Download";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { summaryRoute } from "../utils/APIRoutes";
import { CopyToClipboard } from "react-copy-to-clipboard";
const Paragraph = () => {
  const toastOptions = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
  };
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
        const { data } = await axios.post(summaryRoute, {
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
    console.log("working");
    const doc = new jsPDF();

    doc.setFont("times");
    doc.setFontSize(25);
    doc.text("ChatMentor", 90, 12);
    doc.setFont("normal");
    doc.setFontSize(14);
    const availableWidth = doc.internal.pageSize.getWidth() - 30;

    const lines = doc.splitTextToSize(output, availableWidth);
    doc.text(lines, 10, 30);
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
    <div className="outer-container-para">
      <ToastContainer />
      <div className="container-para">
        <h1 className="heading-para para-title">Paragraph Summarizer</h1>
        <textarea
          placeholder="Enter your paragraph here"
          className="input-para"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></textarea>
        <div className="opt-sec-para">
          <div className="go-back">
            Not this tool ? <Link to="/home">Go Back</Link>
          </div>
          {load === false ? (
            <button className="btn-para" onClick={handleSubmit}>
              Submit
            </button>
          ) : (
            <button className="btn-para load">Loading...</button>
          )}
        </div>
        <textarea
          placeholder="Your result will be displayed here"
          className="output-para"
          value={output}
          onChange={(e) => setOutput(e.target.value)}
        ></textarea>
        <div className="button-section">
          <CopyToClipboard text={output}>
            <button className="copy-btn" onClick={handleClick}>
              {copyText} <ContentCopyIcon />
            </button>
          </CopyToClipboard>

          <button className="download-btn" onClick={handleDownload}>
            Download <DownloadIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Paragraph;
