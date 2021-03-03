import React from "react";
import { Spring } from "react-spring/renderprops";
import { Container, Row, Col } from "reactstrap";
import Sale from "../components/4saleCarousel";

const ForSale = () => {
    return (
        <Spring
            from={{ opacity: 0, marginBottom: -1000 }}
            to={{ opacity: 1, marginBottom: 0 }}
            config={{ delay: 100 }}
        >
            {(props) => (
                <div style={props}>
                    <Container>
                        <Row>
                            <Col xs="12">
                                <h3>4 Sale</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12">
                                <Sale />
                            </Col>
                        </Row>
                    </Container>
                </div>
            )}
        </Spring>
    );
};
export default ForSale;
