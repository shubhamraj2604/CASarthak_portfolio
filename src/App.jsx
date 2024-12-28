import React from 'react';
import Navbar from './compnents/Navbar';
import Home from './compnents/Home';
import Social from './compnents/Social';
import About from './compnents/About';
import Education from './compnents/Education';
import Work from './compnents/work';
import Position from './compnents/position';
import Achievements from './compnents/achievements';
import Contact from './compnents/contact';
import Copyright from './compnents/copyright';
function App() {
    return (
        <div>
        <Navbar />   
        <Home /> 
        <About />
        <Education />
         <Work />
         <Position />
         <Achievements />
         <Contact />
         <Copyright />
        <Social />
        </div>
    );
}

export default App;
