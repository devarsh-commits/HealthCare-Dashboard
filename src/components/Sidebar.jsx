import React from 'react'
import { gendata } from '../data/generallink'
import { tools } from '../data/toollinks'
import Navlink from './Navlink'
import './Sidebar.css'
import setting from '../assets/setting.svg'

const Sidebar = () => {
  return (
    <div className='side'>
      <div className='gen'>
        <div className='title'>General</div>
        {/* links components for using single format along with multiple data */}
        {gendata.map(dt => {
          return <Navlink key={dt.id} title={dt.sec} icon={dt.icon} desc={dt.desc} />
        })}
      </div>
      <div className="gen">
        <div className='title'>Tools</div>
        {tools.map(dt => {
          return <Navlink key={dt.id} icon={dt.icon} desc={dt.desc} />
        })}
        <div className='links setting'>
          <a href="">
            <img src={setting} alt="" />
            <div>Setting</div>
          </a>

        </div>
      </div>
    </div>
  )
}

export default Sidebar