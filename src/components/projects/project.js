import React from 'react'
import './projects.css'
import Hamwe from '../../assets/hamwe.png'
import GreenAfrica from '../../assets/GreenAfrica.png'
import twistads from '../../assets/twistads.png'
import RMHPImage from '../../assets/rmhp.png'
import CyberRwandaImage from '../../assets/cyberrwanda.png'
import PortfolioImage from '../../assets/portfolio.png'

const Project = () => {
 return (
   <section id="projects">
     <div className="projectsBar">
       <h1 className="projectTitle">My Projects</h1>
       <span className="introdec">
         Through the past years, I have had the opportunity to work on diverse
         projects in various disciplines, all aimed at creating solutions
         through technology.
       </span>

       <div className="projectBar">
         <a
           href="https://hamwe.rw"
           target="_blank"
           rel="noopener noreferrer"
         >
           <img src={Hamwe} alt="" className="projectImg" />
         </a>
         <div className="projecttext">
           <h2>Hamwe.rw</h2>
           <p>
             Developed the backend for Hamwe, a real estate platform, using
             Node.js and MongoDB. Integrated Cloudinary for image storage,
             ensuring efficient management of property listings.
           </p>
         </div>
       </div>

       <div className="projectBar">
         <a
           href="https://cyberrwanda.com/"
           target="_blank"
           rel="noopener noreferrer"
         >
           <img src={CyberRwandaImage} alt="" className="projectImg" />
         </a>
         <div className="projecttext">
           <h2>CyberRwanda</h2>
           <p>
             Worked as a developer on CyberRwanda, a digital platform where I
             added features to the already built site and Android app. The site
             was built using React.js, while the app utilized React Native for a
             seamless user experience.
           </p>
         </div>
       </div>

       <div className="projectBar">
         <a
           href="https://rmhp.netlify.app/"
           target="_blank"
           rel="noopener noreferrer"
         >
           <img src={RMHPImage} alt="" className="projectImg" />
         </a>
         <div className="projecttext">
           <h2>RMHP</h2>
           <p>
             Developed a website for RMHP, a starting organization, using
             Next.js. This project focused on creating a user-friendly interface
             to promote their initiatives and services.
           </p>
         </div>
       </div>

       <div className="projectBar">
         <a
           href="https://clementrugwiro.netlify.app/"
           target="_blank"
           rel="noopener noreferrer"
         >
           {" "}
           <img src={PortfolioImage} alt="" className="projectImg" />
         </a>

         <div className="projecttext">
           <h2>My Portfolio</h2>
           <p>
             Created my own portfolio using NEXT JS to showcase my skills and
             projects. The portfolio highlights my development experience and
             serves as a platform to present my work.
           </p>
         </div>
       </div>

       <div className="projectBar">
         <a
           href="https://github.com/clementrugwiro/hades-motors"
           target="_blank"
           rel="noopener noreferrer"
         >
           <img src={twistads} alt="" className="projectImg" />
         </a>

         <div className="projecttext">
           <h2>Twist Ads</h2>
           <p>
             Developed the backend for Twist Ads, a platform that helps
             individuals earn money by advertising using their cars. Utilized
             Node.js and MongoDB to create a robust backend for managing users
             and advertisements efficiently.
           </p>
         </div>
       </div>

       <div className="projectBar">
         <a
           href="https://github.com/clementrugwiro/Green-Africa-Inititative"
           target="_blank"
           rel="noopener noreferrer"
         >
           <img src={GreenAfrica} alt="" className="projectImg" />
         </a>
         <div className="projecttext">
           <h2>Green Africa Initiative</h2>
           <p>
             Developed my first project using simple HTML, CSS, and JavaScript,
             integrating a third-party API for handling messages and emails.
             This project focused on promoting environmental awareness and
             initiatives.
           </p>
         </div>
       </div>
     </div>
   </section>
 );

}

export default Project