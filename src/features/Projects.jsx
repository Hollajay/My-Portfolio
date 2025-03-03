import { BiLinkExternal } from "react-icons/bi"
import { SkillProps } from "../component/skills-props"
import projectimage from '../assets/project.jpg'
import { projectProps } from "../component/projectProps"

export const Projects = () => {
  return (
    <div className="bg-light-100 lg:px-20 md:p-10 w-full min-h-screen">
    <div className="lg:px-28">
    <h1 className="text-3xl  text-left font-subhead text-light-400">{`<Projects/>`}</h1>
     <div className="grid p-6 lg:grid-cols-3 md:grid-cols-2 gap-7 text-light-500">
      {projectProps.map((data,index) => (
       <div key={index} className="p-6 rounded-xl bg-card-100 hover:bg-transparent hover:shadow-project transition-all ease-in duration-500">
        <div><img className="h-40 rounded-xl w-full" src={data.image} alt="image" /></div>
         <div className="mt-3">
            <h1 className="text-light-400 text-xl">{data.title}</h1>
            <p className="text-sm">{data.details} </p>
         </div>
         <div>
         <div className="flex justify-between items-center py-2">
           <div className="flex space-x-1">
             {SkillProps.map((data,index)=>(
              <div key={index}><img className="w-5" src={data.icon} alt="image" /></div>
             ))}
            
           </div>
            <a href={data.link} className="flex items-center text-light-400 font-subhead">
              Preview 
              <BiLinkExternal />
            </a>
          </div>
         </div>
       </div>    
        ))}
       </div>     
     </div>
    </div>
  )
}
