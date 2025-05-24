import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import './App.css'

function App() {

  return (
    <>
      <div className="header"><Header/></div>
      <div className="body">
        <div className="sidebar"></div>
        <div className="maincomp">
          <div className="dashboard"></div>
          <div className="schedule"></div>
        </div>
      </div>
    </>
  )
}

export default App
