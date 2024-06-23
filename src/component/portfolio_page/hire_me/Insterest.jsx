import  { useEffect, useRef } from 'react';
import './insterest.css'
import { FaPhoneAlt, FaRegAddressCard  } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";


export const Insterest = () => {
  const buttonsRef = useRef([]);

  useEffect(() => {
    const buttons = buttonsRef.current;
    
    buttons.forEach((button) => {
      let target = button.querySelector('.target');
      
      function handleMove(e) {
        const x = -350 + (e.pageX - button.offsetLeft - 300 / 2) / 3;
        const y = -100 + (e.pageY - button.offsetTop - 100 / 2) / 3;

        target.style.setProperty('--x', `${x}px`);
        target.style.setProperty('--y', `${y}px`);
      }

      button.addEventListener('mousemove', (e) => handleMove(e));
      button.addEventListener('touchmove', (e) => handleMove(e.changedTouches[0]));

      return () => {
        button.removeEventListener('mousemove', (e) => handleMove(e));
        button.removeEventListener('touchmove', (e) => handleMove(e.changedTouches[0]));
      };
    });
  }, []);

  return (
    <section className='interest_section' id='hireMe'>
      {/* <div className='interested_div'>
       
      </div> */}
      {/* Contact me div */}
      <div ref={el => buttonsRef.current[3] = el} className="  button1 ">
        <div className="pattern">
          <div className="target inner1 bg4"></div>
        </div>
        <div className="text1">
      
        <h1>Interested in working with me?</h1>
        {/* <button>Hire me</button> */}
        <button className="pulse">Hire me</button>
        </div>
      </div>

      <div className='contactMe_div'>

     
      <div ref={el => buttonsRef.current[0] = el} className="button">
        <div className="pattern">
          <div className="target inner bg1"></div>
        </div>
        <div className="text">
        <FaRegAddressCard  className='info_icon'/>
          <h1>Address</h1>
          <address>no2 bodija road Ibadan, Oyo state</address>
        </div>
      </div>
      <div ref={el => buttonsRef.current[1] = el} className="button">
        <div className="pattern">
          <div className="target inner bg1"></div>
        </div>
        <div className="text">
        <TfiEmail className='info_icon'/>
          <h1>Email</h1>
          <p>olajide2210@gmail.com</p>
        </div>
      </div>
      <div ref={el => buttonsRef.current[2] = el} className="button">
        <div className="pattern">
          <div className="target inner bg1"></div>
        </div>
        <div className="text">
        <FaPhoneAlt className='info_icon'/>
          <h1>Phone</h1>
          <p>+234 8118908368</p>
        </div>
      </div>
      </div>
    </section>
  );
};


