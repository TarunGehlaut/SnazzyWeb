import AchievementCard from "../../components/AchievementCard";
import Container from "../../components/Container";
import { achievements } from "../../utils/constants";

import { motion } from "framer-motion";

const Achievements = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mx-auto max-w-[1000px]  pb-20 font-poppins"
      >
        <div className="grid  gap-5 pb-10">
          <h2 className=" text-center  text-3xl font-bold text-[#1b243f]">
            SnazzyWeb Achievements
          </h2>
          <p className="mx-auto  text-center text-[18px] text-[#5b6278]  sm:w-4/5">
            Our innovative business framework is faster, superior, tested way to
            unlock your digital
          </p>
          <div className="mx-auto flex w-full flex-col gap-5 sm:flex-row sm:items-center sm:justify-center">
            <a className="flex cursor-pointer items-center justify-center rounded-lg bg-[#1b243f] px-7 py-2 text-lg font-medium  text-white">
              Contact Sales
            </a>
            <a className="flex  cursor-pointer items-center justify-center rounded-lg bg-[#00b3b0] px-7 py-2 text-lg font-medium  text-white transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_6px_13px_2px_rgba(0,0,0,.25)] hover:outline-[#00b3b0]">
              Get a Demo
            </a>
          </div>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[54px]">
          {achievements.map((achievement) => {
            return (
              <AchievementCard key={achievement.id} achievement={achievement} />
            );
          })}
        </div>
      </motion.div>
    </Container>
  );
};

export default Achievements;
