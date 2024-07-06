import './skills.css'

export const Skills = () => {
  return (
    <section className='mySkills_container' id='skillsPage' data-aos="fade-up" >
    <div className='mySkills_header'>
  
      <h1 data-aos="fade-up">My skills</h1>
    </div>
    <div className='skills_grid_container'>
      <div className="skills_content" data-back="Back" data-front="Front" data-aos="fade-up">
     <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="image" />
   
        <h2>Javascript</h2>
      </div>
      <div className="skills_content" data-aos="fade-up">
        <img src="https://sass-lang.com/assets/img/logos/logo.svg" alt="image" />
        <h2>Css & sass</h2>
      </div>
      <div className="skills_content" data-aos="fade-up">
        <img src="https://i.postimg.cc/mkT7J7ps/download-removebg-preview.png" alt="image" />
        <h2>React Js</h2>
      </div>
      <div className="skills_content" data-aos="fade-up">
        <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="image" />
        <h2>Bootstrap</h2>
      </div>
      <div className="skills_content" data-aos="fade-up">
        <img src="https://i.postimg.cc/9QcF9JRV/download-1-removebg-preview.png" alt="image" />
        <h2>Tailwind css</h2>
      </div>
      <div className="skills_content" data-aos="fade-up">
        <img src="https://i.postimg.cc/qRwNtSwP/download-4-removebg-preview.png" alt="image" />
        <h2>PHP</h2>
      </div>
      <div className="skills_content" data-aos="fade-up">
        <img src="https://i.postimg.cc/8CP52tNw/download-3-removebg-preview.png" alt="image" />
        <h2>laravel</h2>
      </div>
      <div className="skills_content" data-aos="fade-up">
      <img src="https://i.postimg.cc/g0SJm80p/logomark-orange-2x-removebg-preview.png" alt="image" />
        <h2>git</h2>
      </div>
  
    </div>
  
  </section>
  )
}
