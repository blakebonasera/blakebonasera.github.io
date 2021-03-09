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
import RubberBand from 'react-reveal/RubberBand';
import { Link } from "@reach/router";

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Container>
            <Row>
                <RubberBand top cascade>
                <Col sm="12" md={{ size: 12, offset: 0 }}>
                    <Navbar color="mute" dark expand="md">
                        <NavbarBrand className='text' href="/">BB</NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem className="btn">
                                    <NavLink className='text' href="https://www.linkedin.com/in/blakebonasera/">
                                        LinkedIn
                                    </NavLink>
                                </NavItem>
                                <NavItem className="btn">
                                    <NavLink className='text' href="https://github.com/blakebonasera">
                                        GitHub
                                    </NavLink>
                                </NavItem>
                                <NavItem  className="btn">
                                    <NavLink className='text' href="/resume">Resume</NavLink>
                                </NavItem>
                                <NavItem  className="btn">
                                    <NavLink className='text' href="/projects">Projects</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Col>
                </RubberBand>
            </Row>
        </Container>
    );
};

export default Navigation;
