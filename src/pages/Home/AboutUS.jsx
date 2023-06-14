import AboutImg from "../../assets/aboutUS.png";
import Container from "../../components/Container";

import { AiFillPhone, AiOutlineCheck } from "react-icons/ai";

import { motion } from "framer-motion";

const AboutUS = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: "true" }}
        className="relative grid  max-w-[1250px] gap-5 font-poppins lg:mx-auto lg:grid-cols-2 lg:gap-40"
      >
        <div className="content grid   gap-5 pb-10 ">
          <h4
            className="relative   text-xl font-semibold capitalize 
          text-[#293352] after:absolute after:left-0
after:top-7 after:h-[3px] after:w-[28px] after:rounded-3xl after:bg-btn-primary-bg after:content-[''] sm:mb-0 md:text-lg"
          >
            Why Choose Us
          </h4>
          <h2 className="  text-3xl font-bold text-[#1b243f]">
            What we promise high quality IT & digital Agency Services
          </h2>
          <p className=" text-[#5b6278] ">
            Our agency&apos;s team of experienced experts provide customized
            solutions to meet client&apos;s needs. We stay up-to-date with the
            latest technologies and invest in ongoing training to offer
            innovative solutions. Let us help you stay ahead of the competition.
          </p>

          <ul className="grid gap-4">
            <li className="flex items-center gap-2">
              <span>
                <AiOutlineCheck className="text-2xl font-bold text-btn-primary-bg" />
              </span>
              <p className="font-medium text-text">Experts around the world</p>
            </li>
            <li className="flex items-center gap-2">
              <span>
                <AiOutlineCheck className="text-2xl font-bold text-btn-primary-bg" />
              </span>
              <p className="font-medium text-text">
                Best Practice for industry
              </p>
            </li>
          </ul>

          <div className="md:flex md:flex-wrap md:items-center md:justify-between">
            <p className=" text-lg text-[#666] ">
              Join our team – come work with us.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <span
                className="icon relative z-10  flex h-12 w-12 items-center justify-center rounded-full bg-btn-primary-bg
        before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:animate-bubble before:rounded-full  before:bg-btn-primary-bg  before:content-['']"
              >
                <AiFillPhone className="text-2xl text-white" />
              </span>
              <span className="text-lg font-medium text-text">
                +123 456 7890
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-grow md:mt-10">
          <img
            src={AboutImg}
            alt="about"
            className=" max-w-full  animate-customBounce object-cover object-center "
          />
        </div>
      </motion.div>
    </Container>
  );
};

export default AboutUS;
