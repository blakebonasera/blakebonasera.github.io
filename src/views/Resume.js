import React from "react";
import "../App.css";

import ResumePic from "../BlakeBonasera.Resume.jpg";

import { Container, Row, Col } from "reactstrap";

const Resume = (props) => {
    return (
        <Container >
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
        </Container>
    );
};

export default Resume;
