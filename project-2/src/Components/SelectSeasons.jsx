import React, {useState} from "react";
import Seasons from "./Seasons";

const SelectSeasons = ({seasons, isloading, id}) => {
    const [selected, setSelected] = useState(1);
    const selectedValue = (e) => setSelected(Number(e.target.value));
    // console.log(selected);
    return isloading ? (
        `loading...`) : (
            <div className="episodes-container">
              <div >
            <h1 id="h2">Seasons</h1>
            </div>
      <select onChange={selectedValue}>
        {seasons.map((item) => {
          return <option>{item.number}</option>;
        })}
      </select>
        <div>
        <div className="headlines" id="headlines" >
            <h2>Episodes</h2>
            </div>
            <Seasons selected= {selected} id = {id}/>
        </div>
        </div>
        );

    };


export default SelectSeasons;

