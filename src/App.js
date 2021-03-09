import React from "react";
import Jumbo from "./views/Jumbotron";
import AboutMe from "./views/AboutMe";
import Resume from "./views/Resume";
import Projects from './views/Projects';
import Footer from './views/Footer';
import ForSale from './views/4sale';
import AptCon from './views/AptCon';
import { Router } from "@reach/router";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Jumbo />
            <Router>
                <AboutMe path="/" />
                <Resume path="/resume" />
                <Projects path='/projects' />
                <ForSale path='/4sale' />
                <AptCon path='/aptconnect' />
            </Router>
            <Footer />
        </div>
    );
}

export default App;
