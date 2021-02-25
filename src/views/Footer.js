import React from "react";
import "../App.css";
import { Container, Row, Col } from "reactstrap";

const Footer = (props) => {
    return (
        <Container fixed="bottom" mute>
            <Row fluid mute>
                <Col xs="12">
                    <h4>
                        <i className="fa fa-envelope-o footer  white-text">
                            {" "}
                            : blakebonasera@gmail.com
                        </i>
                    </h4>

                    <h4>
                        <i class="fas fa-phone footer white-text">
                            {" "}
                            : (208)819-6239
                        </i>
                    </h4>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
