import React from 'react'
import search from '../assets/search.svg'
import bell from '../assets/bell.svg'
import avt from '../assets/girl.png'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="logo"><h1 style={{color:'rgb(0 225 239)'}}>Health</h1><h1 style={{color:"rgb(41 36 125)"}}>care.</h1></div>
        <div className="searchbox">
        <img className='img' src={search} alt="" />
        <input className='search' type="text" placeholder='Search' />
        <div className="noti">
            <img src={bell} alt="" />
        </div>
        </div>
        <div className="profile">
            <div className="name">Ritika</div>
            <div className="avtar box"><img src={avt} alt="" /></div>
            <div className="plus">+</div>
        </div>
    </div>
  )
}

export default Header