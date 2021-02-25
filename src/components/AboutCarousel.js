import React, { Component } from "react";
import Me from "../me.JPG";
import Nala from "../Nala.jpg";
import cda from "../Cda.jpg";
import Carousel from "react-bootstrap/Carousel";

export class AboutCarousel extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{
                            height: "1000px",
                            width: "auto",
                            border: "5px white solid",
                            borderRadius: "10px",
                        }}
                        src={Me}
                    />
                    <Carousel.Caption>
                        <h3>Photo of myself</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{
                            height: "1000px",
                            width: "auto",
                            border: "5px white solid",
                            borderRadius: "10px",
                        }}
                        src={Nala}
                    />
                    <Carousel.Caption>
                        <h3>My dog Nala</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{
                            height: "1000px",
                            width: "auto",
                            border: "5px white solid",
                            borderRadius: "10px",
                        }}
                        src={cda}
                    />
                    <Carousel.Caption>
                        <h3>My hometown Coeur d' Alene, Idaho</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default AboutCarousel;
