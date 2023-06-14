import Container from "../../components/Container";
import TechCard from "../../components/TechCard";
import { technologiesUsedData } from "../../utils/constants";

const TechnologyUsed = () => {
  return (
    <div className="board relative z-10 mx-auto  max-w-[1512px] ">
      <Container>
        <div className="content max-w-[800px] md:mx-auto md:text-center">
          <h2 className="mb-4  text-3xl font-bold  text-white  md:text-[28px] ">
            Advancing Our Platforms with Technology
          </h2>
          <p className="mb-10  text-xl leading-7 text-white/[0.7] md:text-base md:leading-6 ">
            Our platforms use the latest advancements in technology to provide
            seamless user experiences and efficient functionality. We are
            dedicated to delivering the best possible service to our customers
            through innovative tools and techniques.
          </p>
        </div>
        <div className="technologies grid h-[350px] gap-5 overflow-hidden md:h-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {technologiesUsedData.map((tech) => {
            return <TechCard key={tech.id} tech={tech} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default TechnologyUsed;
