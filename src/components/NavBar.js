import React, { useState } from "react";
import "../App.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container,
    Row,
    Col,
} from "reactstrap";
import { Link } from "@reach/router";

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Container>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 0 }}>
                    <Navbar fluid color="mute" dark expand="md">
                        <NavbarBrand href="/home">BB</NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://www.linkedin.com/in/blakebonasera/">
                                        LinkedIn
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/blakebonasera">
                                        GitHub
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/resume">Resume</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Projects
                                    </DropdownToggle>
                                    <DropdownMenu className="Menu" right>
                                        <DropdownItem>
                                            <Link to="/4sale">4 Sale</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink to="/apt">
                                                Apartment Connect
                                            </NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink to="/movie">
                                                Favorite Movies App
                                            </NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
};

export default Navigation;
