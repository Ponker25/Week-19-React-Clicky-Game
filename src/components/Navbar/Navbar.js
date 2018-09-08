import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => 
    <nav className="navbar navbar-default">
        <div className="navbar-header">
            <h1 className="navbar-brand">NFL Mascot Clicky-Game</h1>
            <h4 className="score"> SCORE: </h4>
            <h4 className="top-score">CORRECT GUESSES:</h4>
            </div>
    <div className="directions">
        <h2> Earn points by clicking on a match, BUT dont click on any more than once!</h2>
    </div>
    </nav>
                
export default Navbar;