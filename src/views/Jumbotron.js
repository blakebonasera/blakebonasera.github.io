import React from "react";
import "../App.css";
import Navigation from '../components/NavBar';
import { Jumbotron, Container } from "reactstrap";

const Jumbo = () => {
    return (
        <div>
            <Jumbotron   style={{ background: "#4285f4" }} >
                <Container >
                    <h1 className="display-3 title white-text">Blake Bonasera</h1>
                    <p className="lead title white-text">
                        "You miss 100% of the shots you don't take. - Wayne
                        Gretzky" - Michael Scott
                    </p>
                </Container>
                <Navigation />
            </Jumbotron>
        </div>
    );
};

export default Jumbo;
