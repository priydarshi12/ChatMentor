import React ,{useState}from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../Style/Username.css";
import logo from "../asset/logo.png";
import DoneIcon from "@mui/icons-material/Done";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Login = () => {
  
    const toastOptions = {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 4000,
      pauseOnHover: true,
      draggable: true,
      // theme: "dark",
    };
  
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const handleSubmit=async(e)=>{
   try{ e.preventDefault();
    const {data}=await axios.post("http://localhost:8080/api/v1/auth/login",{
      email:email,
      password:password,
    })
    if(data.status===true){
      toast.success(data.msg, toastOptions);
      localStorage.setItem("chatMentor",JSON.stringify(data.token))
    }
    else toast.error(data.msg, toastOptions);}
  catch(err){
    console.log(err)
  }
}
  return (
    <div className="outercontainer">
      <div className="container">
        <div className="title-bar">
          <h1 className="logo-left">
            <span className="l-mentor">Chat</span>Mentor
          </h1>
        </div>
        <div className="content">
        <ToastContainer/>
          <div className="left">
            <div className="left-text">
              <h1 class="left-heading">ChatMentor</h1>

              <DoneIcon sx={{ color: "rgb(0,237,100)", fontSize: 18 }} />

              <span className="left-subheading">Image Generation:</span>
              <p className="left-content">
                Future image generation tool revolutionizes visuals with AI,
                creating captivating, customized images for blogs, social media,
                and presentations.
              </p>

              <DoneIcon sx={{ color: "rgb(0,237,100)", fontSize: 18 }} />

              <span className="left-subheading">Paragraph Summarization:</span>
              <p className="left-content">
                Save time and effort with our automatic summarization feature.
                Paste text, and our system generates concise summaries, helping
                you extract crucial information efficiently.
              </p>

              <DoneIcon sx={{ color: "rgb(0,237,100)", fontSize: 18 }} />

              <span className="left-subheading">Text-to-Code Conversion:</span>
              <p className="left-content">
                Simplify code conversion: Enter text description or logic, and
                our tool automatically generates executable code in your
                preferred language. Perfect for developers
              </p>

              <DoneIcon sx={{ color: "rgb(0,237,100)", fontSize: 18 }} />

              <span className="left-subheading">AI Chat-Bot</span>
              <p className="left-content">
                Our AI chatbot is here to solve all your queries. Simply ask any
                question, and it will provide prompt and accurate responses.
              </p>
            </div>
          </div>
          <div className="right">
            <h1 className="right-heading">Hello Again!</h1>
            <p className="right-subheading">
              Explore more by connecting with us
            </p>
            <form className="right-form" onSubmit={handleSubmit}>
              <input type="text" placeholder="E-mail" value={email} onChange={e=>{setEmail(e.target.value)}}/>
              <input type="password" placeholder="Password" value={password} onChange={e=>{setPassword(e.target.value)}}/>
              {/* <input type="text" placeholder="username" /> */}

              <button className="login-btn" type="submit">Login</button>

              <p className="not-mem">
                Not a Member:
                <Link to="/register">Register Now</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const Container = styled.div`
  background-color: rgb(2, 52, 48);
`;
export default Login;
