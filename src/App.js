import React from "react";
import Jumbo from "./views/Jumbotron";
import AboutMe from "./views/AboutMe";
import Resume from "./views/Resume";
import { Router } from "@reach/router";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Jumbo />
            <Router>
                <AboutMe path="/" />
                <Resume path="/resume" />
            </Router>
        </div>
    );
}

export default App;
