import React, { useEffect, useState } from "react";
import { useParams } from 'react-router'
import TeamDetail from "../templates/TeamDetail";


const TeamDetailList = () => {

    const { id } = useParams();
    const [teamDetail, setTeam] = useState({})
  
    useEffect(() => {
        const URL = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams'
        fetch(`${URL}/${id}`)
            .then(res => res.ok ? res.json() : Promise.reject(res.status + ":" + res.statusText))
            .then(teamDetail => {
                console.log(teamDetail)
                setTeam(teamDetail)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [id])
  
    return (
              Object.values(teamDetail).map(
                teamDetail =>
                <TeamDetail key={id} teamDetail={teamDetail}/>
            )
      );
    }

export default TeamDetailList;