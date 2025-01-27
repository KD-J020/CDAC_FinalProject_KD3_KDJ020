import React from "react";
import {Link} from "react-router-dom"
import "../Styles/sidebar.css"; 

function Sidebar(){
  return (
    <div className="d-flex flex-column vh-100  text-white p-3" style={{ width: "180px",backgroundColor: "#438a84"}}>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
         <Link to="/home/Products" className="nav-link text-white">Product Details</Link>
        </li>
        <li className="nav-item">
        <Link to="/home/NewTicket" className="nav-link text-white">Raise Ticket</Link>
        </li>
        <li className="nav-item">
        <Link to="/home/Inquiry" className="nav-link text-white">Product Inquiry</Link>
        </li>
        <li className="nav-item">
        <Link to="/home/Answer" className="nav-link text-white">Inquiry Answer</Link>
        </li>
        <li className="nav-item dropdown">
          <button
            className="nav-link dropdown-toggle text-white bg-transparent border-0"
            id="historyDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            History
          </button>
          <ul
            className="dropdown-menu custom-dropdown-menu"
            aria-labelledby="historyDropdown"
          >
            <li>
              <Link to="/home/History/Purchases" className="dropdown-item" >
                Purchases
              </Link>
            </li>
            <li>
              <Link to="/home/History/Tickets" className="dropdown-item">
                Tickets
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;