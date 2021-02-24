import React, { Component } from "react";
import Me from "../me.jpeg";
import Nala from "../Nala.JPG";
import cda from "../Cda.jpg";
import Carousel from "react-bootstrap/Carousel";

export class AboutCarousel extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                style={{ height: "75%" }}
                                className="d-block w-100"
                                src={Me}
                            />
                            <Carousel.Caption>
                                <h3>Photo of myself</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={Nala} />
                            <Carousel.Caption>
                                <h3>My dog Nala</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={cda} />
                            <Carousel.Caption>
                                <h3>My hometown Coeur d' Alene, Idaho</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default AboutCarousel;
