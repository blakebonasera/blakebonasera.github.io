import React from "react";
import Jumbo from "./views/Jumbotron";
import AboutMe from "./views/AboutMe";
import Resume from "./views/Resume";
import Sale from './views/4sale';
import Apartment from './views/AptCon';
import Footer from './views/Footer';
import { Router } from "@reach/router";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Jumbo />
            <Router>
                <AboutMe path="/" />
                <Resume path="/resume" />
                <Apartment path="/apt" />
                <Sale path="/4sale" />
            </Router>
            <Footer />
        </div>
    );
}

export default App;
