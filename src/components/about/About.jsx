import React from 'react'
import "./About.css";
import AboutImg from "../../assets/About.jpg";
import CV from "../../assets/Christian-Cv.pdf";
import Info from './Info';
const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About me</h2>
        <span className="section__subtitle">My introduction</span>
        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />
            <div className="about__data">
                <Info/>
                <p className="about__description">
                Full stack developer,
                I have created web applications with various frameworks
                and desktop applications with windows forms.
                </p>
                <br/>
                <a download="" href={CV} 
                className="button button--flex"><i className='bx bxs-file-pdf about__icon2' ></i>Download CV</a>
            </div>

        </div>
    </section>
  )
}
export default About;