import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import ForgetPassword from "./Pages/ForgetPassword";
import NewSubmit from "./Pages/NewSubmit";
import Error from "./Pages/Error";
import Chat from "./Components/Chat";
import Paragraph from "./Components/Paragraph";
import JsConveteror from "./Components/JsConveteror";
import SciImg from "./Components/SciImg";
import Text from "./Components/Text";
import Default from "./Components/Default";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />}>
       
          <Route index element={<Default />}></Route>
          <Route path="text" element={<Text></Text>}></Route>
          <Route path="paragraph" element={<Paragraph />}></Route>
          <Route path="chat" element={<Chat></Chat>}></Route>
          <Route path="js" element={<JsConveteror />}></Route>
          <Route path="sci-img" element={<SciImg></SciImg>}></Route>
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/legal/privacy" element={<Privacy />}/>
        <Route path="/terms" element={<Terms />}/>
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/new-password/:id/:token" element={<NewSubmit />} />
        <Route path="*" element={<Error />} />
      </Routes>
      
    </BrowserRouter>
    
    </>
  );
}

export default App;

// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// const App = () => {
//   return (

//   );
// };
