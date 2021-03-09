import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
} from "reactstrap";
import Slide from 'react-reveal/Slide';
import saleDash from "../4sale/Dashboard.JPG";
import aptDash from "../AptConnect/repairapp.JPG";
import { Link } from "@reach/router";

const Projects = () => {
    return (
        <Container>
            <Row>
                <Col xs="6">
                    <Card
                        style={{
                            border: "3px solid black",
                            borderRadius: "15px",
                        }}
                    >
                        <CardImg
                            top
                            style={{
                                border: "3px solid black",
                                borderRadius: "10px",
                            }}
                            width="100%"
                            src={saleDash}
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle tag="h5">4 Sale</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                                Python | Django | Bootstrap
                            </CardSubtitle>
                            <CardText>
                                A market place to sell clothing or other hype
                                items in the Seattle area.
                            </CardText>
                            <Link to="/4sale">
                                <Button style={{
                                    backgroundColor: "#4285f4"
                                }}>4 Sale</Button>
                            </Link>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="6">
                    <Card
                        style={{
                            border: "3px solid black",
                            borderRadius: "15px",
                        }}
                    >
                        <CardImg
                            top
                            style={{
                                border: "2px solid black",
                                borderRadius: "10px",
                            }}
                            width="100%"
                            src={aptDash}
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle tag="h5">Apartment Connect</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                                React | MongoDB | Mongoose | Express | Bootstrap
                            </CardSubtitle>
                            <CardText>
                                App for managing an apartment complex
                            </CardText>
                            <Link to="/aptconnect">
                                <Button style={{
                                    backgroundColor: "#4285f4"
                                }}>Apartment Connect</Button>
                            </Link>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Projects;
