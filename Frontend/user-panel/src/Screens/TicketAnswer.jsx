import React from "react";

function TicketAnswer() {
  const ticket = {
    id: 123,
    subject: "Issue with product delivery",
    description:
      "I placed an order on December 1st, but I haven't received my product yet. Can you provide an update?",
    createdDate: "2024-12-01",
    status: "Resolved",
    adminAnswer: "The product has been shipped and should arrive by December 31st. Apologies for the delay.",
  };

  const handleCloseTicket = () => {
    alert("Ticket Closed");
  };

  const handleReply = () => {
    alert("Reply to Admin");
  };

  const handleDownloadTicket = () => {
    alert("Ticket Downloaded");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ticket Answer Page</h1>

      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <h3>Ticket Details</h3>
        <p>
          <strong>Ticket ID:</strong> {ticket.id}
        </p>
        <p>
          <strong>Subject:</strong> {ticket.subject}
        </p>
        <p>
          <strong>Description:</strong> {ticket.description}
        </p>
        <p>
          <strong>Created Date:</strong> {ticket.createdDate}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          <span
            style={{
              color: ticket.status === "Resolved" ? "green" : "red",
              fontWeight: "bold",
            }}
          >
            {ticket.status}
          </span>
        </p>
      </div>

      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "20px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h3>Admin's Answer</h3>
        <p>{ticket.adminAnswer}</p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={handleCloseTicket}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor: "#ff1a1a",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Close Ticket
        </button>
        <button
          onClick={handleReply}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor: "#438a84",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Reply
        </button>
        <button
          onClick={handleDownloadTicket}
          style={{
            padding: "10px 20px",
            backgroundColor: "#FF9800",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Download Ticket
        </button>
      </div>
    </div>
  );
}

export default TicketAnswer;