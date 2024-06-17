import './portfolio.css'
import { FaRegCopyright } from "react-icons/fa";
import '../../assets/images/download__1_-removebg-preview (1).png'
import { Sidebar } from './sidebar/Sidebar';
import { TypeAnimation } from 'react-type-animation';
import { Icon } from '../social_icon/Icon';


export const Portfolio = () => {

//   const socialIcons = [
//     { iconUrl: 'https://twitter.com/twholman' },
//     { iconUrl: 'https://twitter.com/twholman' },
//     { iconUrl: 'https://shutterstock.sa7eer.com/r/d/sstk?id1=search-top&id2=6229b513-f510-45d1-a23d-f0ac090b0be9&id3=b8c609da-4ebe-4b02-bd2e-cb9f45bdb8ed&u=https%3A%2F%2Fshutterstock.7eer.net%2Fc%2F38919%2F1636534%2F1305%3Fsharedid%3Dwww.vecteezy.com%26subId1%3Dsearch-top%26subId2%3D6229b513-f510-45d1-a23d-f0ac090b0be9%26subId3%3Db8c609da-4ebe-4b02-bd2e-cb9f45bdb8ed%26u%3Dhttps%253A%252F%252Fwww.shutterstock.com%252Fimage-photo%252Fcamera-icon-photo-frame-on-white-1779908711' },
//     { iconUrl: 'https://twitter.com/twholman' },
//   ];

//   const fontFaceStyle = `
//   @font-face {
//     font-family: 'tweet';
//     src: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/277/tweet.woff") format("woff");
//     font-weight: normal;
//     font-style: normal;
//   }
// `;



  return (
  <div className='Container'>
    <Sidebar/>

    <section className='Content_sect'>
     <div className='home_div'>
       <div className='home_content'>
         {/* <h2 className='my_name_tag'>I am Ologunagba Olajide</h2> */}
         <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I am Ologunagba Olajide',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'I am full stack web developer',
        1000,
        
      ]}
      wrapper="span"
      speed={40}
      
      style={{ fontSize: '3em', display: 'inline-block' ,color:"#FFF5E1"}}
      repeat={Infinity}
    />

        <h1> A Web Developer</h1>
        <button className='contact_btn'>contact me</button>
        {/* {socialIcons.map((icon, index) => (
              <Icon key={index} iconUrl={icon.iconUrl} />
            ))} */}
            <div className='socialIcon'><Icon/></div>
            
       
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
   <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="" />
 
      <h2>Javascript</h2>
    </div>
    <div className="skills_content">
      <img src="https://sass-lang.com/assets/img/logos/logo.svg" alt="" />
      <h2>Css & sass</h2>
    </div>
    <div className="skills_content">
      <img src="src/assets/images/download-removebg-preview.png" alt="" />
      <h2>React Js</h2>
    </div>
    <div className="skills_content">
      <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="" />
      <h2>Bootstrap</h2>
    </div>
    <div className="skills_content">
      <img src="src/assets/images/download__1_-removebg-preview.png" alt="" />
      <h2>Tailwind css</h2>
    </div>
    <div className="skills_content">
      <img src="src/assets/images/download__4_-removebg-preview.png" alt="" />
      <h2>PHP</h2>
    </div>
    <div className="skills_content">
      <img src="src/assets/images/download__3_-removebg-preview.png" alt="" />
      <h2>laravel</h2>
    </div>
    <div className="skills_content">
    <img src="src/assets/images/logomark-orange_2x-removebg-preview.png" alt="image" />
      <h2>git</h2>
    </div>

  </div>

</div>


    {/* my projects */}

<div className='my_project'>
  <h1>My Project</h1>
  <div className='myProjectGrid'>
    <div className="myProjectDiv"><img src="https://media.istockphoto.com/id/931198580/photo/software-web-development-programming-code-on-black.jpg?s=612x612&w=0&k=20&c=ITmoBB18VB0qbDpMcc1GG1adj0Y3LsdpJ1uo8LN3k_c=" alt="" /></div>
    <div className="myProjectDiv"><img src="https://media.istockphoto.com/id/174947618/photo/online-newspaper.jpg?s=612x612&w=0&k=20&c=md7AwqeO5zuQ-L0WBjiPljj4M2rRqSKW56oFHZgj66c=" alt="" /></div>
    <div className="myProjectDiv"><img src="https://media.istockphoto.com/id/1385010159/photo/person-hand-typing-on-keyboard-with-login-and-password-on-screen-display.jpg?s=612x612&w=0&k=20&c=IpsU25g9TLfb37eNnW6K1-e0Sl3Lq4rj417NxTJkkxY=" alt="" /></div>
    <div className="myProjectDiv"><img src="https://media.istockphoto.com/id/1447033251/photo/presentation-on-display-laptop-with-notebook-and-glasses-on-table-in-meeting-room.jpg?s=612x612&w=0&k=20&c=Y-AP8IU7FacBME2M20E2RR3oApoREbvMeUFJZSvi76M=" alt="" /></div>
    <div className="myProjectDiv"><img src="https://media.istockphoto.com/id/1226777500/photo/e-learning-education-concept.jpg?s=612x612&w=0&k=20&c=hxXNsfh5t2jcwBJ_6sa4FJzq-ZGtik0gowRFsM-WTUI=" alt="" /></div>
  </div>

</div>

      {/* insterested in me div */}
<div className='insterested_div'>
  <h1>insterested i working with me ?</h1>
  <button>Hire me</button>
</div>


     {/* Contact me div */}

<div className='contactMe_div'>
  <div className="contact_me">
  <h1>Address</h1>
  <address>no2 bodija road Ibadan ,Oyo state</address>
  </div>
  <div className="contact_me">
    <h1>Email</h1>
    <p>olajide2210@gmail.com</p>
    
    </div>
    <div className="contact_me">
      <h1>Phone</h1>
    <p>+234 8118908368</p>
    </div>

</div>


                   {/* Have any question section */}
 <div className='anyQuestion_div'>

      <div className='map_div'>
        <iframe className='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126614.56223805038!2d3.822658372182909!3d7.386909894877332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d77eeff086f%3A0x3b33e0f76e8e04a9!2sIbadan%2C%20Oyo!5e0!3m2!1sen!2sng!4v1710590542906!5m2!1sen!2sng"></iframe>
      </div>
      <div>
        <div>
          <form action=""className='form_field' >
           
            <div className='input_div'><input  type="text" placeholder="Full Name" required /></div>
            <div className='input_div'><input type="email" placeholder="Email" required/></div>
          
            
            <div  className='input_div'><input type="text" placeholder="Subject" required/></div>
            <div >
              <div className='text_area_div'>
                <textarea name="message" rows="6" id="message" placeholder="Message" required=""></textarea>
              </div>
            </div>
            <button>SEND MESSAGE</button>
           
           </form>
        </div>
         
    
      </div>
  
      
</div>


    {/* footer */}
    <div className="footer-copyright"><p>Copyright <FaRegCopyright /> 2024  Design by Hincas. All Right Reserved</p></div>
    























































   

    </section> 
  </div>
  )
}
