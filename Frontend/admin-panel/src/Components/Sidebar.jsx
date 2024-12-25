import React from "react";
import {Link} from "react-router-dom"
function Sidebar(){
  return (
    <div className="d-flex flex-column vh-100  text-white p-3" style={{ width: "180px",backgroundColor: "#438a84"}}>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
         <Link to="/home/product" className="nav-link text-white">Products</Link>
        </li>
        <li className="nav-item">
        <Link to="/home/customer" className="nav-link text-white">Customers</Link>
        </li>
        <li className="nav-item">
        <Link to="/home/Ticket" className="nav-link text-white">Tickets</Link>
        </li>
        <li className="nav-item">
        <Link to="/home/feedback" className="nav-link text-white">Feedbacks</Link>
        </li>
        <li className="nav-item">
        <Link to="/home/feedback" className="nav-link text-white">New Leed</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;
