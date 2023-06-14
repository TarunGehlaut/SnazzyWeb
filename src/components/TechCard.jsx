import img from "../assets/hero-banner-1.jpg";

const TechCard = ({ tech }) => {
  return (
    <div className="group relative flex cursor-pointer items-center gap-5 rounded-3xl p-2 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-10 before:rounded-2xl before:bg-blueGradient before:opacity-[0.66] before:shadow-[0_24px_48px_rgba(21,26,40,.5)] before:backdrop-blur-[20px] before:transition-opacity before:content-[''] hover:before:opacity-100">
      <div className="z-30 ml-3   overflow-hidden rounded-xl">
        <img
          src={tech.imgSrc}
          alt=""
          className="z-30 h-full w-full object-cover transition-all duration-300 group-hover:scale-105 "
        />
      </div>

      <div className="z-20 flex flex-col">
        <p className="text-xl font-semibold   text-white">{tech.title}</p>
        <span className="font-semibold  text-white/[0.5]">{tech.subTitle}</span>
      </div>
    </div>
  );
};

export default TechCard;
