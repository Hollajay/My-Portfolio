import './portfolio.css'
import { FaRegCopyright } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { Contact } from './contact_page/Contact';
import { Insterest } from './hire_me/Insterest';
import { Project } from './project_page/Project';
import { Skills } from './skills_page/Skills';
import { About } from './about_page/About';
import { Home } from './home_page/Home';



export const Portfolio = () => {
  const [activeLink, setActiveLink] = useState('');

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const hireRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'homePage', ref: homeRef, offset: 0 },
        { id: 'aboutPage', ref: aboutRef, offset: 0 },
        { id: 'skillsPage', ref: skillsRef, offset: 0 },
        { id: 'projectsPage', ref: projectsRef, offset: 0 },
        { id: 'hireMe', ref: hireRef, offset: 0 },
        { id: 'contactPage', ref: contactRef, offset:0}
      ];

      let currentSection = '';
      sections.forEach(section => {
        const element = section.ref.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 50 && rect.bottom >= 50) {
            currentSection = section.id;
          }
        }
      });

      setActiveLink(currentSection);
    };

    // Initial check
    handleScroll();

    // Attach scroll listener
    window.addEventListener('scroll', handleScroll);

    // Clean up on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    setActiveLink(id);
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: 0 // Adjust offset if necessary
    });
  };




  return (
  <div className='Container'>
        <div className="sidebar">
        <ul>
             <li className='homeList'>
            
            <NavLink
              to="/#homePage"
              className={activeLink === 'homePage' ? "Onactive" : "navlink"}
              onClick={() => scrollToSection('homePage')}
            >
              Home
            </NavLink>
           
          </li>
          <li className='aboutList'>
            <NavLink
              to="/#aboutPage"
              className={activeLink === 'aboutPage' ? "Onactive" : ""}
              onClick={() => scrollToSection('aboutPage')}
            >
              About
            </NavLink>
          </li>
          <li className='skillsList'>
            <NavLink
              to="/#skillsPage"
              className={activeLink === 'skillsPage' ? "Onactive" : ""}
              onClick={() => scrollToSection('skillsPage')}
            >
              Skills
            </NavLink>
          </li>
          <li className='projectsList'>
            <NavLink
              to="/#projectsPage"
              className={activeLink === 'projectsPage' ? "Onactive" : ""}
              onClick={() => scrollToSection('projectsPage')}
            >
              Projects
            </NavLink>
          </li>
          <li className='hireList'>
            <NavLink
              to="/#hireMe"
              className={activeLink === 'hireMe' ? "Onactive" : ""}
              onClick={() => scrollToSection('hireMe')}
            >
              Hire me
            </NavLink>
          </li>
          
          <li className='contactList'>
            <NavLink
              to="/#contactPage"
              className={activeLink === 'contactPage' ? "Onactive" : "navLink"}
              onClick={() => scrollToSection('contactPage')}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

    <div className='Content_sect' >
     <section  id='homePage'  ref={homeRef}  >
      <Home/>
     </section>
                  
                   {/* about me  */}
  
    <section id='aboutPage' ref={aboutRef}>
    <About />
    </section>
  

                  {/* my skills */}

<section id='skillsPage' ref={skillsRef}>
 <Skills />
</section>


    {/* my projects */}


<section id='projectsPage' ref={projectsRef}>
  <Project/>
</section>



      {/* insterested in me div */}
  
<section  id='hireMe' ref={hireRef} >
  <Insterest  />
</section>


                   {/* Have any question section */}

<section  id='contactPage'  ref={contactRef} >
<Contact  />
</section>

    {/* footer */}
    <div className="footer-copyright" ><p>Copyright <FaRegCopyright /> 2024  Design by Hincas. All Right Reserved</p></div>
    























































   

    </div> 
  </div>
  )
}
