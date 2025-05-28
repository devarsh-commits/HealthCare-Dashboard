import React from 'react'
import search from '../assets/search.svg'
import bell from '../assets/bell.svg'
import avt from '../assets/Boy.png'
import './Header.css'
import hambug from '../assets/hamburger.svg'

const Header = () => {
  return (
    <div className='header'>
      <div className="logosec">
        <img src={hambug} alt="" />
        <div className="logo">
          <h1 style={{ color: 'rgb(0 225 239)' }}>Health</h1><h1 style={{ color: "rgb(41 36 125)" }}>care.</h1></div>
      </div>
      <div className="searchbox">
        <img className='img' src={search} alt="" />
        <input className='search' type="text" placeholder='Search' />
        <div className="noti">
          <img src={bell} alt="" />
        </div>
      </div>
      <div className="profile">
        <div className="name">Devarsh</div>
        <div className="avtar box"><img src={avt} alt="" /></div>
        <div className="plus">+</div>
      </div>
    </div>
  )
}

export default Header