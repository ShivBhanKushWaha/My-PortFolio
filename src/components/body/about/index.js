import React from 'react'
import SocialContact from '../../common/social-contact'
import './about.css'
const About = () => {
  return (
    <div className='about'>
      <div className='about-top'>
        <div className="about-info">
          Hello there 👋,
          I am 
          <br /> <span className='info-name'>SHIVBHAN KUSHWAHA.</span>
          <br /> I love experimenting with the web 
        </div>
        <div className="about-photo">
          <img src={require("../../../assets/coding.png")}  alt=""
          className="picture" />
        </div>
      </div>
      <SocialContact/>
    </div>
  )
}

export default About