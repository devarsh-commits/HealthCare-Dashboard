import React from 'react'
import body from '../assets/anatomy.png'
import './Anatomy.css'
import scan from '../assets/scan.svg'

const AnatomySec = () => {
    return (
        <div className='main-an'>
            <img src={body} alt="" />
            <div className='health-indicator '>
                <div className="healthdt1">
                    <img src={scan} alt="" />
                    <div className='health-heart a'>
                        <p>💖</p>
                        <p>Healthy Heart</p>
                        <p>🟢</p>
                    </div>
                </div>
                <div className="healthdt2">
                    <div className='health-leg a'>
                        <p>🦵🏼</p>
                        <p>Issue leg</p>
                        <p>🔴</p>
                    </div>
                    <img src={scan} alt="" />
                </div>


            </div>

        </div>
    )
}

export default AnatomySec