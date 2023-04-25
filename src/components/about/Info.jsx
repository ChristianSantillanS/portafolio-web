import React from 'react';
  const info = () => {
  return (
    <div className='about__info grid'>
      <div className="about__box">
      <i className='bx bx-code-block about__icon'></i>
        <h3 className="about__title">Programming</h3>
        <span className="about__subtitle">I like programming, developing and above all learning.</span>
        <br/>
      </div>
      <div className="about__box">
      <i className='bx bxs-pencil about__icon' ></i>
        <h3 className="about__title">Projects</h3>
        <span className="about__subtitle">I have worked on development projects, collaborating with programming teams</span>
        <br/> 
      </div>
      <div className="about__box">
      <i className='bx bxs-camera about__icon' ></i>
        <h3 className="about__title">Photography</h3>
        <span className="about__subtitle">I like to take pictures and show them on my social networks</span>
        <br/>
      </div>
    </div>
  )
}
export default info;