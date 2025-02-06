import React, { useState } from "react";
import { Table, Badge } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";
import "../Styles/pagination-style.css";

function TicketHistoryComp({ tickets }) {
    const [currentPage, setCurrentPage] = useState(0);
    const ticketsPerPage = 5; 

    const offset = currentPage * ticketsPerPage;
    const currentTickets = tickets.slice(offset, offset + ticketsPerPage);
    const pageCount = Math.ceil(tickets.length / ticketsPerPage);

    const getStatusBadge = (status) => {
        switch (status) {
            case "PENDING":
                return <Badge bg="warning">Pending</Badge>;
            case "IN_PROGRESS":
                return <Badge bg="primary">In Progress</Badge>;
            case "RESOLVED":
                return <Badge bg="success">Resolved</Badge>;
            case "CLOSED":
                return <Badge bg="danger">Closed</Badge>;
            default:
                return <Badge bg="secondary">Unknown</Badge>;
        }
    };

    // Handle page click
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div>
            <Table striped bordered hover responsive>
                <thead style={{ backgroundColor: "#438a84", color: "white" }}>
                    <tr>
                        <th style={{ backgroundColor: "#438a84", color: "white" }}>Id</th> 
                        <th style={{ backgroundColor: "#438a84", color: "white" }}>Subject</th>
                        <th style={{ backgroundColor: "#438a84", color: "white" }}>Description</th>
                        <th style={{ backgroundColor: "#438a84", color: "white" }}>Status</th>
                        <th style={{ backgroundColor: "#438a84", color: "white" }}>Product Name</th>
                        <th style={{ backgroundColor: "#438a84", color: "white" }}>Executive</th>
                    </tr>
                </thead>
                <tbody>
                    {currentTickets.map((ticket, index) => (
                        <tr key={ticket.id}>
                            <td>{offset + index + 1}</td> 
                            <td>{ticket.subject}</td>
                            <td>{ticket.description}</td>
                            <td>{getStatusBadge(ticket.status)}</td>
                            <td>{ticket.product_name}</td>
                            <td>{ticket.executive_name || "Not Assigned"}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <div className="pagination-container">
                <ReactPaginate
                    previousLabel={"❮"}
                    nextLabel={"❯"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination justify-content-center"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link prev-next"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link prev-next"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                />
            </div>
        </div>
    );
}

TicketHistoryComp.propTypes = {
    tickets: PropTypes.array.isRequired,
};

export default TicketHistoryComp;
