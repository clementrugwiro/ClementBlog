import React from 'react'
import './landing.css'
import bgImg from '../../assets/backImage.png'

import hireme from '../../assets/hire.png'
import cv from "../../assets/CV.pdf"

const  Landing = () => {
  return (
    <section id="landing">
      <div className="IntroContent">
        <span className="hello">Hello </span>
        <span className="introText">
          I'm <span className="introName">Clement</span>
          <br />
          an IT professional.
        </span>
        <p className="introPara">
          {" "}
          I'm a skilled IT professional with <br /> experience in
          multidisciplinary projects
        </p>
          <a href={cv} download="Your_CV.pdf">
            {" "}
            <button className="btn">
              <img className="hireme" src={hireme} alt="" />
               Get CV
            </button>
          </a>
      </div>
      <img src={bgImg} alt="" className="bg" />
    </section>
  );
}

export default Landing