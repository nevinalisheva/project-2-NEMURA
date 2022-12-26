import React from "react";
import { useState, useEffect } from "react";
import image from "../assets/Image_not_available.png";
import "./seasons.css";

const ReadMore = ({ ep }) => {
  const text = ep;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text?.slice(0, 90) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {text ? (isReadMore ? "... Read more" : " Show less") : null}
      </span>
    </p>
  );
};

const Seasons = ({ id, selected }) => {
  const [episodes, setEpisodes] = useState([]);
  const [isloading, setIsloading] = useState(true);
  // console.log(selected, "selected")

  const fetchEpisodes = async () => {
    const dataEpisodes = await fetch(
      `https://api.tvmaze.com/shows/${id}/episodes`
    );
    const episodeDetail = await dataEpisodes.json();
    setEpisodes(episodeDetail);
    setIsloading(false);
  };
  const Filter = () => {
    return isloading ? (
      `loading...`
    ) : (
      <>
        <div>
          {episodes
            .filter((episode) => episode.season === selected)
            .map((filteredEpisodes) => (
              <li>{filteredEpisodes.id}</li>
            ))}
        </div>
      </>
    );
  };

  useEffect(() => {
    fetchEpisodes();
  }, []);
  // console.log(episodes, "episodes");
  // let ep= null;
  // const strippedHtml = myHTML.replace(/<[^>]+>/g, '');
  return isloading ? (
    `loading...`
  ) : (
    <>
      <div className="seasons-section">
        {episodes
          .filter((episode) => episode.season === selected)
          .map((filteredEpisodes) => (
            <div className="episode-row">
              <div className="episode-image">
                <img
                  className="episode-img"
                  alt="image"
                  src={
                    filteredEpisodes.image
                      ? filteredEpisodes.image.medium
                      : image
                  }
                />
              </div>
              <div className="h">
                <div className="x">
                  {/* <div>
                    <p className="episode-name"><strong>{filteredEpisodes.number}.</strong> </p>
                    </div> */}
                  <div className="episode-info">
                    <p className="episode-name">
                      <strong>
                        {filteredEpisodes.number}. {filteredEpisodes.name}
                      </strong>{" "}
                    </p>
                  </div>
                  <div>
                    {filteredEpisodes.rating.average && (
                      <p>⭐️ {filteredEpisodes.rating.average}/10</p>
                    )}
                  </div>
                  <div>
                    <p>
                      {filteredEpisodes.airdate.split("-").reverse().join(".")}
                    </p>
                  </div>
                  {/* <div>
                        <p><strong>Runtime: </strong>{filteredEpisodes.runtime}m</p>
                    </div> */}
                </div>
                <div className="y">
                  <div className="summary">
                    <ReadMore
                      ep={filteredEpisodes.summary?.replace(/<[^>]+>/g, "")}
                    ></ReadMore>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Seasons;
