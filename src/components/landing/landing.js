import React from 'react'
import './landing.css'
import bgImg from '../../assets/backImage.png'
import {Link} from 'react-scroll'
import hireme from '../../assets/hire.png'

const  Landing = () => {
  return (
    <section id='landing'>
        <div className='IntroContent'>
            <span className='hello'>Hello </span> 
            <span className='introText'>I'm <span className='introName'>Clement</span><br/>an IT professional.</span>
            <p className='introPara'> I'm a skilled IT professional with <br/> experience in multidisciplinary projects</p>
            <Link> <button className='btn'><img className='hireme' src={hireme} alt=''/>Hire me</button></Link>
        </div>
        <img src={bgImg} alt='' className='bg'/>
    </section>
  )
}

export default Landing