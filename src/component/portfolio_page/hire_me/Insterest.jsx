import { useEffect, useRef } from 'react';
import './insterest.css';
import { FaPhoneAlt, FaRegAddressCard } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

export const Insterest = ({ onHireClick }) => {
  const buttonsRef = useRef([]);
  const contactRef = useRef(null);

  const handleScrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const buttons = buttonsRef.current;
    
    const handleMove = (e) => {
      const button = e.currentTarget;
      const target = button.querySelector('.target');
      const x = -350 + (e.pageX - button.offsetLeft - 300 / 2) / 3;
      const y = -100 + (e.pageY - button.offsetTop - 100 / 2) / 3;

      target.style.setProperty('--x', `${x}px`);
      target.style.setProperty('--y', `${y}px`);
    };

    buttons.forEach((button) => {
      button.addEventListener('mousemove', handleMove);
      button.addEventListener('touchmove', (e) => handleMove(e.changedTouches[0]));
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener('mousemove', handleMove);
        button.removeEventListener('touchmove', (e) => handleMove(e.changedTouches[0]));
      });
    };
  }, []);

  return (
    <section className='interest_section' id='hireMe' data-aos="fade-up">
      <div ref={el => buttonsRef.current[0] = el} className="button1">
        <div className="pattern">
          <div className="target inner1 bg4"></div>
        </div>
        <div className="text1">
          <h1 data-aos="fade-up">Interested in working with me?</h1>
          <button onClick={handleScrollToContact} className="pulse" data-aos="fade-up">Hire me</button>
        </div>
      </div>
      <div className='contactMe_div'>
        <div ref={el => buttonsRef.current[1] = el} className="button" data-aos="fade-up">
          <div className="pattern">
            <div className="target inner bg1"></div>
          </div>
          <div className="text">
            <FaRegAddressCard className='info_icon' data-aos="fade-up" />
            <h1 data-aos="fade-up">Address</h1>
            <address data-aos="fade-up">Ibadan, Nigeria</address>
          </div>
        </div>
        <div ref={el => buttonsRef.current[2] = el} className="button" data-aos="fade-up">
          <div className="pattern">
            <div className="target inner bg1"></div>
          </div>
          <div className="text">
            <TfiEmail className='info_icon' data-aos="fade-up" />
            <h1 data-aos="fade-up">Email</h1>
            <p data-aos="fade-up">olajide2210@gmail.com</p>
          </div>
        </div>
        <div ref={el => buttonsRef.current[3] = el} className="button" data-aos="fade-up">
          <div className="pattern">
            <div className="target inner bg1"></div>
          </div>
          <div className="text">
            <FaPhoneAlt className='info_icon' data-aos="fade-up" />
            <h1 data-aos="fade-up">Phone</h1>
            <p data-aos="fade-up">+234 8118908368</p>
          </div>
        </div>
      </div>
    </section>
  );
};
