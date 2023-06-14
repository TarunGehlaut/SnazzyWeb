import CaseStudyCard from "../../components/CaseStudyCard";
import Container from "../../components/Container";

import { AiOutlineArrowRight } from "react-icons/ai";
import { caseStudies } from "../../utils/constants";

const CaseStudy = () => {
  return (
    <Container>
      <div className=" relative mx-auto max-w-[1000px] pb-20 font-poppins">
        <div className="content grid  gap-5 pb-10">
          <h2 className=" text-center  text-3xl font-bold text-[#1b243f]">
            Businesses we have empowered digitally!
          </h2>
          <p className="mx-auto  text-center text-[18px] text-[#5b6278]  sm:w-4/5">
            Our innovative business framework is faster, superior, tested way to
            unlock your digital
          </p>
          <h3 className="pt-8  text-center text-2xl font-bold text-[#1b243f]">
            Case Studies
          </h3>
        </div>

        <div className="case-studies-list l grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[54px]">
          {caseStudies.map((caseStudy) => {
            return <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />;
          })}
        </div>
        <button className="group block w-full   pt-10 text-right">
          <a className=" flex  items-center justify-end text-text">
            <span className="decoration-gray-400 transition-all  duration-300 group-hover:underline   group-hover:underline-offset-4">
              View all Case Studies
            </span>
            <span className="pl-5">
              <AiOutlineArrowRight className="text-2xl text-btn-primary-bg" />
            </span>
          </a>
        </button>
      </div>
    </Container>
  );
};

export default CaseStudy;
