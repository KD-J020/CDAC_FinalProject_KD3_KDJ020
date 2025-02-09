import React from "react";
import { Card, Badge, Container } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "../Styles/ticket-details.css";

function TicketDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const ticket = location.state?.ticket;

    if (!ticket) {
        return <h3 className="text-center mt-4">No ticket found.</h3>;
    }

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

    return (
        <Container className="ticket-details-container">
            <Card className="ticket-card">
                <Card.Body>
                    <Card.Title className="ticket-title">Ticket #{ticket.id}</Card.Title>
                    <Card.Text className="ticket-subject"><strong>Subject:</strong> {ticket.subject}</Card.Text>
                    <Card.Text><strong>Description:</strong> {ticket.description || "No Description Provided"}</Card.Text>
                    <Card.Text><strong>Status:</strong> {getStatusBadge(ticket.status)}</Card.Text>
                    <Card.Text>
                        <strong>Answer:</strong> {ticket.answer ? ticket.answer : <span className="waiting-answer">No answer yet, please wait...</span>}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-end">
                    <button className="btn btn-primary back-btn" onClick={() => navigate(-1)}>Back to Tickets</button>
                </Card.Footer>
            </Card>
        </Container>
    );
}

export default TicketDetails;
