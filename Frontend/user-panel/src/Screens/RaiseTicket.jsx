import React, { useState, useEffect }  from "react";
//import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RaiseTicketComp from "../Components/RaiseTicketComp";

function RaiseTicket() {
    const [ticketDetails, setTicketDetails] = useState({
        subject: "",
        details: "",
        product_id: "", 
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [products, setProducts] = useState([]); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("/api/products"); 
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    const handleOnChange = (e) =>{
        const {name, value} = e.target
        setTicketDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/tickets", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(ticketDetails),
            });
            if (response.ok) {
                setIsSubmitted(true);
            } else {
                console.error("Failed to raise ticket");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleBackToTickets = () => {
        navigate("/home/tickets");
    };

    return(
        <div>
            {isSubmitted ? (
                <div>
                    <h2>Thank you for raising a ticket!</h2>
                    <button onClick={handleBackToTickets}>Back to Ticket List</button>
                </div>
            ) : (
                <RaiseTicketComp
                    handleOnChange = {handleOnChange}
                    handleOnSubmit={handleOnSubmit}
                    ticketDetails={ticketDetails}
                    setTicketDetails={setTicketDetails}
                    products={products}
                />
            )}
        </div>
    )
}

export default RaiseTicket