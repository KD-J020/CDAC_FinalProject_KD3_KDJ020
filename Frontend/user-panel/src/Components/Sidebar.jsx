import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "../Styles/sidebar.css";

function Sidebar() {
  return (
    <div className="d-flex flex-column vh-100 text-white p-3" style={{ width: "180px", backgroundColor: "#438a84" }}>
      <ul className="nav nav-pills flex-column">
        
        <li className="nav-item">
          <Link to="/home/NewTicket" className="nav-link text-white">Raise Ticket</Link>
        </li>
        <li className="nav-item">
          <Link to="/home/Inquiry" className="nav-link text-white">Product Inquiry</Link>
        </li>
        <li className="nav-item">
          <Link to="/home/Answer" className="nav-link text-white">Inquiry Answer</Link>
        </li>
        <li className="nav-item">
          <Link to="/home/NewArrivals" className="nav-link text-white">New Arrivals</Link>
        </li>

        {/* Feedback Links */}
        <li className="nav-item">
          <Link to="/home/feedback-list" className="nav-link text-white">View Feedback</Link>
        </li>
        <li className="nav-item">
          <Link to="/home/add-feedback" className="nav-link text-white">Submit Feedback</Link>
        </li>  {/* ✅ Fixed: Added missing closing tag */}

        {/* History Dropdown */}
        <li className="nav-item dropdown">
          <Dropdown>
            <Dropdown.Toggle
              id="historyDropdown"
              className="nav-link dropdown-toggle text-white bg-transparent border-0"
            >
              History
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/home/History/Purchases">
                Purchases
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/home/History/Tickets">
                Tickets
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
