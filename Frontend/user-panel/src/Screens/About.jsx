import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaLightbulb, FaUsersCog, FaGlobe, FaBullseye, FaEye } from 'react-icons/fa';

const About = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="bg-primary text-white text-center py-5">
                <Container>
                    <h1 className="display-3 fw-bold">About Us</h1>
                    <p className="lead">Empowering businesses with an efficient and scalable ticket-based support system.</p>
                </Container>
            </div>

            {/* Key Features Section */}
            <Container className="my-5 text-center">
                <Row>
                    <Col md={4} className="mb-4">
                        <FaLightbulb size={50} className="text-warning mb-3" />
                        <h4 className="fw-bold">Innovative Solutions</h4>
                        <p>Reliable ticketing system designed for efficiency and ease of use.</p>
                    </Col>
                    <Col md={4} className="mb-4">
                        <FaUsersCog size={50} className="text-success mb-3" />
                        <h4 className="fw-bold">User-Friendly</h4>
                        <p>Intuitive and easy-to-use interface for seamless support.</p>
                    </Col>
                    <Col md={4} className="mb-4">
                        <FaGlobe size={50} className="text-info mb-3" />
                        <h4 className="fw-bold">Global Reach</h4>
                        <p>Scalable support system trusted by businesses worldwide.</p>
                    </Col>
                </Row>
            </Container>

            {/* Mission & Vision Section */}
            <Container className="my-5 text-center">
                <Row>
                    <Col lg={6} className="mb-4">
                        <FaBullseye size={50} className="text-danger mb-3" />
                        <h3 className="fw-bold text-primary">Our Mission</h3>
                        <p>To streamline customer support with an intelligent and efficient ticketing system.</p>
                    </Col>
                    <Col lg={6} className="mb-4">
                        <FaEye size={50} className="text-secondary mb-3" />
                        <h3 className="fw-bold text-success">Our Vision</h3>
                        <p>To be the leading provider of smart and scalable customer support solutions.</p>
                    </Col>
                </Row>
            </Container>

            {/* Call to Action Section */}
            <div className="bg-light py-5 text-center">
                <Container>
                    <h2 className="fw-bold">Transform Your Customer Support Today</h2>
                    <p className="mb-4">Join us in revolutionizing the way businesses handle customer inquiries.</p>
                </Container>
            </div>
        </div>
    );
};

export default About;
