import React from "react";
import { Container, Row, Col } from "reactstrap";
import AboutCarousel from "../components/AboutCarousel";
import { Spring } from 'react-spring/renderprops';
import "../App.css";
const AboutMe = (props) => {
    return (
        <Spring from={{opacity:0, marginTop: -2000}} to={{opacity:1, marginTop:0}} config={{delay: 100}}>
            {(props) => (
                <div style={props}>

        <Container>
            <Row>
                <Col sm="12" md={{ size: 12, offset: 0 }}>
                    <h3>About Me</h3>
                </Col>
            </Row>

            <Row>
                <Col sm="12" md={{ size: 12, offset: 0 }}>
                    <h6>
                        Passionate full stack developer with a robust background
                        in customer service and relationship management. <br />
                        I love nothing more than finding elegant, efficient and
                        functional solutions to complex technical problems.
                        <br />I am quick to learn and love building out my
                        existing skill set by picking up new technologies.{" "}
                        <br />
                        When I’m not coding on a super cool project, you’ll find
                        me immersed in my passions for the auto industry, gaming
                        and comedy. <br />
                        I’m currently looking for an opportunity to join a
                        mission-driven team in a dynamic, fast-paced setting.
                    </h6>
                </Col>
            </Row>

            <Container >
                <Row>
                    <Col xs="12">
                        <br />
                    </Col>
                </Row>
            </Container>
            <AboutCarousel />
            <Container >
                <Row>
                    <Col xs="12">
                        <br />
                    </Col>
                </Row>
            </Container>
        </Container>
                </div>
            )}
        </Spring>
    );
};

export default AboutMe;
