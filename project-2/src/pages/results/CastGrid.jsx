import React from "react";
import CurrentPage from "../CurrentPage";
import "./results.css";
import "../../App.css";
import Cast from "./Cast";
import { HashLink as Link } from "react-router-hash-link";
import Cardn from "../../Components/cards/Cardn";

const Results = ({ cast, isloading }) => {
  // console.log(cast, "cast")
  // if (!isloading) {
  //   console.log(cast, "load")
  // } else {
  //   console.log("not yet")
  // }
  return isloading ? (
    `loading...`
  ) : (
    <div>
      <div className="headlines" id="headlines">
        <h1>{cast.length ? "Cast" : null}</h1>
      </div>
      <div className="mul">
        <section className="cards-section">
          {cast.map((cast, index) => {
            return (
              <div key={index}>
                {/* <Link
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                  to={"/people/" + cast.person.name + "/" + cast.person.id}
                > */}
                <Cardn
                  // key={cast.person.id}
                  // cast={cast}
                  // image={cast.character.image || cast.person.image}
                  title={cast.name}
                  // id={cast.person.id}
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

export default Results;
