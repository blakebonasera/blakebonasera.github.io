import React, { Component } from "react";
import Me from "../About/me.jpg";
import Nala from "../About/Nala.jpg";
import cda from "../About/Cda.jpg";
import Carousel from "react-bootstrap/Carousel";
import Rotate from 'react-reveal/Rotate';
import { Container, Row, Col } from "reactstrap";
import "../App.css";

export class AboutCarousel extends Component {
    render() {
        return (
            <Container>
                <Rotate right>
                <Row>
                <Col className="white-text" xs="12" md={{ offset: 1 }}>
                        <img
                            style={{
                                maxWidth: "50%",
                                width: "auto",
                                border: "5px black solid",
                                borderRadius: "10px",
                            }}
                            src={Me}
                        />
                    </Col>
                </Row>
                </Rotate>
                <Rotate left>
                <Row>
                    <Col className="white-text" xs="3" md={{ offset: 3 }}>
                        <h3>Nala</h3>
                    </Col>
                    <Col xs="9">
                        <img
                            style={{
                                maxWidth: "50%",
                                width: "auto",
                                border: "5px black solid",
                                borderRadius: "10px",
                            }}
                            src={Nala}
                        />
                    </Col>
                </Row>
                </Rotate>
                <Rotate right>                <Row>
                    <Col className="white-text" xs="3" md={{ offset: 6 }}>
                        <h3>Coeur d' Alene, Idaho</h3>
                    </Col>
                    <Col xs="9" md={{ offset:3}}>
                        <img
                            style={{
                                maxWidth: "50%",
                                width: "auto",
                                border: "5px black solid",
                                borderRadius: "10px",
                            }}
                            src={cda}
                        />
                    </Col>
                </Row>
                </Rotate>
            </Container>
        );
    }
}

export default AboutCarousel;
