
import { useRef,} from "react"
import { About } from "./About"
import { Contact } from "./Contact"
import { Experience } from "./Experience"
import { Header } from "./Header"
// import { Nav } from "./Nav"
import { Projects } from "./Projects"
import { SideIcon } from "./SideIcon"
import { Nav } from "./Nav"
import { Footer } from "./Footer"
export const Home = () => {



 
  const aboutRef = useRef(null)
  const experienceRef = useRef(null)
  const projectRef = useRef(null)
  const contactRef = useRef(null)
  const hero = useRef(null)

  return (
    <div className={`font-list relative bg-light-100 `}>
          <Nav aboutRef={aboutRef} experienceRef={experienceRef} projectRef={projectRef} contactRef={contactRef} hero={hero}/>
           <SideIcon/>
        <div className="fixed lg:flex hidden items-center flex-col gap-48  text-light-500  bottom-0 right-0">
          <p className="transform rotate-90 font-subhead ">Designed & built by Ologunagba Olajide</p> 
          <hr className="w-28 transform rotate-90"/>
        </div>
       <div ref={hero}><Header contactRef={contactRef}/></div>
       <div ref={aboutRef}><About /></div>
       <div ref={experienceRef}><Experience/></div>
       <div ref={projectRef}><Projects/></div>
       <div ref={contactRef}><Contact/></div>
       <div><Footer/></div>
       
    </div>
  )
}
