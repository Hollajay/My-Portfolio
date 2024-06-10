import './portfolio.css'

export const Portfolio = () => {
  return (
  <div className='Container'>
    <div className='side_bar'>
      <ul>
        <li>home </li>
        <li>about </li>
        <li>contact</li>
        <li>project</li>
        <li>location</li>
      </ul>
    </div>

    <section className='Content_sect'>
     <div className='home_div'>
       <div className='home_content'>
         <h2 className='my_name_tag'>I am Ologunagba Olajide</h2>
        <h1>Web Developer</h1>
        <button className='contact_btn'>contact me</button>
       </div>
     </div>
                  
                   {/* about me  */}
     <div className='aboutMe_container'>
      <div className='left_about_grid'>
        <img src="https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGZvbGltZSUyMG1hbiUyMHBob3RvJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="image" />
      </div>
      <div className='Right_about_container'>
        <h1 className='Right_about_header'>Know me more</h1>
        <div className='Right_about_text'>
          <p>I am  a full stack web developer with a passion for creating seamless, user-friendly applications. My skills span both front-end and back-end development, ensuring robust and efficient solutions. I am  dedicated to my craft and am available anytime for work, ready to tackle new challenges and deliver high-quality results</p>

        </div>

      </div>
    </div>

                  {/* my skills */}
<div className='mySkills_container'>
  <div className='mySkills_header'>
    <img src="" alt="" />
    <h1>My skills</h1>
  </div>
  <div className='skills_grid_container'>
    <div className="skills_content">
    <img src="" alt="" />
      <h2>Javascript</h2>
    </div>
    <div className="skills_content">
      <h2>Css & sass</h2>
    </div>
    <div className="skills_content">
      <h2>React Js</h2>
    </div>
    <div className="skills_content">
      <h2>Bootstrap</h2>
    </div>
    <div className="skills_content">
      <h2>Tailwind css</h2>
    </div>
    <div className="skills_content">
      <h2>PHP</h2>
    </div>
    <div className="skills_content">
      <h2>laravel</h2>
    </div>
    <div className="skills_content">
      <h2>git</h2>
    </div>

  </div>

</div>



























































   

    </section> 
  </div>
  )
}
