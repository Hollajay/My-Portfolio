import { BiHighlight } from "react-icons/bi";
import { experienceData } from "../component/experienceData";


export const Experience = () => {
  return (
    <div className="- lg:px-15 md:p-5 w-full min-h-screen">
      <div className="lg:px-20 p-6">
        <h1 className="text-3xl  text-left font-subhead text-light-400">{`<Experience/>`}</h1>
        <div className="lg:p-6 mt-2  lg:pr-80 flex flex-col gap-14 text-light-300">
          {experienceData.map((data, index) => (
            <div key={index} className="shadow-pro space-y-2 p-5 rounded-xl">
              <div className="lg:flex  space-x-2">
                <h1 className="text-2xl font-semibold text-light-400">
                  {data.position}
                </h1>
               <div className="flex items-center justify-between w-full mt-1">
                <div className="flex items-center gap-2">
                  <div className="w-7 rounded-2xl shadow-lg"><img src={data.logo} alt="" /></div>
                  <p className="text-xl">@{data.companyname}</p>
                </div>
                <small>{data.location}</small>
                </div> 
              </div>
              <p className="text-lg text-light-500 font-subhead">
                {data.duration}
              </p>
              <div className="px-5 space-y-3">
                {data.about.map((descrip, index) => (
                  <div
                    key={index}
                    className="flex space-x-3 items-center"
                    data-aos="fade-up"
                  >
                    <BiHighlight className="text-light-400 w-7" />
                    <p className="text-sm">{descrip.descrip}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
