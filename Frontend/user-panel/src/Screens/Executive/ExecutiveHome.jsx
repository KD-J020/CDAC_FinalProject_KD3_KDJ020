import React from "react";
import Sidebar from "../../Components/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";

function ExecutiveHome() {
  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content flex-grow-1">
          <Outlet />
        </div>
      </div>
         
    </div>
  );
}

export default ExecutiveHome;
