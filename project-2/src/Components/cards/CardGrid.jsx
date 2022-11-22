import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import AddToFavourite from "../favourites/AddToFavourite";
import Card from "./Card";
import "./cards.css";
import { HashLink as Link } from "react-router-hash-link";

const CardGrid = ({ shows, isLoading, handleFavoriteClick }) => {
  const { addTitleToFavourits, favourites, removeTitleFromFavourits } =
    useContext(GlobalContext);
  // console.log(addTitleToFavourits, "addTitleToFavourits from my cardgrid page");

  // const addedShow = favourites.find((i) => i.id === show.id);
  // const avoidDuplicate = addedShow ? true : false;

  return isLoading ? (
    `loading...`
  ) : (
    <section >
      <hr></hr>
      <div className="headlines" id="headlines">
        <h1><strong>{shows.length ? "Titles" : null}</strong></h1>
      </div>
      <div className="mul">
        <div className="cards-section">
          {shows.map((show) => {
            return (
                <Card
                  addTitleToFavourits={addTitleToFavourits}
                  removeTitleFromFavourits={removeTitleFromFavourits}
                  favourites={favourites}
                  key={show.show?.id}
                  show={show}
                  // type={"favourites"}
                />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
