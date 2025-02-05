import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import screens
import Register from "./Screens/Register";
import Login from "./Screens/Login";
import Home from "./Screens/Home";
import NewArrivals from "./Screens/NewArrival";
import ProductDetail from "./Screens/ProductDetail";
import RaiseTicket from "./Screens/RaiseTicket";
import Inquiry from "./Screens/Inquiry";
import About from "./Screens/About";
import FeedbackList from "./Screens/FeedbackList";
import AddFeedback from "./Screens/AddFeedback";

function App() {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* Protected Routes (For after login) */}
        <Route path="home" element={<Home />}>
          <Route index element={<ProductDetail />} /> {/* Default route */}
          <Route path="newarrivals" element={<NewArrivals />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="newticket" element={<RaiseTicket />} />
          <Route path="inquiry" element={<Inquiry />} />
          <Route path="about" element={<About />} /> {/* About page nested under /home */}
          <Route path="feedback-list" element={<FeedbackList />} /> {/* Add route for FeedbackList */}
          <Route path="add-feedback" element={<AddFeedback />} />
        </Route>
      </Routes>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
}

export default App;