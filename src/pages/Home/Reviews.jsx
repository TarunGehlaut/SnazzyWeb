import Container from "../../components/Container";
import ReviewCard from "../../components/ReviewCard";

import GoogleReview from "../../assets/googleReviews.png";
import { reviewsData } from "../../utils/constants";

const Reviews = () => {
  return (
    <Container>
      <div className="relative  grid gap-10 font-poppins xs:grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 ">
        <div className="flex flex-col   gap-5 sm:mx-auto  sm:justify-center md:col-span-3 lg:col-auto">
          <h4
            className="relative   text-xl font-semibold capitalize 
          text-[#293352] after:absolute after:left-0
after:top-7 after:h-[3px] after:w-[28px] after:rounded-3xl after:bg-btn-primary-bg after:content-[''] sm:mb-0 md:text-lg"
          >
            Our Client&apos;s Review
          </h4>
          <h2 className="  mb-2 text-3xl font-bold text-[#1b243f]">
            What Our Clients Say
          </h2>
          <div className="mb-10 h-[70px] w-[160px] overflow-hidden">
            <img
              src={GoogleReview}
              alt="google reviews"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {reviewsData.map((review) => {
          return <ReviewCard key={review.id} review={review} />;
        })}
      </div>
    </Container>
  );
};

export default Reviews;
