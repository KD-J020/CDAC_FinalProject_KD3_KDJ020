import logo from "./logo.svg";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Register from "./Components/screens/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="Register" element={<Register />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
