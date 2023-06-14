import Container from "../../components/Container";

import FeatureCard from "../../components/FeatureCard";
import { keyFeaturesData } from "../../utils/constants";



const KeyFeatures = () => {
  return (
    <Container>
      <div className="relative">
        <div className="mb-16 grid  gap-5 md:mb-24">
          <h4
            className="relative mx-auto  text-xl font-semibold text-[#293352] 
            after:absolute after:left-0 after:top-6
after:h-[3px] after:w-full  after:rounded-3xl after:bg-btn-primary-bg after:content-[''] sm:mb-0 md:text-lg"
          >
            Our Services
          </h4>
          <h2 className=" text-center  text-3xl font-bold text-[#1b243f]">
            We provide IT & Business solutions
          </h2>
          <p className="mx-auto  text-center  text-[#5b6278]  sm:w-3/5">
            We strive to provide services that are not only efficient and
            effective, but also beautiful in their execution, with a focus on
            delivering an exceptional experience to our customers.
          </p>
        </div>

        <div className="relative mx-auto   grid gap-12 font-poppins md:gap-20 lg:gap-40">
          {keyFeaturesData.map((feature, index) => {
            return (
              <FeatureCard key={feature.id} index={index} feature={feature} />
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default KeyFeatures;
