import React from 'react'
import "./navbar.css"
import logo from '../../assets/Blogo.png'
import {Link} from 'react-scroll'
import msgImg from '../../assets/chat-bubble.png'



const Navbar = () => {
  return (
    <nav className='navbar'> 
        <img src={logo} alt='' className='logo'/>
        <div className='desktopmenu'>
            <Link activeClass='active' to='landing' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home </Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-20} duration={500} className="desktopMenuListItem">About </Link>
            <Link activeClass='active' to='' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem"> Portfolio</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-60} duration={500} className="desktopMenuListItem">projects </Link>
        </div>
        <button to='contact' onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }} className='desktopMenuBtn'>
            <img src={msgImg} alt='' className='desktopMenuImg' /> Contact Us
        </button>
    </nav>
  )
}

export default Navbar