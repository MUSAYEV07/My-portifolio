import React from 'react'
import about1 from './images/about1.jpeg'
import './About.css'

function About() {
  return (
       <section className='about'>
        <div className="container">
            <div className="about-cotainer">
                <div className="about-img">
                    <img src={about1} alt="" />
                    <img src={about1} alt="" />
                    <img src={about1} alt="" />
                    <img src={about1} alt="" />
                </div>
            </div>
        </div>
       </section>
  )
}

export default About