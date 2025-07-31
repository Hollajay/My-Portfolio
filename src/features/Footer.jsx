import { IconProps } from "../component/iconProps"
import ScrollToggleButton from "../component/ScrollToggleBtn"


export const Footer = () => {
  return (
    <div className=" flex-col flex items-center">
        <div className=" lg:hidden flex text-light-500 space-x-6">
            {IconProps.map((data,index) =>(
               <a href={data.link} key={index}>{data.icon}</a>
            ))}
            
        </div>
        <div className=" text-center py-4 font-subhead text-light-300">
        <p>Copyright 2025 Design by Hincas. All Right Reserved</p>   
        </div>

        <ScrollToggleButton/>
    </div>
  )
}
