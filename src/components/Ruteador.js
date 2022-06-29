import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Teams from '../pages/Teams';
import TeamDetail from '../pages/TeamDetail.js';
import Players from '../pages/Players';
import About from '../pages/About';
import Error404 from '../pages/Error404';
import Header from './Header';

const Ruteador = () => {
  return (
    <div>
        <Router>
        <Header />
            <Routes>
                <Route exact="true" path="/" element={ <Teams/> } />
                <Route exact="true" path="/teams" element={ <Teams/> } />
                <Route exact="true" path="/teams/:id" element={ <TeamDetail /> } />
                <Route exact="true" path="/players/:id" element={ <Players/> } />
                <Route exact="true" path="/about" element={ <About/> } />
                <Route path="*" element={ <Error404/> } />
            </Routes>
        </Router>
    </div>
  )
}

export default Ruteador;