import React, { useState } from "react";
import '../App.css';
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
    
} from "reactstrap";

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='Nav'>
            <Navbar fluid color="mute" dark expand="md">
                <NavbarBrand href="/">BB</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="https://www.linkedin.com/in/blakebonasera/">LinkedIn</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/blakebonasera">
                                GitHub
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Projects
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>4 Sale</DropdownItem>
                                <DropdownItem>Apartment Connect</DropdownItem>
                                <DropdownItem>Favorite Movies App</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;
