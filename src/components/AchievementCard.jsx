import Img from "../assets/happyClient.jpg";

const AchievementCard = ({ achievement }) => {
  return (
    <dl className="">
      <dt>
        <div className=" overflow-hidden rounded-lg ">
          <img
            src={achievement.imgSrc}
            alt="Happy client"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </dt>
      <dd className="  mt-3 text-[36px] font-bold text-[#00b3b0] md:text-[40px] ">
        {achievement.stats}
      </dd>
      <dd className="text-lg font-medium text-[#5b6278] lg:text-base">
        {achievement.subtitle}
      </dd>
    </dl>
  );
};

export default AchievementCard;
