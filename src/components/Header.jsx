import React from 'react'
import { Nav } from './Nav'

function Header() {
  return (
    <header className='header'>
      <div className='sw'>STAR WARS</div>
      <Nav />
    </header>
  )
}

export default Header