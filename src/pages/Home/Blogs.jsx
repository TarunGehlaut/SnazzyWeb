import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import BlogCard from "../../components/BlogCard";
import Container from "../../components/Container";
import { BlogsData } from "../../utils/constants";

import { motion } from "framer-motion";

const Blogs = () => {
  return (
    <Container>
      <div className="relative mx-auto max-w-[1200px] pb-20 font-poppins">
        <div className="content grid  gap-10 pb-10 sm:mx-auto  sm:w-2/4 md:gap-7">
          <h4
            className="relative mx-auto   text-xl font-semibold capitalize 
          text-[#293352] after:absolute after:left-0
after:top-7 after:h-[3px] after:w-[28px] after:rounded-3xl after:bg-btn-primary-bg after:content-[''] sm:mb-0 md:text-lg"
          >
            Our Blogs
          </h4>
          <h2 className=" text-center  text-3xl font-bold text-[#1b243f]">
            Stay Ahead with Our Blog&apos;s Latest News and Articles
          </h2>
          <p className="mx-auto  text-center text-[18px] text-[#5b6278] ">
            Stay informed and ahead of the curve with our blog&apos;s diverse
            range of articles and news on current events, industry insights, and
            helpful tips.
          </p>
        </div>

        <ul className="case-studies-list  grid gap-12 pt-10 sm:grid-cols-2  lg:grid-cols-4">
          {BlogsData.map((blog, index) => {
            return <BlogCard blog={blog} key={blog.id} index={index} />;
          })}
        </ul>
        <button className="group group block w-full  pt-10 text-right">
          <a className=" flex  items-center justify-end text-btn-primary-bg">
            <span className="group text-lg decoration-btn-primary-bg   transition-all duration-300 group-hover:underline   group-hover:underline-offset-4">
              View all
            </span>
            <span className="pl-3">
              <AiOutlineArrowRight className="text-2xl text-btn-primary-bg  group-hover:animate-slideRight" />
            </span>
          </a>
        </button>
      </div>
    </Container>
  );
};

export default Blogs;
