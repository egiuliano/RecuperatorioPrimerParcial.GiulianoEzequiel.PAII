import React from "react";
import "../styles/Team.css";

const Team = ({ team }) => {
console.log(team);  
  return (
    <a href={`http://localhost:3000/teams/${team.team.id}`}>
    <figure className="card">
      <img className="card-image" src={team.team.logos[0].href} alt={`Logo de los ${team.team.name}`} />
      <figcaption className="card-title">{team.team.shortDisplayName}</figcaption>
      <figcaption className="card-location">{team.team.location}</figcaption>
    </figure>
    </a>
  );
};

export default Team;