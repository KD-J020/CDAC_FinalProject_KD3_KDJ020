import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import TicketHistoryComp from "../Components/TicketHistoryComp";
import { createUrl } from "../utils";

function TicketHistory() {
    const [tickets, setTickets] = useState([]);
    const userId = 2; // Replace with the actual user ID

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await fetch(createUrl(`Home/tickets?c_id=${userId}`));
                const result = await response.json();
                console.log("Fetched tickets data:", result);

                if (result && Array.isArray(result)) {
                    setTickets(result);
                } else {
                    console.error("Unexpected response structure:", result);
                }
            } catch (error) {
                console.error("Error fetching tickets:", error);
            }
        };

        fetchTickets();
    }, [userId]);

    return (
        <Container>
            <h2 className="my-4 text-center">Ticket History</h2>
            <TicketHistoryComp tickets={tickets} />
        </Container>
    );
}

export default TicketHistory;
