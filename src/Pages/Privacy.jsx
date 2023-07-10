import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Style/Privacy.css";
const Privacy = () => {
  return (
    <div>
      <Navbar />
      <div className="outer-con">
        <div className="container-pri">
          <h1 className="top-head">Privacy Policy</h1>
          <i className="pri-date">
            This Privacy Policy was last revised on 10 July, 2023.
          </i>
          <h2 className="para-intro">1. Purpose of this Privacy Policy.</h2>
          <p className="para-pri">
            ChatMentor, Inc. is committed to protecting your privacy. We have
            prepared this Privacy Policy to describe to you our practices
            regarding the Personal Data (as defined below) we collect from users
            of our website located at ChatMentor.com and in connection with our
            ChatMentor products and services (the "Products"). In addition, this
            Privacy Policy tells you about your privacy rights and how the law
            protects you.
            <br /> This website and our Products are not intended for children
            and we do not knowingly collect data relating to children.
            <br />
            It is important that you read this Privacy Policy together with any
            other privacy notice or fair processing notice we may provide on
            specific occasions when we are collecting or processing Personal
            Data about you so that you are fully aware of how and why we are
            using your data. This Privacy Policy supplements the other notices
            and is not intended to override them.
          </p>

          <h2 className="para-intro">2. Types Of Data We Collect. </h2>
          <p className="para-pri">
            We collect Personal Data and Anonymous Data from you when you visit
            our site, when you send us information or communications, when you
            engage with us through online chat applications, when you download
            and use our Products, and when you register for white papers, web
            seminars, and other events hosted by us. "Personal Data" means data
            that identifies, relates to, describes, can be used to contact, or
            could reasonably be linked directly or indirectly to you, including,
            for example, identifiers such as your real name, alias, postal
            address, unique personal identifier, online identifier, Internet
            Protocol (IP) address, email address, account name, or other similar
            identifiers; commercial information, including records of products
            or services purchased, obtained, or considered, or other purchasing
            or consuming histories or tendencies; Internet or other electronic
            network activity information, including, but not limited to,
            browsing history, search history, and information regarding your
            interaction with an Internet website, application, or advertisement;
            and any other non-public information about you that is associated
            with or linked to any of the foregoing data. "Anonymous Data" means
            data that is not associated with or linked to your Personal Data;
            Anonymous Data does not permit the identification of individual
            persons. We do not collect any Special Categories of Personal Data
            about you (this includes details about your race or ethnicity,
            religious or philosophical beliefs, sex life, sexual orientation,
            political opinions, trade union membership, information about your
            health and genetic and biometric data).
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Privacy;
