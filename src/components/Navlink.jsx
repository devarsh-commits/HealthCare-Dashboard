import React from 'react'
import './Navlink.css'
const Navlink = ({title,icon,desc}) => {
  return (
    <div className='links'>
      <a href="/">   <img src={icon} alt="" />
        <div>{desc}</div>  </a>
    </div>
  )
}

export default Navlink