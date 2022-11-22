import React, { useState, useEffect } from "react";
import SchedCard from "./SchedCard";
import "./schedCard.css";

const today = new Date();
// console.log(today);
let day = `${today.getDate() < 10 ? "0" : ""}${today.getDate()}`;
// console.log(day);
let month = `${today.getMonth() + 1 < 10 ? "0" : ""}${today.getMonth()}`;
// console.log(month);
let year = today.getFullYear();
// console.log(year);
let currentDate = `${year}-${month}-${day}`;
// console.log(currentDate);

const SchedGrid = () => {
  const [schedule, setSchedule] = useState([]);

  const URL = `https://api.tvmaze.com/schedule/web?date=${currentDate}&country=US`;
  const getSchedule = async (URL, setResp) => {
    fetch(URL).then((resp) => {
      resp
        .json()
        .then((data) => {
          setResp(data);
        })
        .catch((err) => console.log(err));
    });
  };
  useEffect(() => {
    getSchedule(URL, setSchedule);
  }, []);
  // console.log(schedule, "today");

  return (
    <section>
      <div className="schedule-container">
        <h1>today</h1>
      </div>
      <>
        {schedule.map((date) => {
          return <SchedCard date={date} />;
        })}
      </>
    </section>
  );
};

export default SchedGrid;
