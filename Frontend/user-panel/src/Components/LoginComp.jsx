import "../Styles/login-style.css";
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";

function LoginComp({handleOnChange,handleOnSubmit,formSwitcher, email, pass}){
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Card style={{ width: '25rem' }} className="p-4 shadow">
        <h2 className="text-center mb-4" style={{ color: "#438a84" }}>User Login</h2>
        <Form autoComplete="off" on onSubmit={handleOnSubmit}>
            <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" value={email} onChange={handleOnChange} placeholder="Enter email"/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={pass} onChange={handleOnChange} placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
            Login
            </Button>
        </Form>
        <hr />
        <Row>
            <Col>
                <a href="#!" onClick={()=>formSwitcher('reset')}>Forget Password?</a>
            </Col>
        </Row>
        </Card>
    </Container>
    )
}

LoginComp.propTypes ={
    handleOnChange : PropTypes.func.isRequired,
    handleOnSubmit : PropTypes.func.isRequired,
    formSwitcher : PropTypes.func.isRequired,

    email: PropTypes.string.isRequired,
    pass : PropTypes.string.isRequired,

}

export default LoginComp