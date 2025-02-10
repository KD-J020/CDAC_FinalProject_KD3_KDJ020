import React from "react";
import { Link } from "react-router-dom";

import "../Styles/sidebar.css";
function Sidebar() {
  return (
    <div
      className="d-flex flex-column vh-100 text-white p-3"
      style={{ width: "180px", backgroundColor: "#438a84" }}
    >
      {true ? (
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <Link to="/home" className="nav-link text-white">
              New Arrivals
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/home/NewTicket" className="nav-link text-white">
              Raise Ticket
            </Link>
          </li>
          

          {/* Feedback Links */}
          <li className="nav-item">
            <Link to="/home/feedback-list" className="nav-link text-white">
              View Feedback
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/home/add-feedback" className="nav-link text-white">
              Submit Feedback
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/home/History/purchases" className="nav-link text-white">
              Purchase History
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/home/History/Tickets" className="nav-link text-white">
              Ticket History
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <Link
              to="/executive-home/all-tickets"
              className="nav-link text-white"
            >
              All Tickets
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/executive-home/assign-tickets"
              className="nav-link text-white"
            >
              Assign Tickets
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/executive-home/resolve-tickets"
              className="nav-link text-white"
            >
              Resolve Tickets
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/executive-home/pending-tickets"
              className="nav-link text-white"
            >
              Pending Tickets
            </Link>
          </li>
        </ul>
      )}

    </div>
  );
}

export default Sidebar;
