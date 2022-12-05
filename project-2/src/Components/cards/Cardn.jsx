import React from "react";
import "./cards.css";
import noImage from "../../assets/Image_not_available.png";
import { HashLink as Link } from "react-router-hash-link";

const Card = ({
  show,
  people,
  cast,
  id,
  title,
  image,
  description,
  addTitleToFavourits,
  favourites,
}) => {
  const addedShow = favourites.find((i) => i.show.id === show.show.id);

  const avoidDuplicate = addedShow ? true : false;

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
        <Link
          onClick={() => {
            window.scroll(0, 0);
          }}
          to={(show ? "/shows/" : "/people/") + title + "/" + id}
        >
          <div className="card-image">
            <img className="card-img" src={image ? image.medium : noImage} />
          </div>

          <div className="card-info">
            <p className="result-name">
              <strong>{title}</strong>
            </p>

            {people && (
              <p>
                {people.gender
                  ? people.gender === "Male"
                    ? "Actor"
                    : "Actress"
                  : "Actor/Actress"}
              </p>
            )}

            {!cast && (
              <p>
                {(show ? "Network: " : "Country: ") +
                  (description ? description : "Unknown")}
              </p>
            )}

            {show && (
              <p>{ratingConditional(Math.round(show.rating?.average))}</p>
            )}

            {cast && <p>{cast.character?.name}</p>}
          </div>
        </Link>

        {show && (
          <div>
            <button
              className="overlay"
              disabled={avoidDuplicate}
              onClick={() => addTitleToFavourits(show)}
            >
              add to fav
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
