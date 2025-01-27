import "../Styles/login-style.css";
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";

function PassResetComp({handleOnChange,handleOnResetSubmit,formSwitcher,  email}){
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Card style={{ width: '25rem' }} className="p-4 shadow">
        <h2 className="text-center mb-4" style={{ color: "#438a84" }}>Reset Password</h2>
        <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
            <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" value={email} onChange={handleOnChange} placeholder="Enter email"/>
            </Form.Group>


            <Button variant="primary" type="submit" className="w-100">
            Reset Password
            </Button>
        </Form>
        <hr />
        <Row>
            <Col>
                <a href="#!" onClick={()=>formSwitcher('login')}>Login Now</a>
            </Col>
        </Row>
        </Card>
    </Container>
    )
}

PassResetComp.propTypes ={
    handleOnChange : PropTypes.func.isRequired,
    handleOnResetSubmit : PropTypes.func.isRequired,
    formSwitcher : PropTypes.func.isRequired,

    email: PropTypes.string.isRequired,

}

export default PassResetComp