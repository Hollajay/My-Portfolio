import './skills.css'

export const Skills = () => {
  return (
    <section className='mySkills_container' id='skillsPage' >
    <div className='mySkills_header'>
  
      <h1>My skills</h1>
    </div>
    <div className='skills_grid_container'>
      <div className="skills_content" data-back="Back" data-front="Front">
     <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="image" />
   
        <h2>Javascript</h2>
      </div>
      <div className="skills_content">
        <img src="https://sass-lang.com/assets/img/logos/logo.svg" alt="image" />
        <h2>Css & sass</h2>
      </div>
      <div className="skills_content">
        <img src="https://files.fm/u/9vy5yyfv7v" alt="image" />
        <h2>React Js</h2>
      </div>
      <div className="skills_content">
        <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="image" />
        <h2>Bootstrap</h2>
      </div>
      <div className="skills_content">
        <img src="src/assets/images/download__1_-removebg-preview.png" alt="image" />
        <h2>Tailwind css</h2>
      </div>
      <div className="skills_content">
        <img src="src/assets/images/download__4_-removebg-preview.png" alt="image" />
        <h2>PHP</h2>
      </div>
      <div className="skills_content">
        <img src="src/assets/images/download__3_-removebg-preview.png" alt="image" />
        <h2>laravel</h2>
      </div>
      <div className="skills_content">
      <img src="src/assets/images/logomark-orange_2x-removebg-preview.png" alt="image" />
        <h2>git</h2>
      </div>
  
    </div>
  
  </section>
  )
}
