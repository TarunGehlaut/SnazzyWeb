import { companies } from "../../utils/constants";

const TrustedCompanies = () => {
  return (
    <div className=" bg-white ">
      <p className="mb-2 text-center font-poppins font-semibold capitalize leading-6 tracking-[1px] text-text">
        Trusted By 16,000+ Companies
      </p>
      <div className="flex flex-nowrap items-center justify-center overflow-hidden">
        <div className="flex flex-shrink-0 flex-grow-0 animate-CompanySlider_slider flex-nowrap items-center md:animate-none">
          {companies.map((company, index) => {
            return (
              <div key={index} className="mb-6 flex-initial  px-3">
                <div className="w-[120px] max-w-[120px]">
                  <img src={company.imgSrc} alt="" loading="lazy" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-shrink-0 flex-grow-0 animate-CompanySlider_slider flex-nowrap items-center md:hidden md:animate-none">
          {companies.map((company, index) => {
            return (
              <div key={index + 5} className="mb-6 flex-initial  px-3">
                <div className="w-[120px] max-w-[120px]">
                  <img src={company.imgSrc} alt="" loading="lazy" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;
