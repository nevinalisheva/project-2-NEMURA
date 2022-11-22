import React from "react";
import "../App.css";
import Quotes from "../Components/Quotes/Quotes"
import "./About.css"

export const About = () => {
    return (
    <div>
        <div className="hero">
            <Quotes />
        </div>
        <h3 className="heading-about">Goal:</h3>
        <p className="text-about">The goal of this project was to create a TV show website with React library using different API's.</p>
        <h3 className="heading-about">Time:</h3>
        <p className="text-about">1 month</p>
        <h3 className="heading-about">Contributors:</h3>
        <p className="text-about">NEMURA project was done by a group of Wild Code School students:<a className="link-about" href="https://github.com/nevinalisheva"> Nevin</a>, <a className="link-about" href="https://github.com/mulybirish"> Muly </a>and <a className="link-about" href="https://github.com/LeraHolikova">Lera.</a></p>
    </div>
    );
};