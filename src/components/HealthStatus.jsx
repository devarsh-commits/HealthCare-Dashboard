import React from 'react'
import teeth from '../assets/teeth.png'
import './Healthstatus.css'

const HealthStatus = ({label,img,date,value}) => {
  return (
    <div className='bdy-cont'>
        <div className="bdy-status">
            <img src={img} alt="" />
            <div className='name'>{label}</div>
        </div>
        <div className="date">{date}</div>
        <progress value='50' max='100' className='prog'></progress>
    </div>
  )
}

export default HealthStatus