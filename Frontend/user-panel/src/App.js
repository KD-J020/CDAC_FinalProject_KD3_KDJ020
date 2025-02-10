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
import TicketHistory from "./Screens/TicketHistory";
import PurchaseHistory from "./Screens/PurchasedHistory";
import TicketDetails from "./Screens/TicketDetails";
import Tickets from "./Screens/Executive/Tickets";
import AssignTicket from "./Screens/Executive/AssignTicket";
import PendingTickets from "./Screens/Executive/PendingTickets";
import ResolveTicket from "./Screens/Executive/ResolveTicket";
import ExecutiveHome from "./Screens/Executive/ExecutiveHome";
import AnswerTicket from "./Screens/Executive/AnswerTicket";
import Profile from "./Screens/Profile";
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
          <Route path="profile" element={<Profile/>}/> 
  
          <Route path='newticket' element={<RaiseTicket/>}/>
          <Route path="history/purchases" element={<PurchaseHistory />} />

          <Route path="history/purchases/user/" element={<PurchaseHistory />} />
          <Route path='inquiry' element={<Inquiry/>}/>
          <Route path="history/tickets/" element={<TicketHistory />} /> 
          <Route path="history/tickets/:id" element={<TicketDetails />} />

        </Route>
        <Route path="executive-home" element={<ExecutiveHome/>} >
            <Route path="all-tickets" element={<Tickets/>} /> 
            <Route path="assign-tickets" element={<AssignTicket/>} />
            <Route path="pending-tickets" element={<PendingTickets/>} />
            <Route path="resolve-tickets" element={<ResolveTicket/>} />
            <Route path="ticket-answer/:id" element={<AnswerTicket/>} />
          </Route>
      </Routes>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
}

export default App;