import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import "./favourites.css";
// import { GlobalProvider } from "../Components/Context/GlobalState";

function AddOrRemove({ show }) {
  const { removeTitleFromFavourits } = useContext(GlobalContext);
  // console.log(removeTitleFromFavourits, "fromaddorremove");
  //   console.log(show, "dsgxjkhfskdfd");

  return (
    <div>
      <button
        className="overlay"
        onClick={() => removeTitleFromFavourits(show.show.id)}
      >
        Remove
      </button>
    </div>
  );
}

export default AddOrRemove;
