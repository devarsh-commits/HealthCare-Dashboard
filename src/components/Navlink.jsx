import React from 'react'
import './Navlink.css'
const Navlink = ({title,icon,desc}) => {
  return (
    <div className='links'>
        <img src={icon} alt="" />
        <div>{desc}</div>
    </div>
  )
}

export default Navlink