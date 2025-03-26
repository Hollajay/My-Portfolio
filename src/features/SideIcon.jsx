import { IconProps } from "../component/iconProps";

export const SideIcon = () => {
  return (
    <div className="fixed left-0 bottom-0 lg:flex flex-col items-center gap-20 text-light-500 hidden">
      <div className="flex flex-col   space-y-9 ">
        {IconProps.map((data, index) => (
          <div
            key={index}
            className="w-12 h-12 flex items-center justify-center  rounded-4xl hover:bg-card-100 transform transition-all ease-in duration-300"
          >
            <a href={data.link} target="_blank" rel="noopener noreferrer" className="">
              {data.icon}
            </a>
          </div>
        ))}
      </div>
      <hr className="transfrom rotate-90 w-28" />
    </div>
  );
};
