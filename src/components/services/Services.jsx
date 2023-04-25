import React, {useState} from 'react';
import './Services.css';
const Services = () =>{
  const [toggleState, setToggleState]= useState(0);
  const toggleTab = (index) =>{
    setToggleState(index);
  }
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="bx bx-trophy services__icon"></i>
            <h3 className="services__title">Experience</h3>
          </div>
          <span className="services__button" onClick={()=> toggleTab(1)}>View More{" "} <i className="uil uil-arrow-right services__button-icon"></i></span>

          <div className={toggleState === 1 ? "services__modal active-modal": "services__modal"}>
            <div className="services__modal-content">
              <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="service__modal-title">Loreim</h3>
              <p className="service__modal-description">Service with 1 year of experience</p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop the user interface</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I deveop web forms</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop windows forms</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="bx bx-code services__icon"></i>
            <h3 className="services__title">Developer</h3>
          </div>
          <span className="services__button" onClick={()=> toggleTab(2)}>View More{" "} <i className="uil uil-arrow-right services__button-icon"></i></span>
          <div className={toggleState === 2 ? "services__modal active-modal": "services__modal"}>
            <div className="services__modal-content">
              <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="service__modal-title">Loreim</h3>
              <p className="service__modal-description">Full Stack Developer</p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Work on database systems</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Systems with windows forms</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web apps</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="bx bx-group services__icon"></i>
            <h3 className="services__title">TeamWork</h3>
          </div>
          <span className="services__button" onClick={()=> toggleTab(3)}>View More{" "} <i className="uil uil-arrow-right services__button-icon"></i></span>
          <div className={toggleState === 3 ? "services__modal active-modal": "services__modal"}>
            <div className="services__modal-content">
              <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="service__modal-title">Loreim</h3>
              <p className="service__modal-description">Work in several development teams</p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Teamwork</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Communicative</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Personal growth</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Services;