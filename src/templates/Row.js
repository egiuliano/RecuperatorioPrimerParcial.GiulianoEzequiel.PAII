import React from 'react'

const Row = ({player}) => {
  //console.log(player.headshot.href);
  var img="https://a.espncdn.com/combiner/i?img=/i/headshots/nophoto.png";
  var city="-";
  var age="-";
  try {
    img=player.headshot.href;
    city=player.birthPlace.city+", "+player.birthPlace.country;
    age=player.age;
  } catch (error) {
    console.log(`No imagen available for ${player.fullName}`);
  }
    return (
        <tr>
            {/* <td>{player.fullName}</td>
            <td>{player.age}</td>
            <td><img src={player.headshot.href} alt={`Cabeza de ${player.fullName}`} /></td> */}
            <th scope="row">
                      <div className="media align-items-center">
                        <img height="150" src={img} alt={`Headshot ${player.fullName}`} />
                      </div>
            </th>
            <th scope="row">
                        <div className="media-body">
                          <span className="mb-0 text-sm">{player.fullName}</span>
                        </div>
            </th>
            <th scope="row">
                        <div className="media-body">
                          <span className="mb-0 text-sm">{player.position.displayName}</span>
                        </div>
            </th>
            <th scope="row">
                        <div className="media-body">
                          <span className="mb-0 text-sm">{age}</span>
                        </div>
            </th>
            <th scope="row">
                        <div className="media-body">
                          <span className="mb-0 text-sm">{player.displayWeight}</span>
                        </div>
            </th>
            <th scope="row">
                        <div className="media-body">
                          <span className="mb-0 text-sm">{player.displayHeight}</span>
                        </div>
            </th>
            <th scope="row">
                        <div className="media-body">
                          <span className="mb-0 text-sm">{city}</span>
                        </div>
            </th>
        </tr>
    )
}

export default Row