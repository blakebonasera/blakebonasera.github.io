import React from "react";
import "../App.css";

import ResumePic from "../BlakeBonasera.Resume.jpg";
import { Link } from "@reach/router";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    Button,
    Container,
    Row,
    Col,
} from "reactstrap";

const Resume = (props) => {
    return (
        <Container>
            <Row>
                <Col xs="12">
                    <CardImg
                        top
                        style={{
                            height: "100%",
                            width: 'auto',
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
