import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Cardn from "./Cardn";
import "./cards.css";

const Ngrid = ({ people, shows, isLoading }) => {
  const { addTitleToFavourits, favourites } = useContext(GlobalContext);
  console.log(shows);
  return isLoading ? (
    `loading...`
  ) : (
    <section>
      <hr></hr>
      <div className="headlines" id="headlines">
        <h1>
          <strong>{shows.length ? "Titles" : null}</strong>
        </h1>
      </div>
      <div className="mul">
        <div className="cards-section">
          {shows.map((show, i) => {
            return (
              <Cardn
                addTitleToFavourits={addTitleToFavourits}
                favourites={favourites}
                key={i}
                title={show.show.name}
                id={show.show.id}
                image={show.show?.image}
                description={show.show?.network?.name}
                show={show.show}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Ngrid;
