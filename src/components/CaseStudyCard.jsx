const CaseStudyCard = ({ caseStudy }) => {
  return (
    <div className="group cursor-pointer  font-poppins">
      <div className="relative h-[442px] w-full overflow-hidden rounded-lg shadow-[0_6px_13px_2px_transparent]">
        <img
          src={caseStudy.imgSrc}
          alt="case-study"
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110 "
        />
        <div className="absolute  top-0 block h-full w-full bg-blueLightGradient">
          <div className="inner-icon absolute left-[-50px] top-4 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-zinc-800 border-opacity-40  bg-white transition-all duration-300 group-hover:left-4">
            <span className="text-[36px] text-btn-primary-bg">
              +
            </span>
          </div>
          <div className="inner-content absolute bottom-6 left-0 w-full px-7 ">
            <p className=" text-white ">{caseStudy.subtitle}</p>
            <h3 className="group-hover:decoration-3  mt-1  font-serif text-[2rem] font-medium text-white   transition-all duration-300 group-hover:underline group-hover:underline-offset-4 lg:group-hover:decoration-2">
              {caseStudy.title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
