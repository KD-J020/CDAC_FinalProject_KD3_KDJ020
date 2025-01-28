import logo from "./logo.svg";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Register from "./Screens/Register";
import Login from "./Screens/Login";
import Home from "./Screens/Home";

import RaiseTicket from "./Screens/RaiseTicket";
import Inquiry from "./Screens/Inquiry";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="home" element={<Home />}>
          <Route path='newticket' element={<RaiseTicket/>}/>
          <Route path='inquiry' element={<Inquiry/>}/>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
