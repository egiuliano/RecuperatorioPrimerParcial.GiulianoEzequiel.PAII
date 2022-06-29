import React from 'react'
import "../styles/Error404.css"

const Error404 = () => {
  return (
    <div className='containerError404'>
      <div className='card'>  
      <p className='pError'>Error 404!</p>
        <img src={process.env.PUBLIC_URL+"error404.png"} alt="Failed too :("></img>
       </div> 
    </div>
  )
}

export default Error404