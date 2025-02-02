import React from "react";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";

import PropTypes from "prop-types";

function RaiseTicketComp({handleOnSubmit, handleOnChange, ticketDetails, setTicketDetails, products }){
    return(
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Card style={{ width: '50rem'}} className="p-4 shadow">
        
        <Form autoComplete="off" onSubmit={handleOnSubmit}>

            <Form.Group className="mb-3" as={Row}>
                <Form.Label column sm={3}>Product</Form.Label>
                <Col sm={9}>
                    <Form.Select name="product_id" value={ticketDetails.product_id} onChange={handleOnChange}>
                        <option value="" disabled>Select Product</option>
                        {products.map((product) => (
                            <option key={product.id} value={product.id}>
                                {product.name}
                            </option>
                        ))}
                    </Form.Select>
                </Col>
            </Form.Group>

            <Form.Group className="mb-3" as= {Row}>
              <Form.Label column sm={3}>Subject</Form.Label>
              <Col sm={9}>
                  <Form.Control name="subject" value={ticketDetails.subject} onChange={handleOnChange} placeholder="Subject"/>
              </Col>
            </Form.Group>

            <Form.Group className="mb-3" as= {Row}>
              <Form.Label column sm={3}>Details</Form.Label>
              <Col sm={9}>
                  <Form.Control as="textarea" name="details" rows= "5" value={ticketDetails.details} onChange={handleOnChange} />
              </Col>
            </Form.Group>

            <div className="d-flex">
                <Button type="submit" className="w-100 btn btn-primary me-2" style={{ backgroundColor: "#438a84" }} >
                    Raise
                </Button>
                <Button type="button" className="w-100 btn btn-secondary btn-danger" onClick={() => setTicketDetails({ subject: "", details: "", product_id: ""})} >
                    Cancel
                </Button>
            </div>    
        </Form>
        </Card>
    </Container>

    )
}

RaiseTicketComp.propTypes ={
    handleOnChange : PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    ticketDetails: PropTypes.object.isRequired,
    setTicketDetails: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
}
export default RaiseTicketComp