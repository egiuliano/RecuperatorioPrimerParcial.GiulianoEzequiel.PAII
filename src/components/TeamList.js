import React, { useEffect, useState } from "react";
import { useParams } from 'react-router'
import Team from "../templates/Team";

const TeamList = () => {

    const { id } = useParams();
    const [team, setTeam] = useState({})
  
    useEffect(() => {
        const URL = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams'
        fetch(URL)
            .then(res => res.ok ? res.json() : Promise.reject(res.status + ":" + res.statusText))
            .then(team => {
                console.log(team)
                setTeam(team.sports[0].leagues[0].teams)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [id])
  
    return (
              Object.values(team).map(
                team =>
                <Team key={id} team={team} />
            )
           
      );
    }

export default TeamList;