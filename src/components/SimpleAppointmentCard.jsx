import React from 'react'
import './Appoint.css'

const SimpleAppointmentCard = ({title,icon,time}) => {
  return (
    <div className='Appoint' style={{background:'hsl(229.29deg 70% 92.16%)', color:'rgb(39, 36, 93)'}}>
         <div className="a-title">
            <div className="t1">{title}</div>
            <div className="icon">{icon}</div>
        </div>
        <div className="a-time">{time}</div>
    </div>)
}

export default SimpleAppointmentCard