import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Carousel from "react-bootstrap/Carousel";
import Login from "../AptConnect/login.JPG";
import Dashboard from "../AptConnect/aptConn.JPG";
import User from "../AptConnect/aptConnect.JPG";
import Maintenance from "../AptConnect/maintenance.JPG";
import RepairApp from "../AptConnect/repairapp.JPG";
import Repairman from "../AptConnect/repairman.JPG";
import "../App.css";

export class Apartment extends Component {
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
                            src={User}
                            alt="main"
                        />

                        <Carousel.Caption className="content">
                            <h3 className="black-text">
                                New User Landing Page
                            </h3>
                            <p className="black-text">
                                Allows newly registered users to claim which
                                apartment they are living in.
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
                            src={Dashboard}
                            alt="Dashboard"
                        />

                        <Carousel.Caption className="content">
                            <h3 className="black-text">Dashboard</h3>
                            <p className="black-text">
                                From here the logged in user is able to request
                                a common area or maintenance that is needed for
                                their apartment.
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
                            src={Maintenance}
                            alt="Listing"
                        />

                        <Carousel.Caption className="content">
                            <h3 className="black-text">Maintenance Request</h3>
                            <p className="black-text">
                                Allows users to request maintenance that the
                                Repair man will be able to see on his dashboard.
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
                            src={Repairman}
                            alt="User"
                        />

                        <Carousel.Caption className="content">
                            <h3 className="black-text">
                                Maintenance Dashboard
                            </h3>
                            <p className="black-text">
                                Allows the designated maintenance account to
                                check on times available for the common areas,
                                as well as an option to log into the
                                "Maintenance Portal".
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
                            src={RepairApp}
                            alt="User"
                        />

                        <Carousel.Caption className="content">
                            <h3 className="black-text">Maintenance Portal</h3>
                            <p className="black-text">
                                Allows the maintenance man to view the repair
                                request with the newest request on top, they are
                                able to mark the repair as complete and on the
                                user that requested that information it will
                                appear on their repair list as completed.
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

export default Apartment;
