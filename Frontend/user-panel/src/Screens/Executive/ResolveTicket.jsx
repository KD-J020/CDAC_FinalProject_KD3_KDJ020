import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// import {
//   deleteCategory,
//   getCategoryList,
//   updateCategory,
// } from "../Service/categoryService";
import TicketRow from "../../Components/Executive/TicketRow";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import { getTickets } from "../../Service/ExecutiveTicketService";

function ResolveTickets() {
  // used to load all the categories
  const [tickets, setTickets] = useState([]);

  const onLoadTickets = async () => {
    const response = await getTickets(2);
    console.log(response[0]);
    setTickets(response);
  };

  useEffect(() => {
    // load all categories when this component is loaded on the screen
    onLoadTickets();
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <div className="container">
        <h2 className="header">All Tickets</h2>

        {/* {tickets.length == 0 && <h3 className="mt-3">There are no tickets.</h3>} */}

        {tickets.length > 0 && (
          <table className="table-hover table mt-3">
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>Subject</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => {
                return ticket["status"] === "RESOLVE" ? (
                  <TicketRow
                    key={ticket["id"]}
                    id={ticket["id"]}
                    subject={ticket["subject"]}
                    description={ticket["description"]}
                    status={ticket["status"]}
                  />
                ) : null;
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default ResolveTickets;
