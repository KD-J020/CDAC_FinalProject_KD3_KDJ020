import React, { useState, useEffect }  from "react";
//import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RaiseTicketComp from "../Components/RaiseTicketComp";
import { toast } from "react-toastify";

function RaiseTicket() {
    const [ticketDetails, setTicketDetails] = useState({
        subject: "",
        description: "",
        product_id: "", 
        user_id: 2,
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [products, setProducts] = useState([]); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const userId = 2; // Replace with the actual user ID
                const response = await fetch(`http://localhost:8090/home/History/Purchases/user/${userId}`);
                const data = await response.json();
                if (data && Array.isArray(data)) {
                    const orderedProducts = data
                        .filter(order => order.product_id !== null && order.productName !== null) // Filter out products with null id or name
                        .map(order => ({
                            id: order.product_id,
                            title: order.productName,
                        }))
                        .reduce((acc, product) => {
                            if (!acc.some(p => p.id === product.id)) {
                                acc.push(product);
                            }
                            return acc;
                        }, []); // Ensure unique products
                    console.log("Processed products:", orderedProducts); // Debugging log
                    setProducts(orderedProducts);
                } else {
                    console.error("Unexpected response structure:", data);
                }
            }  catch (error) {
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
            const response = await fetch("http://localhost:8090/Home/newticket", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(ticketDetails),
            });
            if (response.ok) {
                setIsSubmitted(true);
                toast.success("Ticket raised successfully");
                navigate("/home/history/tickets");
            } else {
                throw new Error("Failed to raise ticket");
            }
        } catch (error) {
            console.error("Error:", error);
            setTicketDetails({
                subject: "",
                description: "",
                product_id: "",
                user_id: 2,
            });
            toast.error("Failed to raise ticket");
        }
    };

    const handleBackToTickets = () => {
        navigate("/home/history/tickets");
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