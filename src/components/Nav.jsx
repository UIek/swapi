import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className='nav'>
      <div className="burger" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to={"./people"} className='link'>People</Link>
        <Link to={"./planets"} className='link'>Planets</Link>
        <Link to={"./films"} className='link'>Films</Link>
        <Link to={"./species"} className='link'>Species</Link>
        <Link to={"./starships"} className='link'>Starships</Link>
        <Link to={"./vehicles"} className='link'>Vehicles</Link>
      </ul>
      
    </div>
  )
}
