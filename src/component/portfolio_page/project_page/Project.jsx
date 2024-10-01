
import { Link } from 'react-router-dom';
import './project.css'

export const Project = () => {
  return (
    <section className='my_project' id='projectsPage' data-aos="fade-up">
    <h1 data-aos="fade-up">My Project</h1>
    <div className= "myProjectGrid ">
 
  <div className="item" data-aos="fade-up">
    <a href="#0" aria-labelledby="person1"></a>
    <img 
      src="https://i.postimg.cc/zBsnj9KV/Screenshot-272.png" 
      alt="Presentation on display laptop" 
    />
    <Link  to="https://crpto-ten.vercel.app/"  className="item__overlay">
      <h3 id="person1" aria-hidden="true">Coin Render</h3>
      <div className="item__body">
        <p><b>Coin Render</b> A React project using the Gecko API to display top 100 cryptocurrencies, showcasing real-time data handling and strong frontend skills</p>
      </div>
    </Link>
  </div>

  <div className="item " data-aos="fade-up">
    <a href="#0" aria-labelledby="person1"></a>
    <img src="https://i.postimg.cc/tRhmQxj7/Screenshot-357.png" alt="" />
    <Link to="https://xlensstudio.onrender.com" className="item__overlay">
      <h3 id="person1" aria-hidden="true">Xlens Visualization</h3>
      <div className="item__body">
        <p><b>Xlens Visualization</b> A full-stack project built with React, Node.js, and MongoDB, highlighting backend integration, responsive design, and smooth user interactions.</p>
      </div>
    </Link>
  </div>
  <div className="item " data-aos="fade-up">
    <a href="#0" aria-labelledby="person1"></a>
    <img src="https://i.postimg.cc/rmdXNF0x/Screenshot-355.png" alt="" />
    <Link to="https://claritycrypto.onrender.com" className="item__overlay">
      <h3 id="person1" aria-hidden="true">Crypto Mining</h3>
      <div className="item__body">
        <p><b>Crypto Mining</b> A Vite-React project for cryptocurrency buying, selling, and mining, demonstrating my expertise in creating functional, fast, and scalable applications.</p>
      </div>
    </Link>
  </div>
  {/* <div className="item " data-aos="fade-up">
    <a href="#0" aria-labelledby="person1"></a>
    <img src="https://media.istockphoto.com/id/1385010159/photo/person-hand-typing-on-keyboard-with-login-and-password-on-screen-display.jpg?s=612x612&w=0&k=20&c=IpsU25g9TLfb37eNnW6K1-e0Sl3Lq4rj417NxTJkkxY=" alt="" />
    <Link className="item__overlay">
      <h3 id="person1" aria-hidden="true">E-commerce</h3>
      <div className="item__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </Link>
  </div>

  <div className="item " data-aos="fade-up">
    <a href="#0" aria-labelledby="person1"></a>
    <img src="https://media.istockphoto.com/id/1226777500/photo/e-learning-education-concept.jpg?s=612x612&w=0&k=20&c=hxXNsfh5t2jcwBJ_6sa4FJzq-ZGtik0gowRFsM-WTUI=" alt="" />
    <Link className="item__overlay">
      <h3 id="person1" aria-hidden="true">Weather website</h3>
      <div className="item__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </Link>
  </div> */}
    </div>
   
  
  </section>
  )
}
