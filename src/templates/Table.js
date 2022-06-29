import React from 'react'
import Row from './Row'
import "../styles/Table.css"


const Table = ({player, team}) => {

    return (
        <>
        <table className="table table-hover">
    
        <div className="col">
          <div className="card shadow">
            <div className="card-header border-0">
              <h3 className="mb-0">{team.displayName} {team.seasonSummary} roster</h3>
            </div>
            <div className="table-responsive">
              <table className="table align-items-center table-flush">
                <thead className="thead-light">
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Position</th>
                    <th scope="col">Age</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Height</th>
                    <th scope="col">From</th>
                  </tr>
                </thead>
                <tbody>
                { 
                    Object.values(player).map((player)=><Row key={player.id} player={player} />)
                }
                </tbody>
        </table>
        </div>
        </div>
        </div>
        </table>
        
        </>
    )
}

export default Table