import React from "react";
import "../styles/TeamDetail.css";



const TeamDetail = ({ teamDetail }) => {
const { id, name, location, logos, abbreviation, record, color, standingSummary, franchise } = teamDetail;
console.log(color);

return (
<div className="containerTeamDetail" style={{ background: `linear-gradient(to right, #FFFF 50%, #${color}`}}>
		<div className="teamDetailText">
			<h1>{location}<br/> {name}</h1>
      <h4>Abbreviation: {abbreviation}</h4>
      <h4>Stadium: {franchise.venue.fullName}</h4>
      <h4>{record.items[0].description}: {record.items[0].summary}</h4>
      <h4>{standingSummary}</h4>
			<div className="teamDetailText">
        <h1><a href={`http://localhost:3000/players/${id}`} className="effect-underline">See roster ➜</a></h1>
			</div>	
		</div>
    <img src={logos[3].href} alt={`${name} logo`}></img>
</div>

/* <div class="card" style={{  
  backgroundColor: {color}}}>

  <img class="card-img-bottom" src={logos[0].href} alt={`${name} logo`}></img>
  <div class="card-body">
    <h5>{name}</h5>
    <p>{location}</p>
    <p>{abbreviation}</p>
    <p>{standingSummary}</p>
    <p class="card-text">{record.items[0].description}: {record.items[0].summary}</p>
  </div>
</div> */

  );
};

export default TeamDetail;