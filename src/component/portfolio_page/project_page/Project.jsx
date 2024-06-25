
import { Link } from 'react-router-dom';
import './project.css'

export const Project = () => {
  return (
    <section className='my_project' id='projectsPage' >
    <h1>My Project</h1>
    <div className= "myProjectGrid ">
 
  <div className="item">
    <a href="#0" aria-labelledby="person1"></a>
    <img 
      src="https://media.istockphoto.com/id/1447033251/photo/presentation-on-display-laptop-with-notebook-and-glasses-on-table-in-meeting-room.jpg?s=612x612&w=0&k=20&c=Y-AP8IU7FacBME2M20E2RR3oApoREbvMeUFJZSvi76M=" 
      alt="Presentation on display laptop" 
    />
    <Link  to="https://crpto-ten.vercel.app/"  className="item__overlay">
      <h3 id="person1" aria-hidden="true">Coin Render</h3>
      <div className="item__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </Link>
  </div>

  <div className="item ">
    <a href="#0" aria-labelledby="person1"></a>
    <img src="https://media.istockphoto.com/id/931198580/photo/software-web-development-programming-code-on-black.jpg?s=612x612&w=0&k=20&c=ITmoBB18VB0qbDpMcc1GG1adj0Y3LsdpJ1uo8LN3k_c=" alt="" />
    <Link className="item__overlay">
      <h3 id="person1" aria-hidden="true">Gallery website</h3>
      <div className="item__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </Link>
  </div>
  <div className="item ">
    <a href="#0" aria-labelledby="person1"></a>
    <img src="https://media.istockphoto.com/id/174947618/photo/online-newspaper.jpg?s=612x612&w=0&k=20&c=md7AwqeO5zuQ-L0WBjiPljj4M2rRqSKW56oFHZgj66c=" alt="" />
    <Link className="item__overlay">
      <h3 id="person1" aria-hidden="true">Quiz website</h3>
      <div className="item__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </Link>
  </div>
  <div className="item ">
    <a href="#0" aria-labelledby="person1"></a>
    <img src="https://media.istockphoto.com/id/1385010159/photo/person-hand-typing-on-keyboard-with-login-and-password-on-screen-display.jpg?s=612x612&w=0&k=20&c=IpsU25g9TLfb37eNnW6K1-e0Sl3Lq4rj417NxTJkkxY=" alt="" />
    <Link className="item__overlay">
      <h3 id="person1" aria-hidden="true">E-commerce</h3>
      <div className="item__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </Link>
  </div>

  <div className="item ">
    <a href="#0" aria-labelledby="person1"></a>
    <img src="https://media.istockphoto.com/id/1226777500/photo/e-learning-education-concept.jpg?s=612x612&w=0&k=20&c=hxXNsfh5t2jcwBJ_6sa4FJzq-ZGtik0gowRFsM-WTUI=" alt="" />
    <Link className="item__overlay">
      <h3 id="person1" aria-hidden="true">Weather website</h3>
      <div className="item__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </Link>
  </div>
    </div>
   
  
  </section>
  )
}
