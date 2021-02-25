import React from "react";
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    Container,
    Row,
    Col,
} from "reactstrap";
import AboutCarousel from "../components/AboutCarousel";
// import Me from "../me.jpeg";
// import Nala from "../Nala.jpg";
// import Cda from "../Cda.jpg";

const AboutMe = (props) => {
    return (
        <Container>
            <AboutCarousel />
            <Card>
                <CardBody>
                    <CardTitle tag="h3">About Me</CardTitle>
                </CardBody>
                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 12, offset: 0 }}>
                            <CardBody>
                                <CardText
                                    style={{
                                        border: "3px black solid",
                                        borderRadius: "5px",
                                    }}
                                >
                                    <strong>
                                        Passionate full stack developer with a
                                        robust background in customer service
                                        and relationship management. <br />
                                        I love nothing more than finding
                                        elegant, efficient and functional
                                        solutions to complex technical problems.
                                        <br />
                                        I am quick to learn and love building
                                        out my existing skill set by picking up
                                        new technologies. <br />
                                        When I’m not coding on a super cool
                                        project, you’ll find me immersed in my
                                        passions for the auto industry, gaming
                                        and comedy. <br />
                                        I’m currently looking for an opportunity
                                        to join a mission-driven team in a
                                        dynamic, fast-paced setting.
                                    </strong>
                                </CardText>
                            </CardBody>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </Container>
    );
};

export default AboutMe;
