import React from 'react'
import './Hero.css'
import robot from '../../assets/robot.png'

function Hero() {
  return (
    <div className='hero'>
      <div className="bg-img"></div>
      <div className='bg-color'></div>
      <div className="heading">
        <h2>1st International Conference on </h2>
        <h1>Artificial Intelligence and Quantum Computing</h1>
        <p>GITA AUTONOMOUS COLLEGE, BHUBANESWAR</p>
        <div className="buttons">
          <div className="btn"><a href="https://chatgpt.com/c/671e7eeb-81d8-8012-ba3c-b9f970bc45ae">Submit Your Paper</a></div>
          <div className="btn"><a href="">About our College</a></div>
        </div>
      </div>
      <div className="robo">
        <img src={robot} alt="" />
      </div>
    </div>
  )
}

export default Hero
