import React, { useState, useEffect } from "react";
import { Table, Container } from "react-bootstrap";
import "../Styles/PurchasedHistory.css";

function PurchaseHistory() {
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        const fetchPurchases = async () => {
            try {
                const userId = 2; 
                const response = await fetch(`http://localhost:8090/home/History/Purchases/user/2`);
                const data = await response.json();
                setPurchases(data);
            } catch (error) {
                console.error("Error fetching purchases:", error);
            }
        };

        fetchPurchases();
    }, []);

  return (
    <Container>
    <h2 className="text-center my-4">Purchase History</h2>
    <div style={{ overflowX: "auto" }}>
        <Table striped bordered hover className="custom-table">
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Product Name</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Order Date</th>
                </tr>
            </thead>
            <tbody>
                        {purchases.map((purchase) => (
                            <tr key={purchase.id}>
                                <td>{purchase.id}</td>
                                <td>{purchase.productName}</td>
                                <td>
                                    <img src={`data:image/jpeg;base64,${purchase.productImage}`} alt={purchase.productName} style={{ width: "100px", height: "100px" }} />
                                </td>
                                <td>{purchase.quantity}</td>
                                <td>{purchase.totalPrice}</td>
                                <td>{new Date(purchase.orderDate).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>
  );
}

export default PurchaseHistory;