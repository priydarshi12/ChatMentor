import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Style/Privacy.css";
const Terms = () => {
  return (
    <div>
      <Navbar />
      <div className="outer-con">
        <div className="container-pri">
          <h1 className="top-head">Terms of Service</h1>
          <i className="pri-date">Last updated: June 24, 2023.</i>
          <h2 className="para-intro">1. Registration and Your Account.</h2>
          <p className="para-pri">
            To register to use the ChatMentor Services, you must create a
            username and password and provide us with the information requested
            in the registration process. You must provide complete and accurate
            information during the registration process and will update your
            information to ensure it remains accurate.
          </p>

          <h2 className="para-intro">2. Your Data. </h2>
          <p className="para-pri">
            (a) You will ensure that your data, and your use of it, complies
            with this Agreement and any applicable law. You will not store or
            process protected health information using the ChatMentor Services
            unless you sign a Business Associate Agreement with us.
          </p>
          <h2 className="para-intro">3. Age Restriction. </h2>
          <p className="para-pri">
            Users must be of a certain age (e.g., 13 years or older) to use the
            chatbot. If applicable, parental consent is required for users under
            the specified age.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
