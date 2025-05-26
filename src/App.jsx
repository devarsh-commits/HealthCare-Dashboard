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

function App() {

  return (
    <>
      <div className="main">
        <div className="header"><Header /></div>
        <div className="body">
          <div className="sidebar">
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
                  <div className="ana-body"><AnatomySec /></div>
                   <div className="healthstat">
                    {healthstat.map(dt=>{
                      return <HealthStatus key={dt.label} label={dt.label} img={dt.img} date={dt.date} value={dt.value}/>
                    })}
                   </div>
                </div>
                <div className="activity">hii</div>
              </div>
            </div>
            <div className="schedule">
              <div className="calhead">
                <div className="title">October 2021</div>
                <div className="arrow">
                  <img src={arrow} alt="" className='arrow-rt' />
                  <img src={arrow} alt="" className='arrow-lt' />
                </div>
              </div>
              <div className="cal-cont">
                {
                  [0,1,2,3,4].map((dt)=>{
                   return Caldata[0].map((_,index)=>{
                      return <Calender
                      val={Caldata[dt][index]}
                      />
                    })
                  })
                }
              </div>
              <div className="appointment">
                
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
