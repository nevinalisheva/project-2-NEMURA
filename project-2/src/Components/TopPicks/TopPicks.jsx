import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import React, { useState, useEffect, useNavigate } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import 'react-alice-carousel/lib/alice-carousel.css';
// import Details from "../../pages/Details";

// Handle API fetching: change to custom hook!



function TopPicks({ selectedMovie, setSelectedMovie }) {
  const urls = ["https://api.tvmaze.com/shows/30", "https://api.tvmaze.com/shows/150", "https://api.tvmaze.com/shows/179", "https://api.tvmaze.com/shows/102", "https://api.tvmaze.com/shows/32", "https://api.tvmaze.com/shows/169", "https://api.tvmaze.com/shows/161", "https://api.tvmaze.com/shows/527", "https://api.tvmaze.com/shows/748", "https://api.tvmaze.com/shows/30770", "https://api.tvmaze.com/shows/49945", "https://api.tvmaze.com/shows/16149", "https://api.tvmaze.com/shows/29191", "https://api.tvmaze.com/shows/44778", "https://api.tvmaze.com/shows/305"];
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleFetching = async (setResp, setLoading) => {
    Promise.all(urls.map((url)=> axios.get(url)))
      .then(axios.spread((...allData)=> {
      setResp(allData.map(show => show.data));
        }))
        .catch((e) => {
          console.log(e);
          setLoading(false);
        });
    };
    useEffect(() => {
      handleFetching(setShows, setLoading);
    }, []);
    // console.log(shows, "Nshows");
  // const navigate = useNavigate;

 
  //Track loading state
  // if (loading) {
  //   return <h2> loading..</h2>;
  // }

  //Mapping through images
  const image = shows.map((e, i) => (
    <NavLink key={i} to={"/shows/" + e.name + "/" + e.id}>
    <img src={e.image.original} alt={e.name} onClick={() => setSelectedMovie(e)} />
      <div>
        <p>{e.image.name}</p>
      </div>
    </NavLink>
  ));

  //Import random picture into slider
  // const randomNumber = Math.floor(Math.random() * images.length) - 5;
  // const randomArray = image.slice(randomNumber, randomNumber + 15);

  //Responsive number of pictures
  const responsive = {
    0: { items: 1 },
    450: {items: 2},
    768: { items: 3 },
    1024: { items: 4 },
    1220: {items: 5}
  };

  return (
    <div className="splideN">
      <AliceCarousel
        responsive={responsive}
        mouseTracking
        items={image}
        controlsStrategy="alternate"
      />
    </div>
  );
}

export { TopPicks };
