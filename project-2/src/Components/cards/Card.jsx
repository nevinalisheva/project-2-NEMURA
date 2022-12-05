import React, { useState } from "react";
// import Modal from "./Modal";
import "./cards.css";
import image from "../../assets/Image_not_available.png";
import { Navigate } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import AddToFavourite from "../favourites/AddToFavourite";
import AddOrRemove from "../favourites/AddOrRemove";

// import CurrentPage from "../../pages/CurrentPage";
// import { Link } from "react-router-dom";

const Card = ({
  type,
  show,
  addTitleToFavourits,
  favourites,
  removeTitleFromFavourits,
}) => {
  const addedShow = favourites.find((i) => i.show.id === show.show.id);
  // console.log(show.show.id, "added show");
  // console.log(removeTitleFromFavourits, "addTitleToFavourits");

  const avoidDuplicate = addedShow ? true : false;
  // console.log(type);

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
      <div className="card">
        <div className="card-image">
          <Link
            onClick={() => {
              window.scroll(0, 0);
            }}
            to={"/shows/" + show.show.name + "/" + show.show.id}
          >
            <img
              alt="show-img"
              className="card-img"
              src={show.show?.image ? show.show?.image?.medium : image}
            />
          </Link>
        </div>
        <div className="card-info">
          <p className="result-name">
            <strong>{show.show?.name}</strong>
          </p>
          <p>
            Network:{" "}
            {show.show.network && show.show?.network.name
              ? show.show.network.name
              : " Unknown"}
          </p>
          <p>
            <strong> </strong>
            {ratingConditional(Math.round(show.show?.rating?.average))}
          </p>
        </div>

        <div>
          <button
            className="overlay"
            disabled={avoidDuplicate}
            onClick={() => addTitleToFavourits(show)}
          >
            add to fav
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
