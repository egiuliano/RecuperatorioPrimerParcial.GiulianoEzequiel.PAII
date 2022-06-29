import React from "react";
import PlayerList from '../components/PlayerList'
import '../styles/Player.css';


const Players = () => {

        return (
          <>
          <div className="containerPlayers">
            <PlayerList />
          </div>
          </>
          
        )
}

export default Players;