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
            <a href="https://www.instagram.com/clementrugwirohunk"> <img src={instagram} alt='' className='link'/> </a>
            <a href="https://twitter.com/hunk_clement"> <img src={twitter} alt='' className='link'/> </a>
            <a href="https://www.linkedin.com/in/clement-rugwiro-48b5a1202/"> <img src={Linkedin} alt='' className='link'/> </a>
            <a href="https://github.com/clementrugwiro"> <img src={github} alt='' className='link'/> </a>
        </div>
   </section>
  )
}

export default Socialmedia