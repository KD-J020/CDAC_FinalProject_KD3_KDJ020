import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import "../Styles/PurchasedHistory.css";
import "../Styles/pagination-style.css";

function PurchaseHistory() {
    const [purchases, setPurchases] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {
        const fetchPurchases = async () => {
            try {
                const userId = 2; // Replace with the actual user ID
                const response = await fetch(`http://localhost:8090/home/History/Purchases/user/${userId}`);
                const result = await response.json();
                console.log("Fetched purchases data:", result);

                if (result && Array.isArray(result)) {
                    setPurchases(result);
                } else {
                    console.error("Unexpected response structure:", result);
                }
            } catch (error) {
                console.error("Error fetching purchases:", error);
            }
        };

        fetchPurchases();
    }, []);

    const pageCount = Math.ceil(purchases.length / itemsPerPage);
    const offset = currentPage * itemsPerPage;
    const currentItems = purchases.slice(offset, offset + itemsPerPage);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <Container>
            <h2 className="text-center my-4">Purchase History</h2>
            <Row className="g-3 justify-content-center">
                {currentItems.map((purchase) => (
                    <Col key={purchase.id} xs={12} sm={6} md={4} lg={3}>
                        <Card className="purchase-card shadow-sm">
                            <div className="image-container">
                                <Card.Img 
                                    variant="top" 
                                    src={`data:image/jpeg;base64,${purchase.productImage}`} 
                                    alt={purchase.productName} 
                                />
                                <div className="favorite-icon">❤️</div>
                            </div>
                            <Card.Body className="card-body-compact">
                                <Card.Title className="product-title">{purchase.productName}</Card.Title>
                                <Card.Text className="price">${purchase.totalPrice.toFixed(2)}</Card.Text>
                                <Card.Text className="order-date">
                                    Ordered on: {new Date(purchase.orderDate).toLocaleDateString()}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {pageCount > 1 && (
                <div className="pagination-container">
                    <ReactPaginate
                        previousLabel={"❮"}
                        nextLabel={"❯"}
                        breakLabel={"..."}
                        pageCount={pageCount}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
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
            )}
        </Container>
    );
}

export default PurchaseHistory;
