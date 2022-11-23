import React from "react";
import "../App.css";
import Quotes from "../Components/Quotes/Quotes";
import "./About.css";
import "../Components/cards/cards.css";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const muly = {
  name: "Muly",
  linkedin: "https://www.linkedin.com/in/mulugeta-birish-260035251/",
  github: "https://github.com/mulybirish",
  image: "/muly.jpg"
};

const lera = {
  name: "Lera",
  linkedin: "https://www.linkedin.com/in/lera-holikova/",
  github: "https://github.com/LeraHolikova",
  image: "/lera.jpg"
};

const nevin = {
  name: "Nevin",
  linkedin: "https://www.linkedin.com",
  github: "https://github.com/nevinalisheva",
  image: "/nevin.jpg"
};

const creators = [nevin, muly, lera];

export const About = () => {
  return (
    <div>
      <div className="hero">
        <Quotes />
      </div>
      <div className="article">
        <h1>Goal:</h1>
        <p>
          It's our second project at Wild Code School that we created in a
          month's time. We used all our knowledge of React, JavaScript, and CSS.
          It was possible to implement that with the API from www.tvmaze.com.
        </p>
        <p>
          This website allows you to search for any TV show and get information
          about its actors/actresses, seasons/episodes as well as its
          description. The nicest thing is the rating, so it's easy to see if
          the exact TV show is worth watching.
        </p>
        <h1>Sitemap:</h1>
        <div>
          <ul>
            <li>"Search bar" is where you can search for an exact TV show</li>
            <li>
              "My Favourites" page is created to allow you to save your
              favourite TV shows in one place
            </li>
            <li>
              "Top 50 TV shows" - if you don't know what to watch, you can look
              for top-rated TV shows of all times
            </li>
            <li>
              "Quotes" are there to display every time a new quote from a random
              TV show
            </li>
            <li>
              "NEMURA's TOP" was added to make our website more unique by
              displaying TV shows based on our recommendations
            </li>
          </ul>
        </div>
      </div>
      {/* <h2 className="creators">Creators</h2> */}
      <div className="cards-section-about">
        {creators.map((element) => {
          return (
            <div className="card">
              <div className="card-image">
                <img className="card-img" src={element.image} />
              </div>
              <div className="about-info">
                <p className="result-name">
                  <strong>{element.name}</strong>
                </p>
              </div>
              <div className="Footer-about">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={element.github}
                  className="github social inabout"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={element.linkedin}
                  className="linkedin social inabout"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
