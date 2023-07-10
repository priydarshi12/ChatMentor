import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../Style/Home.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "../Style/Home.css";
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("chatMentor");
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <div className="container-home">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
