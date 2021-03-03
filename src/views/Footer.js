import React from "react";
import "../App.css";
import { Container, Row, Col } from "reactstrap";

const Footer = (props) => {
    return (
        <Container style={{ background: "#4285f4" }} fluid fixed="bottom" >
            
            <Row >
                <Col xs="12">
                <br/>
                    <h4 className='text'>
                        <i className="fa fa-envelope-o footer  white-text">
                            {" "}
                            : blakebonasera@gmail.com
                        </i>
                    </h4>

                    <h4 className='text'>
                        <i className="fas fa-phone footer  white-text">
                            {" "}
                            : (208)819-6239
                        </i>
                    </h4>
                    <br/>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
