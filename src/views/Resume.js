import React from "react";
import "../App.css";
import ResumePic from "../BlakeBonasera.Resume.jpg";
import { Spring } from "react-spring/renderprops";
import { Container, Row, Col } from "reactstrap";

const Resume = () => {
    return (
        <Container >
            <Spring from={{opacity:0, marginBottom:-1000}} to={{opacity:1, marginBottom:0}} config={{delay: 100}}>
                {(props) => (
                    <div style={props}>
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
                    </div>
                )}
            </Spring>
        </Container>
    );
};

export default Resume;
