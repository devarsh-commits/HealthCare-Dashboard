import React from 'react'
import './Appoint.css'

const AppointmentCard = ({id,title,icon,time,name,present}) => {
  return (
  <div>
    {(present) ? (<div className='Appoint'>
        <div className="a-title">
            <div className="t1">{title}</div>
            <div className="icon">{icon}</div>
        </div>
        <div className="a-time">{time}</div>
        <div className="dr-name">{name}</div>
    </div>):(<div className='Appoint' style={{background:'hsl(229.29deg 70% 92.16%)', color:'rgb(39, 36, 93)'}}>
        <div className="a-title">
            <div className="t1">{title}</div>
            <div className="icon">{icon}</div>
        </div>
        <div className="a-time">{time}</div>
        <div className="dr-name">{name}</div>
    </div>)}
  </div>
  )
}

export default AppointmentCard