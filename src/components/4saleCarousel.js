import React, { Component } from "react";
import Login from "../4sale/Capture.JPG";
import Dashboard from "../4sale/Dashboard.JPG";
import User from "../4sale/UserPage.JPG";
import Listing from "../4sale/ItemPage.JPG";
import New from "../4sale/NewListing.JPG";
import "../App.css";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "reactstrap";

export class Sale extends Component {
    render() {
        return (
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img
                            style={{
                                maxWidth: "100%",
                                border: "5px black  solid",
                                borderRadius: "10px",
                            }}
                            className="w-90"
                            src={Login}
                            alt="LoginReg"
                        />
                        <Carousel.Caption className="content">
                            <h3 className="black-text">
                                Login and Registration
                            </h3>
                            <p className="black-text">
                                Seemless login and registration with bcrypt for
                                hashing passwords in database.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{
                                maxWidth: "100%",
                                border: "5px black solid",
                                borderRadius: "10px",
                            }}
                            className=" w-90"
                            src={Dashboard}
                            alt="Dashboard"
                        />

                        <Carousel.Caption className="content">
                            <h3 className="black-text">
                                The Dashboard of 4Sale
                            </h3>
                            <p className="black-text">
                                Allows users to click on their profile and see
                                their listings and favorited items, as well as
                                allows users to see new listings from all users.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{
                                maxWidth: "100%",
                                border: "5px black  solid",
                                borderRadius: "10px",
                            }}
                            className=" w-90"
                            src={New}
                            alt="New Listing"
                        />

                        <Carousel.Caption className="content">
                            <h3 className="black-text">New Listing Page</h3>
                            <p className="black-text">
                                Form used to allow users to submit their item
                                they want to sell.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{
                                maxWidth: "100%",
                                border: "5px black  solid",
                                borderRadius: "10px",
                            }}
                            className=" w-90"
                            src={Listing}
                            alt="Listing"
                        />

                        <Carousel.Caption className="content">
                            <h3 className="black-text">Item page</h3>
                            <p className="black-text">
                                Allows users to leave a comment, favorite and
                                email the selller. If User created the listing
                                they are able to update the listing from the
                                page.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{
                                maxWidth: "100%",
                                border: "5px black  solid",
                                borderRadius: "10px",
                            }}
                            className=" w-90"
                            src={User}
                            alt="User"
                        />

                        <Carousel.Caption className="content">
                            <h3 className="black-text">User Page</h3>
                            <p className="black-text">
                                Allows users to see their listings as well as
                                allows the logged in user to view items they are
                                watching.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Row>
                    <Col>
                        <br />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Sale;
