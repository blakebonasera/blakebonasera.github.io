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
                <Col sm="12" md={{ size: 12, offset: 0 }}>
                    <Navbar color="mute" dark expand="md">
                        <NavbarBrand href="/">BB</NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem className="btn">
                                    <NavLink href="https://www.linkedin.com/in/blakebonasera/">
                                        LinkedIn
                                    </NavLink>
                                </NavItem>
                                <NavItem className="btn">
                                    <NavLink href="https://github.com/blakebonasera">
                                        GitHub
                                    </NavLink>
                                </NavItem>
                                <NavItem className="btn">
                                    <NavLink href="/resume">Resume</NavLink>
                                </NavItem>
                                <UncontrolledDropdown
                                    className="btn"
                                    nav
                                    inNavbar
                                >
                                    <DropdownToggle className="btn" nav caret>
                                        Projects
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <Link className="btn" to="/4sale">
                                                4 Sale
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link className="btn" to="/apt">
                                                Apartment Connect
                                            </Link>
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
