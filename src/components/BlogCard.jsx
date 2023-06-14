import { motion } from "framer-motion";

const BlogCard = ({ blog, index }) => {
  return (
    <motion.li
      className="blog-card"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: "true" }}
    >
      <a className="group cursor-pointer">
        <div className="aspect-[1.61] overflow-hidden rounded">
          <img
            src={blog.blogImgSrc}
            alt="img"
            className="h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-110"
          />
        </div>

        <p className="my-2 line-clamp-2   text-lg font-medium text-[#1b243f]">
          {blog.title}
        </p>
      </a>
      <div className="mt-3 ">
        <div className="flex flex-wrap  items-center   text-xs font-medium text-[#313849] md:text-sm">
          <span>{blog.job}</span>
          <span className="mx-3 text-xs">-</span>
          <div className="h-8 w-8 overflow-hidden rounded-full">
            <img
              src={blog.avatar}
              alt="review"
              className="h-full w-full rounded-[inherit] object-cover"
            />
          </div>
          <span className="ml-2">{blog.author}</span>
        </div>
      </div>
    </motion.li>
  );
};

export default BlogCard;
