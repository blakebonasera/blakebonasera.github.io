import React from "react";
import '../App.css'
import Navigation from '../components/NavBar'
import { Jumbotron, Container } from "reactstrap";

const Jumbo = (props) => {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Blake Bonasera</h1>
                    <p className="lead">"You miss 100% of the shots you don't take. - Wayne Gretzky" - Michael Scott</p>
                    <div className="Nav">
                    <Navigation />
                    </div>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Jumbo;