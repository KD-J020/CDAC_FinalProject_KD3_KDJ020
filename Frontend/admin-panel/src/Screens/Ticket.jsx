import { useState } from "react";
import TicketRow from "../Components/TicketRow";
function Ticket(){
      const[tickets,setTickets]=useState([])
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Customer Tickets</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Ticket ID</th>
            <th>Customer Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         
        </tbody>
      </table>
    </div>
  );
};

export default Ticket
