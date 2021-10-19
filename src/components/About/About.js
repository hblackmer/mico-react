import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="About">
                <Container className="about-container px-lg-5">
                    <h2 className="text-white text-center" id="about">What is Mico?</h2>
                    <Row>
                        <Col md="4" className="about-cards">
                            <Card className="about-bg">
                                <CardBody className="about-body p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div className="about-icons"><img src="/assets/flash.png" className="about_img" /></div>
                                    <CardTitle tag="h2">A study tool</CardTitle>
                                    <CardSubtitle tag="h6">Customizable and randomized questions.</CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4"  className="about-cards">
                            <Card className="about-bg">
                                <CardBody className="about-body p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div className="about-icons"><img src="/assets/test.png" className="about_img" /></div>
                                    <CardTitle tag="h2">Flash cards</CardTitle>
                                    <CardSubtitle tag="h6">Flash card style questions.</CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4" className="about-cards">
                            <Card className="about-bg">
                                <CardBody className="about-body p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div className="about-icons"><img src="/assets/select.png" className="about_img" /></div>
                                    <CardTitle tag="h2">Test report</CardTitle>
                                    <CardSubtitle tag="h6">Comprehensive report of your question/answers for review at the end of your test.</CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
  
export default About;  