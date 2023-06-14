import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import { headerBannerContent } from "../../utils/constants";

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// import required modules
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import HeroBanner from "./HeroBanner";

SwiperCore.use(Autoplay);
const HeroBannerSwiper = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Autoplay]}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper group relative"
      >
        <SwiperButtons />
        {headerBannerContent.map((content) => {
          return (
            <SwiperSlide key={content.id}>
              <HeroBanner content={content} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default HeroBannerSwiper;

function SwiperButtons() {
  const swiper = useSwiper();
  return (
    <div className="opacity-0 transition-all duration-200 group-hover:opacity-100">
      <button
        onClick={() => swiper.slideNext()}
        className=" absolute left-2 top-1/2 z-20  translate-y-[-300%]"
      >
        <AiOutlineLeft className="text-3xl font-semibold text-white transition-all duration-300 hover:text-btn-primary-bg" />
      </button>
      <button
        onClick={() => swiper.slidePrev()}
        className="absolute right-2 top-1/2 z-20  translate-y-[-300%] "
      >
        <AiOutlineRight className="text-3xl font-semibold text-white transition-all duration-300 hover:text-btn-primary-bg" />
      </button>
    </div>
  );
}
