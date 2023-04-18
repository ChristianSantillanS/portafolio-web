import React from 'react'
import './home.css'
function Data() {
  return (
    <div className="home__data">
        <h1 className="home__title">
            Christian Santillan
        </h1>
        <h3 className="home__subtitle">Computer Systems Engineer</h3>
        <p className="home__description">Recently graduated from Computer Systems Engineering 
        and Junior Developer</p>
        <a href="#contact" className="button button--flex">
        <i class='bx bx-smile home__icon'></i> Say Hello 
        </a>
        
    </div>
  )
}

export default Data