import React, { useState } from "react";
import "../Style/ForgetPassword.css";
import forgetPassword from "../asset/Forgot.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Loader from "../asset/loader.gif";
import { forgetPasswordRoute } from "../utils/APIRoutes";
const ForgetPassword = () => {
  const toastOptions = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
  };

  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {

    setLoader(true);
    const { data } = await axios.post(
      forgetPasswordRoute,
      {
        email: email,
      }
    );
    toast.info("Dont't forget to check your spam messages.", toastOptions);
    if (data) setLoader(false);
    if (data.status === true) {
      toast.success(data.msg, toastOptions);
    } else {
      toast.error(data.msg, toastOptions);
    }
  };

  return (
    <>
     {loader === false ? (
        <div className="outer-container-fp">
          <div className="container-fp">
            <ToastContainer />
            <div className="title-fp">
              <div>ChatMentor</div>
            </div>
            <div className="content-fp">
              <div className="right-fp">
                <img src={forgetPassword} alt="" className="img-fp" />
              </div>
              <div className="left-fp">
                <div className="form-fp">
                  <h1 className="form-head">Forget Password</h1>
                  <p className="form-subheading-fp">
                    Enter your registered email to get otp
                  </p>
                  <input
                    className="input-fp "
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="form-btn-fp"
                    onClick={handleSubmit}
                  >
                    Send Email
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

export default ForgetPassword;
