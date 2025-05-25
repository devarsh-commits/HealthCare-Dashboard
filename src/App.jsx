import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import { gendata } from './data/generallink'
import Navlink from './components/Navlink'
import './App.css'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <div className="header"><Header/></div>
      <div className="body">
        <div className="sidebar">
          <Sidebar/>
          {/* <div className='gen'>
            <div className="title">General</div>
            <div className="data">
              {gendata.map(dt=>{
                return <Navlink icon={dt.icon} desc={dt.desc}/>
              })}
            </div>
          </div> */}
        </div>
        <div className="maincomp">
          <div className="dashboard"></div>
          <div className="schedule"></div>
        </div>
      </div>
    </>
  )
}

export default App
