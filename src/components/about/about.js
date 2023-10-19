import React from 'react'
import "./about.css"
import techSupport from "../../assets/support.png"
import design from '../../assets/design.png'
import development from '../../assets/web-development.png'
import education from '../../assets/education.png'

const About = () => {
  return (
    <section id='about'>
            <span className='skillTitle'>About Me</span>
            <span className='skillDec'> My portfolio highlights skills in development, social media management, and graphic design. These include programming, content strategy, and graphic design proficiency, all backed by hands-on experience and practical achievements</span>
            <ul className='skillsbars'>
                <div className='skillBar'>
                    <img src={education} alt='' className='skillbarImg' />
                    <div className='skillBarText'>
                        <h2>Academic Education</h2>
                        <p>I am a graduate in Computer and Software Engineering, at the University of Rwanda. followed a Software Development cohort and leadership skills at SolvIT africa.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={development} alt='' className='skillbarImg' />
                    <div className='skillBarText'>
                        <h2>Software development</h2>
                        <p>Proficient in software development with a strong foundation in programming languages, database management, and software architecture. Skilled in creating efficient and reliable software solutions to tackle real-world challenges.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={design} alt='' className='skillbarImg' />
                    <div className='skillBarText'>
                        <h2>Web Design</h2>
                        <p>Experienced in web design, encompassing UI/UX principles, responsive design, and creating visually appealing and user-friendly websites. Proficient with HTML, CSS, and design tools to deliver compelling online experiences.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={techSupport} alt='' className='skillbarImg' />
                    <div className='skillBarText'>
                        <h2>Tech Support Agent</h2>
                        <p>As a Tech Support Agent, I excel in troubleshooting and resolving technical issues with a customer-centric approach. Adept at providing solutions and ensuring a smooth technology experience for end-users</p>
                    </div>
                </div>
            </ul>
    </section>
  )
}

export default About