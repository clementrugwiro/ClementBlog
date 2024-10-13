import React from 'react'
import "./about.css"
import techSupport from "../../assets/support.png"
import design from '../../assets/design.png'
import development from '../../assets/web-development.png'
import education from '../../assets/education.png'
import trophy from '../../assets/trophy.png'

const About = () => {
  return (
    <section id="about">
      <span className="skillTitle">About Me</span>
      <span className="skillDec">
        {" "}
        My portfolio highlights skills in development, social media management,
        and graphic design. These include programming, content strategy, and
        graphic design proficiency, all backed by hands-on experience and
        practical achievements
      </span>
      <ul className="skillsbars">
        <div className="skillBar">
          <img src={education} alt="" className="skillbarImg" />
          <div className="skillBarText">
            <h2>Academic Education</h2>
            <p>
              I hold a Bachelor’s degree in Computer and Software Engineering
              from the University of Rwanda. During my studies, I completed
              courses in Software Engineering Principles, Database Management
              Systems, Object-Oriented Programming, Web Development, and Mobile
              Application Development, building a strong foundation in both
              theory and practical applications.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={trophy} alt="" className="skillbarImg" />
          <div className="skillBarText">
            <h2>Youth Leadership Cohort</h2>
            <p>
              I participated in the Youth Leadership Cohort (YLC) at YLabs,
              which covered essential topics including Data 101, Human-Centered
              Design, Professional Presentation, Public Speaking, Marketing and
              Communication, Safeguarding, and Project and Proposal Writing.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={development} alt="" className="skillbarImg" />
          <div className="skillBarText">
            <h2>Software development</h2>
            <p>
              I am proficient in software development, with a strong foundation
              in programming languages and software architecture. I had training
              at SolvIT Africa, where I focused on backend development using
              Node.js and Express, working with JWT for authentication, Swagger
              for API documentation, and Postman for endpoint testing.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={design} alt="" className="skillbarImg" />
          <div className="skillBarText">
            <h2>Design</h2>
            <p>
              I have a solid understanding of design principles with a focus on
              human-centered design. I’ve learned key methods like card sorting,
              user research, and prototyping, which help create intuitive and
              user-friendly solutions. My approach to design ensures that users'
              needs and experiences are at the core of every project.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={techSupport} alt="" className="skillbarImg" />
          <div className="skillBarText">
            <h2>Tech Support Agent</h2>
            <p>
              As a Tech Support Agent, I excel in troubleshooting and resolving
              technical issues with a customer-centric approach. Adept at
              providing solutions and ensuring a smooth technology experience
              for end-users
            </p>
          </div>
        </div>
      </ul>
    </section>
  );
}

export default About