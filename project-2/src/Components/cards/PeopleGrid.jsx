import React from "react";
import CardPeople from "./CardPeople";
import "./cards.css";
import { HashLink as Link } from "react-router-hash-link";
import Cardn from "./Cardn";

const PeopleGrid = ({ people, isLoading }) => {
  return isLoading ? (
    `loading...`
  ) : (
    <div>
      <div className="headlines" id="headlines">
        <h1>
          <strong>{people.length ? "People" : null}</strong>
        </h1>
      </div>
      <div className="mul">
        <section className="cards-section">
          {people.map((people, i) => {
            return (
              <div key={i}>
                {/* <Link
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                  to={"/people/" + people.person.name + "/" + people.person.id}
                > */}
                <Cardn
                  image={people.person?.image}
                  people={people.person}
                  title={people.person.name}
                  id={people.person.id}
                  description={people.person.country?.name}
                />
                {/* </Link> */}
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};
{
  /* <p>{item.character?.name ? item.character.name : "M"}</p> */
}
export default PeopleGrid;
