import React from "react";
import "../App.css";
import { Jumbotron, Container } from "reactstrap";

const Jumbo = (props) => {
    return (
        <div>
            <Jumbotron mute style={{ background: "#4285f4" }} fluid>
                <Container fluid>
                    <h1 className="display-3 white-text">Blake Bonasera</h1>
                    <p className="lead white-text">
                        "You miss 100% of the shots you don't take. - Wayne
                        Gretzky" - Michael Scott
                    </p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Jumbo;
