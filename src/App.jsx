import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import { gendata } from './data/generallink'
import Navlink from './components/Navlink'
import './App.css'
import Sidebar from './components/Sidebar'
import AnatomySec from './components/AnatomySec'
import HealthStatus from './components/HealthStatus'
import { healthstat } from './data/healthstat'
import arrow from './assets/arrow.svg'
import Calender from './components/Calender'
import { Caldata } from './data/Calenderdata'
import AppointmentCard from './components/AppointmentCard'
import { appointdt } from './data/Appointment'
import { appointmentCards } from './data/Appointmentcard'
import SimpleAppointmentCard from './components/SimpleAppointmentCard'
import Activity from './components/Activity'
import { calval } from './data/.caldata'

function App() {

  return (
    <>
      <div className="main">
        {/* created Header component for multiple use in many pages */}
        <div className="header"><Header /></div>
        <div className="body">
          <div className="sidebar">
            {/* using side bar component that is reusable */}
            <Sidebar />
          </div>
          <div className="maincomp">
            <div className="dashboard">
              <div className="dashhead">
                <div className="title">Dashboard</div>
                <div className="opt">
                  <select name="" id="">
                    <option value="">This Week</option>
                    <option value="">This Month</option>
                  </select>
                </div>
              </div>
              <div className="dashbody">
                <div className=" container">
                  {/* Anatomy section can be used at multiple pages for representation */}
                  <div className="ana-body"><AnatomySec /></div>
                  <div className="healthstat">
                    {/* Health card is created and fetching data from mock js improves reuse if components */}
                    {healthstat.map(dt => {
                      return <HealthStatus key={dt.label} label={dt.label} img={dt.img} date={dt.date} value={dt.value} />
                    })}
                  </div>
                </div>
                {/* individual activity section is created for use in mutiple pages */}
                <div className="activity"><Activity /></div>
              </div>
            </div>
            <div className="schedule">
              <div className="calhead">
                <div className="title">October 2021</div>
                <div className="arrow">
                  <img src={arrow} alt="" className='arrow-lt' />
                  <img src={arrow} alt="" className='arrow-rt' />
                </div>
              </div>
              <div className="cal-cont">
                {
                  // mapping data for calender from seperate data
                  calval.map((dt) => {
                    return Caldata[0].map((_, index) => {
                      return <Calender
                        key={`${dt.id}-${index}`}
                        val={Caldata[dt.val][index]}
                      />
                    })
                  })
                }
              </div>
              <div className="appointment">
                {
                  // resusable appointment card with mock data
                  appointdt.map(dt => {
                    return <AppointmentCard key={dt.id} id={dt.id} title={dt.title} icon={dt.icon} time={dt.time} name={dt.name} present={dt.present} />
                  })
                }
              </div>
              <div className="upcomin-sch">
                <div className="sch-head">
                  The Upcoming Schedule
                </div>
                <div className="sch-1">
                  <div className="sch-subhead">On Thursday</div>
                  <div className="sch-cards">
                    {appointmentCards.map(dt => {
                      // as the task is given a reusable simpleappointment is card made and different data is fetched
                      return dt.day === 'Thursday' && (<SimpleAppointmentCard key={dt.title} day={dt.day} title={dt.title} icon={dt.icon} time={dt.time} />)
                    })}
                  </div>
                </div>
                <div className="sch-2">
                  <div className="sch-1">
                    <div className="sch-subhead">On Saturday</div>
                    <div className="sch-cards">
                      {appointmentCards.map(dt => {
                        return dt.day === 'Saturday' && (<SimpleAppointmentCard key={dt.title} day={dt.day} title={dt.title} icon={dt.icon} time={dt.time} />)
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
