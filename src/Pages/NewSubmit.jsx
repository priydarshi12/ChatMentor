import React, { useState, useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import "../Style/NewSubmit.css";
import Otp from "../asset/OTP.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Loader from "../asset/loader.gif";
import { newPasswordRoute,newValidPasswordRoute } from "../utils/APIRoutes";

const NewSubmit = () => {
  const toastOptions = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
  };
  const history = useNavigate();
  const { id, token } = useParams();
  const [confirmPassword, setconfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const userValid = async () => {
    setLoader(true);
    const { data } = await axios.post(
      newValidPasswordRoute,
      {
        id: id,
        token: token,
      }
    );
    if (data) setLoader(false);
    if (data.status === true) {
      toast.success(data.msg, toastOptions);
    } else {
      toast.error(data.msg,toastOptions);
      setTimeout(()=>{
      history("*")
      },5000)
    }
  };
  useEffect(() => {
    userValid();
  }, []);
  const handleSubmit = async (e) => {
    setLoader(true);
    if (password === confirmPassword) {
      try {
        const { data } = await axios.post(
          newPasswordRoute,
          {
            password: password,
            id: id,
            token: token,
          }
        );
        if (data) setLoader(false);
        if (data.status === true) {
          history("/");
        } else {
          toast.error(data.msg, toastOptions);
        }
      } catch (err) {
        toast.error(err.msg, toastOptions);
      }
    } else {
      toast.error("Password and Confirm password are not same", toastOptions);
    }
  };
  return (
    <>
      {loader === false ? (
        <div className="outer-container-ns">
          <div className="container-ns">
            <ToastContainer />
            <div className="title-ns">
              <div>ChatMentor</div>
            </div>
            <div className="content-ns">
              <div className="right-ns">
                <img src={Otp} alt="" className="img-ns" />
              </div>
              <div className="left-ns">
                <div className="form-ns">
                  <h1 className="form-head">Create New Password</h1>
                  <input
                    className="input-ns"
                    type="text"
                    value={password}
                    placeholder="Enter New Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <input
                    className="input-ns"
                    type="password"
                    value={confirmPassword}
                    placeholder="Confirm Password"
                    onChange={(e) => {
                      setconfirmPassword(e.target.value);
                    }}
                  />

                  <button
                    className="form-btn-ns"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
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

export default NewSubmit;
