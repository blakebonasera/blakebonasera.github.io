import React, { Component } from "react";
import Me from "../About/me.jpg";
import Nala from "../About/Nala.jpg";
import cda from "../About/Cda.jpg";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "reactstrap";
import "../App.css";

export class AboutCarousel extends Component {
    render() {
        return (
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img
                            style={{
                                maxWidth: "100%",
                                width: "auto",
                                border: "5px black solid",
                                borderRadius: "10px",
                            }}
                            src={Me}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{
                                maxWidth: "100%",
                                width: "auto",
                                border: "5px black solid",
                                borderRadius: "10px",
                            }}
                            src={Nala}
                        />
                        <Carousel.Caption className="content">
                            <h3 className="black-text text">Nala</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{
                                maxWidth: "100%",
                                width: "auto",
                                border: "5px black solid",
                                borderRadius: "10px",
                            }}
                            src={cda}
                        />
                        <Carousel.Caption className="content">
                            <h3 className="black-text text">
                                Coeur d' Alene, Idaho
                            </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        );
    }
}

export default AboutCarousel;
