import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <section className='skills' id="Skills">
      <div className="container">
       <div className="skills-container">

  <div className="skills-card">
    <h2 className='skills-card-title'>Frontend</h2>
    <p className='skills-card-text'>HTML, CSS, JS, React</p>
  </div>

  <div className="skills-card">
    <h2 className='skills-card-title'>Backend</h2>
    <p className='skills-card-text'>Node.js, Express</p>
  </div>

  <div className="skills-card">
    <h2 className='skills-card-title'>Tools</h2>
    <p className='skills-card-text'>Git, Figma</p>
  </div>

</div>
      </div>
    </section>
  )
}

export default Skills