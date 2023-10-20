import React from 'react'
import './socialmedia.css'
import twitter from '../../assets/twitter.png'
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'

const Socialmedia = () => {
  return (
   <section id='socialMedia'>
        <div className='links'>
            <img src={instagram} alt='' className='link'/>
            <img src={twitter} alt='' className='link'/>
            <img src={Linkedin} alt='' className='link'/>
            <img src={github} alt='' className='link'/>
        </div>
   </section>
  )
}

export default Socialmedia