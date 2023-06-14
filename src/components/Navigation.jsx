import { useEffect, useState } from "react";
import logo from "../assets/logo-web.png";

import { menus } from "../utils/constants";

import {
  AiFillClockCircle,
  AiFillFacebook,
  AiFillInstagram,
  AiFillMail,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";

const Navigation = () => {
  const [active, setActive] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  const [lastScrollY, setLastScrollY] = useState("top");

  useEffect(() => {
    function controlNav() {
      if (scrollY > 86) {
        setLastScrollY("down");
      } else {
        setLastScrollY("top");
      }
    }

    window.addEventListener("scroll", controlNav);

    return () => {
      window.removeEventListener("scroll", controlNav);
    };
  }, [lastScrollY]);

  return (
    <header className=" bg-white">
      <div className=" top-address  hidden items-center  justify-between border-b-2 border-gray-300 bg-btn-primary-bg px-4  py-1 md:flex ">
        <div className="left flex items-center gap-5 lg:gap-8 ">
          <div className="flex items-center gap-1">
            <span>
              <MdLocationOn className=" cursor-pointer text-lg text-btn-secondary-text lg:text-xl" />
            </span>
            <span className="text-sm text-text  lg:text-base">
              Delhi, India
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span>
              <AiFillMail className=" cursor-pointer text-lg  text-btn-secondary-text lg:text-xl" />
            </span>
            <span className="text-sm text-text lg:text-base">
              Info@snazzyweb.com
            </span>
          </div>
        </div>

        <div className="right flex items-center  gap-4 lg:gap-8">
          <div className="flex items-center gap-1">
            <span>
              <AiFillClockCircle className=" cursor-pointer text-lg   text-btn-secondary-text lg:text-xl" />
            </span>
            <span className="text-sm   text-text  lg:text-base">
              Office Hours: 9:00 AM – 6:00 PM
            </span>
          </div>

          <ul className="flex items-center gap-3 lg:gap-5">
            <li>
              <a>
                <AiFillTwitterCircle className=" cursor-pointer text-lg   text-text transition-all duration-300 hover:text-white lg:text-xl" />
              </a>
            </li>
            <li>
              <a>
                <AiFillFacebook className="  cursor-pointer text-lg   text-text transition-all duration-300 hover:text-white lg:text-xl" />
              </a>
            </li>
            <li>
              <a>
                <AiFillInstagram className="  cursor-pointer text-lg   text-text transition-all duration-300 hover:text-white lg:text-xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`top-header-desktop z-30 hidden       w-full animate-slideIn items-center  justify-between bg-white   px-4 py-1 backdrop-blur-md md:flex
            ${lastScrollY === "down" ? "fixed left-0 right-0 top-0  " : ""}
            
            `}
      >
        <a href="#" className="logo">
          <img src={logo} alt="logo" className="z-30 h-[50px]  w-[180px]" />
        </a>
        <ul className=" flex items-center gap-5 lg:gap-7">
          {menus.map((menu, index) => {
            return (
              <li key={index} className="">
                <a
                  href={`#${
                    menu.name.toLowerCase() === "home"
                      ? ""
                      : menu.name.toLowerCase()
                  }`}
                  onClick={() => setActive(index)}
                  className={`before:bg-gunmetal relative cursor-pointer  font-poppins text-[12px] uppercase   tracking-[1px]  before:absolute  before:left-1/2
                    before:top-1/2 before:h-[3px] before:w-7 before:translate-x-[-50%] before:translate-y-[450%] before:rounded-3xl before:bg-btn-primary-bg before:duration-500 before:content-['']  hover:text-btn-primary-bg
                   lg:text-sm
                    ${
                      active == index
                        ? "text-btn-primary-bg before:visible before:opacity-100"
                        : "text-text before:invisible before:opacity-0"
                    }
                    `}
                >
                  {menu.name}
                </a>
              </li>
            );
          })}
        </ul>
        <a className="get-started flex h-[2rem] cursor-pointer items-center justify-center rounded-[3.2rem] border-[0.1rem] border-btn-primary-bg bg-white px-[1rem]  font-poppins font-medium text-text shadow-[0_0.2rem_0_0_#00b3a0] transition-all duration-300 hover:translate-y-[0.3rem] hover:shadow-[0_0.1rem_0_0_#00b3a0]">
          Get a Quote
        </a>
      </div>
      <div
        className={`icon-mobileMenu   left-0 top-0 z-30 flex w-full animate-slideIn items-center   justify-between bg-white px-5 pb-1   pt-4 shadow-lg backdrop-blur-md md:hidden
          ${lastScrollY === "down" ? "fixed " : "absolute"}
          `}
      >
        <a href="#" className="logo ">
          <img src={logo} alt="logo" className="z-30 h-[50px]  w-[180px]" />
        </a>
        <span
          className="cursor-pointer"
          onClick={() => setMobileMenu((prev) => !prev)}
        >
          <BiMenuAltLeft className="text-[2.2rem] text-text" />
        </span>
      </div>
      <div
        className={`bottom-menu fixed  bottom-7 left-1/2 z-30   
           translate-x-[-50%]
           rounded-full bg-[#f1f1f1] px-6 backdrop-blur-md  transition-all duration-700   md:hidden   ${
             mobileMenu ? "block" : "hidden"
           }`}
      >
        <ul className="relative flex  ">
          <span
            className={`absolute -top-5 h-11 w-11 duration-500 md:h-14 md:w-14 ${menus[active].disMob} 
                rounded-full border-[3px] border-white bg-btn-primary-bg md:border-4`}
          >
            {/* <span className="absolute left-[-20px] top-4 h-4 w-4 rounded-tr-[16px] bg-transparent shadow-myShadow1"></span>
              <span className="absolute right-[-20px] top-4 h-4 w-4 rounded-tl-[16px] bg-transparent shadow-myShadow2"></span> */}
          </span>
          {menus.map((menu, index) => {
            return (
              <li key={index} className="w-11 md:w-14">
                <a
                  href={`#${
                    menu.name.toLowerCase() === "home"
                      ? ""
                      : menu.name.toLowerCase()
                  }`}
                  className="flex flex-col whitespace-nowrap items-center pt-2 text-sm font-medium text-btn-secondary-text duration-500 md:pt-4 md:text-base "
                  onClick={() => setActive(index)}
                >
                  <span
                    className={`z-10   cursor-pointer text-2xl ${
                      index === active && " -mt-5 text-white"
                    }`}
                  >
                    {menu.icon}
                  </span>
                  <span
                    className={`font-poppins capitalize text-text ${
                      active === index
                        ? "translate-y-4 opacity-100 duration-700 "
                        : "translate-y-10 opacity-0"
                    }`}
                  >
                    {menu.name}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
