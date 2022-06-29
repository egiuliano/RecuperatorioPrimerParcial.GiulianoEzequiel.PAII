import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Table from '../templates/Table';

const Players = () => {
  
  const { id } = useParams();
  const [player, setPlayer] = useState({});
  const [playersFilter, setFilteredPlayers] = useState({});
  const [team, setTeam] = useState({});

  useEffect(() => {
    const URL = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams'
    fetch(`${URL}/${id}/roster`)
        .then(res => res.ok ? res.json() : Promise.reject(res.status + ":" + res.statusText))
        .then(data => {
            console.log(data.athletes)
            setPlayer(data.athletes)
            setFilteredPlayers(data.athletes)
            setTeam(data.team)
        })
        .catch((error) => {
            console.error(error)
            console.log("Error al obtener datos")
        })
}, [id])

  const filter = (e) => {
    const filterValue = e.target.value;
    console.log(filterValue);
    if (filterValue !== '') {
        const results = player.filter((player) => {
            return player.fullName.toLowerCase().startsWith(filterValue.toLowerCase());
      });
      console.log(results);
      setFilteredPlayers(results);
    } else {
        setFilteredPlayers(player);
    }
  };

  // const sortTable = () => {
  //   console.log("Test");
  //   const filteredList = player.sort((a, b) => 
  //     a.fullName > b.fullName
  //     ? 1
  //     : a.fullName === b.fullName
  //     ? a.playersFilter.fullName > b.playersFilter.fullName
  //     ? 1
  //     : -1
  //     : -1,
  //   )
  //   setFilteredPlayers(filteredList);
  //   // console.log(filteredList);
  //   // setPlayer(filteredList);
  // };

  return (
  <>

  <div className='filterPlayers'>
    <input type="search" placeholder="Filter by name..." name="name" id='name' required onChange={filter} />
  </div>
      {
        (<Table player={playersFilter} team={team} />)
      }    
  </>
  );
}


export default Players;