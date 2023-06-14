import { BsFillPlayFill } from "react-icons/bs";

const HeroBanner = ({ content }) => {
  return (
    <div className="hero-banner relative  flex h-[calc(100vh-94px)] w-full items-center justify-center ">
      {/* Image */}
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
        <img
          src={content.imgSrc}
          alt="SnazzyWeb"
          className="h-full w-full object-cover object-top"
        />
      </div>

      {/* Overlay */}
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden bg-black/30 "></div>

      {/* Content */}
      <div
        className="content relative mt-20 flex max-w-[600px] flex-col  items-center justify-center gap-5 px-1 font-poppins text-[#f8f9fa]
       md:mt-0"
      >
        <h2 className="mb-5 translate-y-[30px] animate-sliderReveal text-center   text-[40px]  font-semibold  leading-[1.1] opacity-0 md:mb-7 xl:text-[80px]">
          {content.title}
        </h2>
        <p className="translate-y-[30px] animate-sliderReveal text-center text-sm leading-5 opacity-0 md:max-w-[500px] md:text-base ">
          {content.heroText}
        </p>

        <div
          className="icon relative z-10 mt-7 flex h-14 w-14  items-center justify-center rounded-full bg-gray-100 
        before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:animate-bubble before:rounded-full  before:bg-white  before:content-['']
        "
        >
          <BsFillPlayFill className="text-3xl text-btn-primary-bg " />
        </div>
      </div>

      {/* Overlay */}
      <div className=" before:absolute before:bottom-[-2px] before:left-0 before:z-[100] before:h-full before:w-full  before:bg-[url('https://webshilla.com/wp-content/themes/solion/img/shape/bg-2.png')] before:bg-cover before:bg-bottom  before:content-['']"></div>
    </div>
  );
};

export default HeroBanner;
