import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Cardn from "./Cardn";
import "./cards.css";

const Ngrid = ({ data, headline, isLoading }) => {
  const { addTitleToFavourits, favourites } = useContext(GlobalContext);
  return isLoading ? (
    `loading...`
  ) : (
    <section>
      <hr></hr>
      <div className="headlines" id="headlines">
        <h1>
          <strong>{data.length ? headline : null}</strong>
        </h1>
      </div>
      <div className="mul">
        <div className="cards-section">
          {data.map((data, i) => {
            return (
              <Cardn
                addTitleToFavourits={addTitleToFavourits}
                favourites={favourites}
                key={i}
                title={data.name}
                id={data.id}
                image={data.image}
                description={data.network?.name || data.country?.name}
                headline={headline}
                data={data}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Ngrid;
