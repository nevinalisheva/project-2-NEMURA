import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image from "../assets/Image_not_available.png";
import axios from "axios";
import CardGrid from "../Components/cards/CardGrid";
import { HashLink as Link } from "react-router-hash-link";
import Card from "../Components/cards/Card";
const PeoplePage = () => {
  const params = useParams();
  const [people, setPeople] = useState({});
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setLoading(false);
  //     }, 800);
  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }, []);

  const fetchPeople = async () => {
    const data = await fetch(
      `https://api.tvmaze.com/people/${params.id}?embed=castcredits`
    );
    const dataPeople = await data.json();
    setPeople(dataPeople);
    setLoading(false);
  };

  useEffect(() => {
    fetchPeople();
    // console.log(people, "dataPeopleEffect");
  }, []);
  // console.log(people, "dataPeople");

  let urls = [];
  let IDs = [];
  const getId = (str) => {
    return str.split("/")[4];
  };

  if (!loading) {
    const arrayShows = people._embedded.castcredits;
    for (let i = 0; i < arrayShows.length; i++) {
      urls.push(arrayShows[i]._links.show.href);
    }
  }

  if (!loading) {
    const arrayShows = people._embedded.castcredits;
    // console.log(arrayShows, "arrayShows");
    for (let i = 0; i < arrayShows.length; i++) {
      IDs.push(getId(arrayShows[i]._links.show.href));
    }
  }

  // console.log(urls, "urls");
  // console.log(IDs, "IDs");

  const handleFetching = async (setResp, setLoading) => {
    Promise.all(urls.map((url) => axios.get(url)))
      .then(
        axios.spread((...allData) => {
          // console.log(allData, "ilk consol");
          setResp(allData.map((show) => show.data));

          // && resp[1].data
          // setResp(resp[1].data);
          // console.log(allData);
          if (allData) {
            setLoading(false);
          }
        })
      )
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    handleFetching(setShows, setIsLoading);
  }, [people]);

  // console.log(shows, "shows");

  if (!isLoading) {
    // console.log('rerender')
    const ratingConditional = (rating) => {
      if (rating <= 2) {
        return "⭐️";
      }
      if (rating > 2 && rating <= 4) {
        return "⭐️ ⭐️";
      }
      if (rating > 4 && rating <= 6) {
        return "⭐️ ⭐️ ⭐️";
      }
      if (rating > 6 && rating <= 8) {
        return "⭐️ ⭐️ ⭐️ ⭐️";
      }
      if (rating > 8 && rating <= 10) {
        return "⭐️ ⭐️ ⭐️ ⭐️ ⭐️";
      } else {
        return "---";
      }
    };

    return (
      <>
        <div className="hero2"></div>
        <div className="headlines" id="headlines">
          <h1>
            <strong>About</strong>
          </h1>
        </div>

        <div>
          <div className="wrap">
            <div className="content">
              <div className="cards-image">
                <img
                  className="cardpeople-img"
                  alt="person-pic"
                  src={people.image ? people.image?.original : image}
                />
              </div>
              <div className="cards-info">
                <div className="info">
                  <p className="result-name">
                    <strong>{people.name}</strong>{" "}
                  </p>

                  <p>
                    {people.gender
                      ? people.gender === "Male"
                        ? "Actor"
                        : "Actress"
                      : "Actor/Actress"}
                  </p>
                  {people.birthday && (
                    <p>
                      Born{" "}
                      {people.deathday !== null
                        ? `${people.birthday
                            ?.split("-")
                            .reverse()
                            .join(".")} - Died ${people.deathday
                            ?.split("-")
                            .reverse()
                            .join(".")}`
                        : people.birthday?.split("-").reverse().join(".")}
                    </p>
                  )}
                  {people.country?.name && (
                    <p>
                      From{" "}
                      {people.country?.name ? people.country.name : " Unknown"}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="headlines" id="headlines">
              {shows !== [] && (
                <h1>
                  <strong>Known For</strong>
                </h1>
              )}
            </div>
            <div className="mul">
              <section className="cards-section">
                {!isLoading &&
                  shows.map((show, index) => {
                    return (
                      <div key={index}>
                        <div>
                          <Link
                            className="card"
                            onClick={() => {
                              window.scroll(0, 0);
                            }}
                            to={"/shows/" + show.name + "/" + IDs[index]}
                          >
                            <div className="card-image">
                              <img
                                alt="show-pic"
                                className="card-img"
                                src={show.image ? show.image?.medium : image}
                              />
                            </div>
                            <div className="card-info">
                              <p className="result-name">
                                <strong>{show.name}</strong>
                              </p>
                              <p>
                                Network:{" "}
                                {show.network && show.network.name
                                  ? show.network.name
                                  : " Unknown"}
                              </p>
                              <p>
                                <strong> </strong>
                                {ratingConditional(
                                  Math.round(show.rating?.average)
                                )}
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
              </section>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default PeoplePage;
