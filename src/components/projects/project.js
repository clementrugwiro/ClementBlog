import React from 'react'
import './projects.css'
import Hamwe from '../../assets/hamwe.png'
import GreenAfrica from '../../assets/GreenAfrica.png'
import twistads from '../../assets/twistads.png'


const Project = () => {
  return (
    <section id='projects'>
       
        <div className='projectsBar'>
        <h1 className='projectTitle'> My Projects</h1>
            <span className='introdec'>through the past years I had the opportunity to work with on diverse projects, in diverse disciplinaries but all to create solutions through technology. </span>
            <div className='projectBar'>
                <img src={Hamwe} alt='' className='projectImg' />
                <div className='projecttext'>
                <h2>Hamwe.rw</h2>
                <p>Proficient in software development with a strong foundation in programming languages, database management, and software architecture. Skilled in creating efficient and reliable software solutions to tackle real-world challenges.</p>
                </div>
            </div>
            <div className='projectBar'>
                <img src={twistads} alt='' className='projectImg' />
                <div className='projecttext'>
                <h2>Twist_Ads</h2>
                <p>Proficient in software development with a strong foundation in programming languages, database management, and software architecture. Skilled in creating efficient and reliable software solutions to tackle real-world challenges.</p>
                </div>
            </div>
            <div className='projectBar'>
                <img src={GreenAfrica} alt='' className='projectImg' />
                <div className='projecttext'>
                <h2>Green Africa Initiative</h2>
                <p>Proficient in software development with a strong foundation in programming languages, database management, and software architecture. Skilled in creating efficient and reliable software solutions to tackle real-world challenges.</p>
                </div>
            </div>


        </div>

    </section>
  )
}

export default Project