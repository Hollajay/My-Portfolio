import { TypeAnimation } from "react-type-animation"
import { Icon } from "../../social_icon/Icon"
import './home.css'
import styled from 'styled-components'


const StyledTypeAnimation = styled.span`
  font-size: 20px;
  display: inline-block;
  color: #FFF5E1;

  @media (max-width: 1200px) {
    font-size: 20px;
  }

  @media (max-width: 992px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }

  @media (max-width: 576px) {
    font-size: 8px;
  }
`;


export const Home = () => {
  return (
  
     <section className='home_div'>
       <div className='home_content' data-aos="fade-up">
       <StyledTypeAnimation data-aos="fade-up">
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
      </StyledTypeAnimation>

        <h1 data-aos="fade-up"> A Web Developer</h1>
        {/* <button className='contact_btn'>contact me</button> */}
        <a
  className="btn btn--svg js-animated-button"
  href="https://ologunagba-olajide.onrender.com/\public\OLOGUNAGBA OLAJIDE CV.pdf" 
  download="OLOGUNAGBA OLAJIDE CV.pdf" 
  data-aos="fade-up"
>
  <span className="btn--svg__label">DOWNLOAD CV</span>
  <svg className="btn--svg__circle" width="190" x="0px" y="0px" viewBox="0 0 60 60" enableBackground="new 0 0 60 60">
    <circle className="js-discover-circle" fill="#FFFFFF" cx="30" cy="30" r="28.7"></circle>
  </svg>
  <svg
    className="btn--svg__border"
    x="0px"
    y="0px"
    preserveAspectRatio="none"
    viewBox="2 29.3 56.9 13.4"
    enableBackground="new 2 29.3 56.9 13.4"
    width="190"
    height="70"
  >
    <g className="btn--svg__border--left js-discover-left-border" id="Calque_2">
      <path
        fill="none"
        stroke="#C80036"
        strokeWidth="0.5"
        strokeMiterlimit="1"
        d="M30.4,41.9H9c0,0-6.2-0.3-6.2-5.9S9,30.1,9,30.1h21.4"
      ></path>
    </g>
    <g className="btn--svg__border--right js-discover-right-border" id="Calque_3">
      <path
        fill="none"
        stroke="#C80036"
        strokeWidth="0.5"
        strokeMiterlimit="1"
        d="M30.4,41.9h21.5c0,0,6.1-0.4,6.1-5.9s-6-5.9-6-5.9H30.4"
      ></path>
    </g>
  </svg>
</a>

       
            <div className='socialIcon'><hr /><Icon/><hr /></div>
            
       
       </div>
     </section>
 
  )
}
