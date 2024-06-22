import { TypeAnimation } from "react-type-animation"
import { Icon } from "../../social_icon/Icon"


export const Home = () => {
  return (
  
     <section className='home_div'>
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
            <div className='socialIcon'><hr /><Icon/><hr /></div>
            
       
       </div>
     </section>
 
  )
}
