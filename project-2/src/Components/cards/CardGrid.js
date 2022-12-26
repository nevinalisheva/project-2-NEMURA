import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Card from "./Card";
import "./cards.css";

const CardGrid = ({ data, headline, isLoading }) => {
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
              <Card
                addTitleToFavourits={addTitleToFavourits}
                favourites={favourites}
                key={i}
                title={data.name || data.person.name}
                id={data.id || data.person.id}
                image={data.image}
                description={data.network?.name || data.country?.name}
                headline={headline}
                data={data}
                imageCast={data.character?.image || data.person?.image}
                titleCharacter={data.character?.name}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
