
import {  BiHighlight} from "react-icons/bi";

export const Experience = () => {
  return (
    <div className="- lg:px-15 md:p-5 w-full min-h-screen">
    <div className="lg:px-20 p-6">
    <h1 className="text-3xl  text-left font-subhead text-light-400">{`<Experience/>`}</h1>
     <div className="lg:p-6 mt-2  lg:pr-80 flex flex-col gap-14 text-light-300">
        <div className="shadow-pro space-y-2 md:p-5 p-2 rounded-xl">
            <div className="md:flex items-center space-x-2">
                <h1 className="text-2xl font-semibold text-light-400">Frontend Developer</h1> 
                <p className="text-xl font-thin">@Proattire Technology</p>
            </div>
            <p className="text-lg text-light-500 font-subhead">Sep 2024-Present</p>
            <div className="px-5 space-y-3">
            <div className="flex space-x-3 items-center" data-aos="fade-up">
                <BiHighlight className="text-light-400 w-7"/>
                <p className="text-sm">Built and maintained responsive web applications using React and
                TypeScript.</p>
            </div>
            <div className="flex space-x-3 items-center" data-aos="fade-up">
                <BiHighlight className="text-light-400 w-7"/>
               <p className="text-sm">Designed and implemented modern UI components with Chakra UI,
       ensuring consistency and accessibility.</p>
            </div>
            <div className="flex space-x-3 items-center" data-aos="fade-up">
                <BiHighlight className="text-light-400 w-7"/>
                <p className="text-sm">Collaborated with cross-functional teams, leveraging Git/GitHub for
                version control and streamlined workflows.</p>
            </div>
            <div className="flex space-x-3 items-center" data-aos="fade-up">
                <BiHighlight className="text-light-400 w-7"/>
                <p className="text-sm">Optimized application performance, resulting in faster load times and
                improved user satisfaction.</p>
            </div>
            </div> 
        </div>

        <div className="shadow-pro space-y-2 p-5 rounded-xl">
            <div className="lg:flex  space-x-2">
                <h1 className="text-2xl font-semibold text-light-400">Fullstack developer</h1> 
                <p className="text-xl">@Appclick Technology</p>
            </div>
            <p className="text-lg text-light-500 font-subhead">aug 2024-nov 2024 </p>
            <div className="px-5 space-y-3">
            <div className="flex space-x-3 items-center" data-aos="fade-up">
                <BiHighlight className="text-light-400 w-7"/>
                <p className="text-sm">Worked with HTML, CSS, JavaScript, PHP, and Laravel to develop
                interactive web pages.</p>
            </div>
            <div className="flex space-x-3 items-center" data-aos="fade-up">
                <BiHighlight className="text-light-400 w-7"/>
                <p className="text-sm">Designed and styled web interfaces using Bootstrap and Tailwind CSS</p>
            </div>
            <div className="flex space-x-3 items-center" data-aos="fade-up">
                <BiHighlight className="text-light-400 w-7"/>
                <p className="text-sm">Assisted in creating and debugging back-end solutions, gaining
                foundational knowledge of MySQL databases.</p>
            </div>
            <div className="flex space-x-3 items-center" data-aos="fade-up">
                <BiHighlight className="text-light-400 w-7"/>
                <p className="text-sm">Collaborated with senior developers to deliver high-quality software
                projects within deadlines.</p>
            </div>
            </div> 
        </div>
     </div>
    </div>
    </div>
  )
}
