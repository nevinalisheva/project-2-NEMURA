import React from "react";
import Search from "../Components/Search.jsx";
import CardGrid from "../Components/cards/CardGrid";
import PeopleGrid from "../Components/cards/PeopleGrid";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../App.css";
import ResultsCast from "./results/CastGrid";
import SchedGrid from "../Components/ScheduleComp.jsx/SchedGrid.jsx";
import Quotes from "../Components/Quotes/Quotes";
// import MyFavourites from "./MyFavourites.jsx";
import {
  GlobalContext,
  GlobalProvider,
} from "../Components/Context/GlobalState.jsx";
import { TopPicks } from "../Components/TopPicks/TopPicks.jsx";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export const Home = () => {
  const [people, setPeople] = useState([]);
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [submitSearch, setSubmitSearch] = useState(false);

  const [favourites, setFavourites] = useState([]);
  const addToFavourits = (shows) => {
    const newFavoiriteList = [...favourites, shows];
    setFavourites(newFavoiriteList);
    // console.log(favourites, "favories array");
  };
  //   const urls = [`https://api.tvmaze.com/search/shows?q=${searchInput}`, `https://api.tvmaze.com/search/people?q=${searchInput}`];

  async function fetchAll() {
    try {
      const shows = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${searchInput}`
      );
      const showsData = shows.data;
      const people = await axios.get(
        `https://api.tvmaze.com/search/people?q=${searchInput}`
      );
      const peopleData = people.data;
      setShows(showsData);
      setPeople(peopleData);
      setIsLoading(false);
      // console.log({ showsData }, { peopleData });
    } catch (error) {
      console.log(error);
    }
    // console.log(shows);
  }

  useEffect(() => {
    fetchAll();

    return () => {
      setSubmitSearch(false);
    };
  }, [searchInput]);
  // const addToFavourits = (show) => {
  //   const newFavoiriteList = [...favourites, show];
  //   setFavourites(newFavoiriteList);
  // };

  //   console.log(submitSearch, "submitSearch");
  //   console.log(shows, "shows");
  let resultsLength = shows.length + people.length;
  // console.log(shows, "shows i chose");
  return (
    <GlobalProvider>
      <div>
        <div className="hero">
          <Search
            submitSearch={submitSearch}
            setSubmitSearch={setSubmitSearch}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        </div>

        {searchInput!="" && <div id="section">
          <div className="page-body">
            <CardGrid shows={shows} handleFavoriteClick={addToFavourits} />
          </div>
        </div>}
        {/* <div id="section">
        <div className="page-body">
          <CardGrid shows={favourites} handleFavoriteClick={addToFavourits} />
        </div>
      </div> */}
        {/* {!resultsLength && <h2 className="headlines" >No results found</h2>} */}
        {searchInput === ""
          ? null
          : !resultsLength && <h2 className="headlines">No results found</h2>}
        {/* for <strong>"{searchInput}"</strong> */}
        {searchInput!="" && <div className="page-body">
          <PeopleGrid people={people} />
        </div>}
        {/* <SchedGrid /> */}
      </div>
    
      <hr />
      {searchInput==="" && <div className="headlines" id="headlines">
        <h1 >Nemura's Top</h1>
        <TopPicks />
      </div>}
      
      {/* <div className="page-body">
        <CardGrid shows={shows} />
      </div>
      <div className="page-body">
        <PeopleGrid people={people} />
      </div> */}
      {/* <ResultsCast/> */}
      {/* <SchedGrid /> */}
    </GlobalProvider>
  );
};
