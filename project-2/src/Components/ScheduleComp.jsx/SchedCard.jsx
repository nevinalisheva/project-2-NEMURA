import React from "react";

const SchedCard = ({ date }) => {
return (
<div className="sched-card-container">
<div className="sched-card">
<div>
{/* <img src={date?.image?.medium} /> */}
<h3>{date.name}</h3>
<p>
SO{date.season} EO{date.number}
{" - "} {date.airstamp.slice(11, 16)}{" "}
</p>
<p>{date._embedded?.webChannel?.name} </p>
</div>
</div>
</div>
);
};

export default SchedCard;