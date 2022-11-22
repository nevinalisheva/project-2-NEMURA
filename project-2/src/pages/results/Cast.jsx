import React from "react";
import image from "../../assets/Image_not_available.png";
import "../../Components/cards/cards.css"


const Cast = ({ cast }) => {

  return (
    
    <>
      <div className="card">
        <div className="card-image">
            <img className="card-img" alt = "image"  src={cast.character?.image ? cast.character.image.medium  : cast.person.image?.medium || image}/>
        </div>
        <div className="card-info">
            <p className="result-name"><strong>{cast.person?.name}</strong> </p>
            <p>{cast.character?.name}</p>
        </div>
      </div>
    </>
  );
};

export default Cast;
