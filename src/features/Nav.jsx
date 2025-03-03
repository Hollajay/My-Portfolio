
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png"
import { useEffect, useState } from "react";
import { RxTextAlignJustify } from "react-icons/rx";
import sun from '../assets/svg/sun (1).svg'
import moon from '../assets/svg/moon.svg'

export const Nav = ({
  aboutRef,
  experienceRef,
  hero,
  projectRef,
  contactRef,
}) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const scrollToSection = (elementRef) => {
    if (elementRef?.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="w-full fixed z-50 bg-light-100">
      <div className="w-full flex p-4 items-center lg:justify-center justify-between font-list">
        <div className="space-x-14 lg:flex  hidden items-center text-light-500 ">
          <p
            onClick={() => scrollToSection(aboutRef)}
            className="text-xl font-bold "
          >
            About
          </p>
          <p
            onClick={() => scrollToSection(experienceRef)}
            className="text-xl font-bold"
          >
            Experience
          </p>
          <p onClick={() => scrollToSection(hero)}>
            {theme === "light" ? <img className="w-40 h-14 object-contain" src={logo2} alt="image" />
            : <img className="w-40 h-14 object-contain" src={logo1} alt="image" />}
            
          </p>
          <p
            onClick={() => scrollToSection(projectRef)}
            className="text-xl font-bold"
          >
            Projects
          </p>
          <p
            onClick={() => scrollToSection(contactRef)}
            className="text-xl font-bold"
          >
            Contact
          </p>
        </div>
        
          {theme === "light" ? 
          <div className="lg:hidden"><img className="w-28  object-contain" src={logo2} alt="image" /> </div> : 
          <div className="lg:hidden"><img className="w-28  object-contain" src={logo1} alt="image" /></div>
          }  

        <div className="flex items-center space-x-7">
        <button
          onClick={toggleTheme}
          className=" rounded-md dark:bg-gray-700 transition-all lg:absolute right-5"
        >
          {theme === "light" ? <div><img className="w-7" src={moon} alt="moon" /></div> : <div><img className="w-7" src={sun} alt="sun" /></div>}
        </button>

        <button className="lg:hidden text-light-500">
        <RxTextAlignJustify  size={45}/>
        </button>
        </div>
      </div>
    </div>
  );
};
