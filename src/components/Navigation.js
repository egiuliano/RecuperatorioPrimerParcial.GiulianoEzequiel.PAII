import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/Navigation.css"


const Navigation = () => {
  return (
    <div className="topnav" id="myTopnav">
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <ul className="navbar-nav ms-auto">
						<li className="nav-item"><NavLink exact="true" to="/">Home</NavLink></li>
						<li className="nav-item"><NavLink exact="true" to="/about">About</NavLink></li>
					</ul>
				</nav>
    </div>
    
  )
}

export default Navigation