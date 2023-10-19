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
            <Link className="desktopMenuListItem">Home </Link>
            <Link className="desktopMenuListItem">About </Link>
            <Link className="desktopMenuListItem"> Portfolio</Link>
            <Link className="desktopMenuListItem">projects </Link>
        </div>
        <button className='desktopMenuBtn'>
            <img src={msgImg} alt='' className='desktopMenuImg' /> Contact Us
        </button>
    </nav>
  )
}

export default Navbar