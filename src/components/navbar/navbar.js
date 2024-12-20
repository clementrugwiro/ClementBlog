import React, {useState} from 'react'
import "./navbar.css"
import logo from '../../assets/Blogo.png'
import {Link} from 'react-scroll'
import msgImg from '../../assets/chat-bubble.png'
import menu from '../../assets/list.png'



const Navbar = () => {
      const [showMenu, setShowMenu] = useState(false);


  return (
    <nav className="navbar">
      <img src={logo} alt="" className="logo" />
      <div className="desktopmenu">
        <Link
          activeClass="active"
          to="landing"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home{" "}
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-20}
          duration={500}
          className="desktopMenuListItem"
        >
          About{" "}
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="desktopMenuListItem"
        >
          projects{" "}
        </Link>
        <Link
          activeClass="active"
          to="services-section"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
          onClick={() => setShowMenu(false)}
        >
          Services{" "}
        </Link>
        <Link
          activeClass="active"
          to="tech-skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Skill-Set{" "}
        </Link>
      </div>
      <button
        to="contact"
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={msgImg} alt="" className="desktopMenuImg" /> Contact Us
      </button>

      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navmenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="landing"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          Home{" "}
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-20}
          duration={500}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          About{" "}
        </Link>
        <Link
          activeClass="active"
          to="tech-skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          {" "}
          Skills-Set
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          Projects{" "}
        </Link>
        <Link
          activeClass="active"
          to="services-section"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          Services{" "}
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          Contact{" "}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar