import React from "react";
import "../App.css";
import ResumePic from "../BlakeBonasera.Resume.jpg";
import { Spring } from "react-spring/renderprops";
import { Container, Row, Col } from "reactstrap";
import Slide from 'react-reveal/Slide';


const Resume = () => {
    return (
        <Container >
            <Slide up>
                        <Row>
                            <Col xs="12">
                                <img
                                    style={{
                                        maxWidth: "100%",
                                        border: "5px black solid",
                                        borderRadius: "5px",
                                        margin: "0px auto",
                                    }}
                                    src={ResumePic}
                                    alt="Blake Bonasera Resume"
                                />
                                
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <br />
                            </Col>
                        </Row>
                        </Slide>
        </Container>
    );
};

export default Resume;
