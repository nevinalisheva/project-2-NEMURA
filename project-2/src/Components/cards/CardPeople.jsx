import React from "react";
import "./cards.css";
import image from "../../assets/Image_not_available.png";

const CardPeople = ({ people }) => {

  return (
    
    <>
      <div className="card" >
        <div className="card-image">
            <img className="card-img" alt = "image"  src={people.person?.image ? people.person?.image?.medium : image}/>
        </div>
        <div className="card-info">
            <p className="result-name"><strong>{people.person?.name}</strong> </p>
            <p>{people.person?.gender ?  people.person?.gender==="Male" ? "Actor" : "Actress" : "Actor/Actress"}</p>
            <p>Country: {people.person?.country?.name ? people.person.country.name : " Unknown"}</p>
        </div>
      </div>
    </>
  );
};

export default CardPeople;