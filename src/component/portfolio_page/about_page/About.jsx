import { useEffect } from 'react';
import './about.css'
import Aos from 'aos';


export const About = () => {
  useEffect(() => {
  Aos.init()
  }, [])
  
  return (
    <section className='aboutMe_container' id='aboutPage' >
      
      <div className='Right_about_container'>
        <h1 className='Right_about_header' data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="500">Know me more</h1>
        <div className='Right_about_text'>
          <p data-aos="fade-up"><span data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="2500">I am  a full stack web developer with a passion for </span>
           <span data-aos="fade-up"data-aos-easing="linear"
     data-aos-duration="1500">creating seamless, user-friendly applications.</span>
            <span data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">My skills span both front-end and back-end </span>
             <span data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">development, ensuring robust and efficient</span>
              <span data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500"> solutions. I am  dedicated to my craft and am</span>
              <span data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">available anytime for work, ready to tackle new</span> 
              <span data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500"> challenges and deliver high-quality results</span></p>

        </div>

      </div>
      <div className='left_about_grid'>
        <div className='img-container' data-aos= "fade-up">
        <img src="https://i.postimg.cc/SKptkTt8/profileimage.jpg" alt="image" />
        </div>
    
      </div>
    </section>

  )
}
