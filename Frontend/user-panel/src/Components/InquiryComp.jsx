import React from "react";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";

import PropTypes from "prop-types";

function InquiryComp({handleOnSubmit, handleOnChange}){
    return(
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Card style={{ width: '50rem'}} className="p-4 shadow">
        
        <Form autoComplete="off" /*onSubmit={handleOnSubmit}*/>
        <Form.Group className="mb-3" as={Row}>
            <Form.Label column sm={3}>
              Inquiry Type
            </Form.Label>
            <Col sm={9}>
              <Form.Select name="ticketType" onChange={handleOnChange} defaultValue="">
                <option value="" disabled>
                  Select Inquiry Type
                </option>
                <option value="type-1">Type-1</option>
                <option value="type-2">Type-2</option>
                <option value="type-3">Type-3</option>
              </Form.Select>
            </Col>
          </Form.Group>

            <Form.Group className="mb-3" as= {Row}>
            <Form.Label column sm={3}>Subject</Form.Label>
            <Col sm={9}>
                <Form.Control name="subject" /*value={email}*/ onChange={handleOnChange} placeholder="Subject"/>
            </Col>
            </Form.Group>

            <Form.Group className="mb-3" as= {Row}>
            <Form.Label column sm={3}>Details</Form.Label>
            <Col sm={9}>
                <Form.Control as="textarea" name="details" rows= "5" /*value={pass}*/ onChange={handleOnChange} />
            </Col>
            </Form.Group>

            <div className="d-flex">
                <Button type="submit" className="w-100 btn btn-primary me-2" style={{ backgroundColor: "#438a84" }} >
                    Raise
                </Button>
                <Button type="submit" className="w-100 btn btn-secondary btn-danger"  >
                    Cancel
                </Button>
            </div>    
        </Form>
        </Card>
    </Container>

    )
}

InquiryComp.propTypes ={
    handleOnChange : PropTypes.func.isRequired,
    //handleOnResetSubmit : PropTypes.func.isRequired,
}
export default InquiryComp