import { BiLinkExternal } from "react-icons/bi"
// import { SkillProps } from "../component/skills-props"
import { projectProps } from "../component/projectProps"

export const Projects = () => {
  return (
    <div className="lg:px-15 md:p-10  w-full min-h-screen">
    <div className="lg:px-20 ">
    <h1 className="text-3xl  text-left font-subhead text-light-400">{`<Projects/>`}</h1>
     <div className="grid p-6 lg:grid-cols-3 md:grid-cols-2 gap-7 text-light-500">
      {projectProps.map((data,index) => (
       <div key={index} className="p-6 rounded-xl hover:bg-card-100 bg-transparent shadow-project transition-all ease-in duration-500">
        <div><img className="h-44 rounded-xl w-full" src={data.image} alt="image" /></div>
         <div className="mt-3">
            <h1 className="text-light-400 text-xl">{data.title}</h1>
            <p className="text-sm">{data.details} </p>
         </div>
         <div>
         <div className="flex justify-between items-center py-2">
           <div className="flex items-center space-x-1 w-12 h-6">
              {data.icons?.map((iconic, index)=>(
                <div key={index} >{iconic.icon}</div>
              ))}
           </div>
            <a href={data.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-light-400 font-subhead text-xl">
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
