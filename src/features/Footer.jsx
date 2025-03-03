import { IconProps } from "../component/iconProps"


export const Footer = () => {
  return (
    <div className="bg-light-100 flex-col flex items-center">
        <div className="bg flex text-light-500 space-x-6">
            {IconProps.map((data,index) =>(
               <a href={data.link} key={index}>{data.icon}</a>
            ))}
            
        </div>
        <div className=" text-center py-4 font-subhead text-light-300">
        <p>Copyright 2025 Design by Hincas. All Right Reserved</p>   
        </div>
    </div>
  )
}
