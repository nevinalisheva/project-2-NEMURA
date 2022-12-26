import React from "react";
import "./cards.css";
import noImage from "../../assets/Image_not_available.png";
import { HashLink as Link } from "react-router-hash-link";

const Card = ({
  headline,
  data,
  imageCast,
  titleCharacter,
  id,
  title,
  image,
  description,
  addTitleToFavourits,
  favourites,
}) => {
  // const addedShow = favourites.find((i) => i.show.id === show.show.id);

  // const avoidDuplicate = addedShow ? true : false;

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
          to={
            (headline === "Titles" || headline === "Known For"
              ? "/shows/"
              : "/people/") +
            title +
            "/" +
            id
          }
        >
          <div className="card-image">
            {titleCharacter ? (
              <img
                className="card-img"
                alt="card-img"
                src={imageCast ? imageCast.medium : noImage}
              />
            ) : (
              <img
                className="card-img"
                alt="card-img"
                src={image ? image.medium : noImage}
              />
            )}
          </div>

          <div className="card-info">
            <p className="result-name">
              <strong>{title}</strong>
            </p>

            {headline === "People" && (
              <p>
                {data.gender
                  ? data.gender === "Male"
                    ? "Actor"
                    : "Actress"
                  : "Actor/Actress"}
              </p>
            )}

            {titleCharacter ? (
              <p>{titleCharacter}</p>
            ) : (
              <p>
                {(headline === "Titles" || headline === "Known For"
                  ? "Network: "
                  : "Country: ") + (description ? description : "Unknown")}
              </p>
            )}

            {(headline === "Titles" || headline === "Known For") && (
              <p>{ratingConditional(Math.round(data.rating?.average))}</p>
            )}
          </div>
        </Link>

        {headline === "Titles" && (
          <div>
            <button
              className="overlay"
              // disabled={avoidDuplicate}
              onClick={() => addTitleToFavourits(data)}
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
