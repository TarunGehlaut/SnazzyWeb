import Container from "./Container";

import logo from "../assets/logo-web.png";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillMail,
  AiFillTwitterCircle,
} from "react-icons/ai";

import { AiFillPhone } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-text pb-5 pt-12 font-poppins">
      <div className=" grid justify-center gap-12  xs:mx-auto xs:max-w-[460px] sm:max-w-[590px] md:max-w-[730px] lg:max-w-[980px] xl:max-w-[75rem] 2xl:max-w-[1400px]  ">
        <div className="footer-top  grid gap-10 xs:grid-cols-2 lg:grid-cols-4 lg:place-items-center  lg:gap-32">
          <div className="foot-brand grid gap-5 ">
            <a className="logo block   w-[180px]">
              <img src={logo} alt="logo" className="block " />
            </a>
            <ul className=" flex items-center gap-4 ">
              <li>
                <a>
                  <AiFillTwitterCircle className="cursor-pointer text-[28px] text-white  transition-all duration-200 hover:text-btn-primary-bg" />
                </a>
              </li>
              <li>
                <a>
                  <AiFillFacebook className="cursor-pointer text-[28px] text-white  transition-all duration-200 hover:text-btn-primary-bg" />
                </a>
              </li>
              <li>
                <a>
                  <AiFillInstagram className="  cursor-pointer text-[28px] text-white  transition-all duration-200 hover:text-btn-primary-bg " />
                </a>
              </li>
            </ul>

            <button className="h-12 max-w-max items-center justify-center border-2 border-white px-5 text-xl font-medium text-white transition-all duration-300 hover:bg-white hover:text-text">
              Contact us
            </button>
          </div>

          <ul className="footer-list  z-20">
            <li>
              <p
                className="relative mb-3 text-xl font-medium text-white after:absolute after:left-0 
              after:top-7 after:h-[3px] after:w-[36px] after:rounded-3xl after:bg-btn-primary-bg   after:content-[''] lg:mb-5 lg:mb-5 
              "
              >
                Useful Links
              </p>
            </li>
            <li>
              <a className="inline-block cursor-pointer pt-2 text-lg     text-[#ccc] transition-all duration-200 hover:text-[#fff]">
                About Us
              </a>
            </li>
            <li>
              <a className="inline-block cursor-pointer pt-2 text-lg    text-[#ccc] transition-all duration-200 hover:text-[#fff]">
                Why CHoose Us
              </a>
            </li>
            <li>
              <a className="inline-block cursor-pointer pt-2 text-lg    text-[#ccc] transition-all duration-200 hover:text-[#fff]">
                Team Members
              </a>
            </li>
            <li>
              <a className="inline-block cursor-pointer pt-2 text-lg    text-[#ccc] transition-all duration-200 hover:text-[#fff]">
                Blog
              </a>
            </li>
          </ul>

          <ul className="footer-list  z-20">
            <li>
              <p
                className="relative mb-3 text-xl font-medium text-white after:absolute 
              after:left-0 after:top-7 after:h-[3px] after:w-[36px] after:rounded-3xl after:bg-btn-primary-bg  after:content-[''] lg:mb-5 "
              >
                Solutions
              </p>
            </li>
            <li>
              <a className="inline-block cursor-pointer pt-2 text-lg    text-[#ccc] transition-all duration-200 hover:text-[#fff]">
                Web Development
              </a>
            </li>
            <li>
              <a className="inline-block cursor-pointer pt-2 text-lg    text-[#ccc] transition-all duration-200 hover:text-[#fff]">
                Digital Marketing
              </a>
            </li>
            <li>
              <a className="inline-block cursor-pointer pt-2 text-lg    text-[#ccc] transition-all duration-200 hover:text-[#fff]">
                ECommerce
              </a>
            </li>
            <li>
              <a className="inline-block cursor-pointer pt-2 text-lg    text-[#ccc] transition-all duration-200 hover:text-[#fff]">
                Branding
              </a>
            </li>
          </ul>

          <div className="footer-list z-20">
            <p
              className="relative mb-3 text-xl font-medium text-white after:absolute 
              after:left-0 after:top-7 after:h-[3px] after:w-[36px] after:rounded-3xl  after:bg-btn-primary-bg after:content-[''] lg:mb-5 "
            >
              Contact
            </p>
            <ul className="flex flex-col gap-5  lg:gap-3">
              <li>
                <div className="flex items-center gap-[2px]">
                  <span
                    className="transition-transition-1
                  mr-3 rounded-full bg-btn-primary-bg p-2 text-xl text-white
                 "
                  >
                    <AiFillPhone className="rotate-90 " />
                  </span>
                  <div>
                    <span className="text-lg text-[#fff] lg:text-sm">
                      Drop a Line
                    </span>
                    <p className="text-[#ccc] lg:text-sm">+00 (123) 456 889</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-[2px]">
                  <span
                    className="transition-transition-1
                  mr-3 rounded-full bg-btn-primary-bg p-2 text-xl text-white
                 "
                  >
                    <AiFillMail />
                  </span>
                  <div>
                    <span className="text-lg text-[#fff] lg:text-sm ">
                      Email Address
                    </span>
                    <p className="flex flex-wrap text-sm  text-[#ccc]">
                      snazzyweb@gmail.com
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-[2px]">
                  <span
                    className="transition-transition-1
                  mr-3 rounded-full bg-btn-primary-bg p-2 text-xl text-white
                 "
                  >
                    <HiLocationMarker />
                  </span>
                  <div>
                    <span className="text-lg text-[#fff] lg:text-sm">
                      Visit office
                    </span>
                    <p className="text-[#ccc] lg:text-sm  ">
                      583 Main Street, NY, USA
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom   flex flex-col  items-center justify-between gap-5 lg:flex-row lg:gap-0  ">
          <div className="flex flex-col items-center gap-2 text-sm  xs:flex-row  xs:gap-5 sm:text-base    md:gap-10">
            <div className="cursor-pointer   text-[#eee] transition-all duration-200 hover:text-btn-primary-bg">
              Terms & Conditions
            </div>
            <div className="cursor-pointer   text-[#eee] transition-all duration-200 hover:text-btn-primary-bg">
              Privacy Policy
            </div>
            <div className="cursor-pointer   text-[#eee] transition-all duration-200 hover:text-btn-primary-bg">
              Guest Posting
            </div>
          </div>

          <p className="mt-5  text-sm font-medium text-white sm:mt-0">
            © 2023 Copyrights by SnazzyWeb
          </p>
        </div>
      </div>
      <div className="footer-bar__svg absolute bottom-[20%] right-[-235px] z-[10] lg:bottom-[-135px] lg:right-[20%] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="525.998"
          height="526"
          viewBox="0 0 525.998 526"
          className="max-h-[25rem] w-auto opacity-20 lg:max-w-[40rem]"
        >
          <g
            id="Group_1977"
            data-name="Group 1977"
            transform="translate(-855.001 -146)"
          >
            <g id="Group_1974" data-name="Group 1974">
              <g
                id="Union_5"
                data-name="Union 5"
                transform="translate(855.001 146)"
                fill="none"
              >
                <path
                  d="M0,407.131,144.132,263,0,118.869,118.869,0,263,144.131,407.129,0,526,118.873,381.87,263,525.994,407.124,407.125,525.992,263,381.869,118.869,526Z"
                  stroke="none"
                ></path>
                <path
                  d="M 118.8691940307617 523.878662109375 L 263.0008544921875 379.7473449707031 L 407.1250610351562 523.87109375 L 523.8729248046875 407.1236572265625 L 379.7487182617188 263 L 523.8766479492188 118.8725357055664 L 407.1287841796875 2.125129461288452 L 263.0008544921875 146.2525939941406 L 118.8691940307617 2.121329784393311 L 2.12133002281189 118.8687362670898 L 146.2530670166016 263 L 2.12133002281189 407.1311950683594 L 118.8691940307617 523.878662109375 M 118.8691940307617 526 L -7.080077921273187e-06 407.1311950683594 L 144.1317291259766 263 L -7.080077921273187e-06 118.8687362670898 L 118.8691940307617 0 L 263.0008544921875 144.1312713623047 L 407.1287841796875 0.003800000064074993 L 525.9979858398438 118.8725357055664 L 381.8700561523438 263 L 525.9942626953125 407.1236572265625 L 407.1250610351562 525.9923706054688 L 263.0008544921875 381.86865234375 L 118.8691940307617 526 Z"
                  stroke="none"
                  fill="#efefef"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
