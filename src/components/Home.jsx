import React from 'react'
import { Nav } from './Nav'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
        <ul className='links'>
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

export default Home