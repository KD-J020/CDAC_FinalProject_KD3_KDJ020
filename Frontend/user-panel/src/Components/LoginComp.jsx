import "../Styles/login-style.css";
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
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
            <Link to="#" onClick={() => formSwitcher("reset")}>Forget Password?</Link>
            <div className="d-flex justify-content-center gap-2">
            <Button variant="primary" type="submit" className="w-100">
            Login As Customer
            </Button>
            <Button variant="primary" type="submit" className="w-100">
             Login As Executive
            </Button>
            </div>
            
        </Form>
        <hr />
        <Row>
            <Col>
            <p className="text-decoration ml-8">
                       Don't have an account?    {" "}
                   <Link to="/register" className="text-decoration-none text-primary">
                       SignUp here
              </Link>
              </p>
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