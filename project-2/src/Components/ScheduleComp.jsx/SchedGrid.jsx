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

let countyId = ["DE", "US", "TR", "IL"];

const SchedGrid = () => {
// const [loading, setLoading] = useState(true);
const [schedule, setSchedule] = useState([]);
const [country, setCountry] = useState([]);
const URL = `https://api.tvmaze.com/schedule/web?date=${currentDate}&country=${country}`;
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
// setLoading(false);
// eslint-disable-next-line
}, [country]);
console.log(schedule);
const handleSelect = (e) => {
if (e.target.value !== "country") setCountry(e.target.value);

console.log(e.target.value);
};
// console.log(schedule, "today");

return (
<section>
<hr />
<h1>Today's Schedule</h1>
<select onChange={handleSelect}>
<option>country</option>
{countyId.map((country, i) => {
return <option key={i}>{country}</option>;
})}
</select>
<div className="schedule-container">
<>
{schedule.map((date) => {
return <SchedCard date={date} />;
})}
</>
</div>
</section>
);
};

export default SchedGrid;