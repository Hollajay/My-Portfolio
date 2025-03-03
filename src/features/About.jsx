import profileimage from '../assets/profile picture.jpg'
import { SkillProps } from '../component/skills-props'

export const About = () => {
  return (
    <div className=" lg:px-15 w-full min-h-screen">
       <div className="lg:px-20 p-6">
       <h1 className="text-3xl  text-left font-subhead text-light-400">{`<About Me/>`}</h1>
         <div className="w-full lg:flex flex-row-reverse p-2 space-y-7 my-8">
            <div className="lg:w-1/2 w-full flex justify-center items-center lg:p-12 ">
            <div className='md:w-80 md:h-96 w-64 h-80 bg-light-400 rounded-2xl '>
              <img className='w-80 h-full object-cover rounded-2xl transform rotate-12 hover:rotate-0 transition-all duration-700 ease-in'  src={profileimage} alt="profileimage" />
              </div></div>
            <div className="lg:w-1/2 w-full space-y-5 text-light-300 text-lg">
               <p>My journey into web development began when I discovered the power of building interactive web pages. What started as a curiosity quickly turned into a passion as I immersed myself in JavaScript, PHP, and React, creating dynamic and engaging user experiences.
               </p>
               <p>Fast-forward to today, I have gained hands-on experience working as a front-end developer at Proattire, where I collaborate with teams to build scalable and accessible web applications. I’ve also contributed to various projects, from designing responsive UI components to integrating APIs and optimizing performance for better user engagement.
               </p>
               <p>Beyond my professional experience, I am always eager to learn and grow. I enjoy solving complex problems and refining my skills to deliver high-quality digital experiences. My goal is to create applications that are not only functional but also intuitive and visually appealing.:</p>
               <p>Here are some of the technologies I’ve been working with recently:</p>
               <div className='md:px-6  grid md:grid-cols-4 grid-cols-3 space-y-4'>
                {SkillProps.map((data, index)=> (
                 <div key={index}>
                 <div><img className='w-12' src={data.icon} alt='image'></img></div>
                 <p>{data.name}</p>
                </div>
                ))
                }

               </div>
               <p>I’m always open to exciting opportunities where I can contribute my skills and collaborate with like-minded professionals to build innovative web solutions.</p>
            </div>
            

         </div>
       </div> 
    </div>
  )
}
