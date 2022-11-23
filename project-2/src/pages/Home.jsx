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
import { TopPicks } from "../Components/TopPicks/TopPicks.jsx";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export const Home = () => {
  const [people, setPeople] = useState([]);
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [submitSearch, setSubmitSearch] = useState(false);
  const onSubmit = () => setSubmitSearch(true)
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
      console.log({ showsData }, { peopleData });
    } catch (error) {
      console.log(error);
    }
    console.log(shows);
  }

  useEffect(() => {
    fetchAll();

    return () => {
      setSubmitSearch(false);
    };
  }, [submitSearch]);

  //   console.log(submitSearch, "submitSearch");
  //   console.log(shows, "shows");

  return (
    <div>
      <div className="hero">
        <Search
          submitSearch={submitSearch}
          setSubmitSearch={setSubmitSearch}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <div id="section" />
      </div>
      <hr />
      <div>
      {searchInput=== "" &&
      <>
      <h2 className="headlines">NEMURA's TOP</h2>
        <TopPicks /> 
        </>}
      </div>
      <div className="page-body">
        <CardGrid shows={shows} />
      </div>
      <div className="page-body">
        <PeopleGrid people={people} />
      </div>
      {/* <ResultsCast/> */}
      {/* <SchedGrid /> */}
    </div>
  );
};
