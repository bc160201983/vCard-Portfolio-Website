import React from "react";
import BlogList from "../../components/Blog/BlogList";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../../animation";

const index = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div className="title pb-1">
        <div className="text-[32px] text-white font-[600] mb-[25px]">
          Blog
          <h1 className="title-separate mt-2"></h1>
        </div>
      </div>
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="grid md:grid-cols-2 grid-cols-1"
      >
        {list.map((item, index) => {
          return (
            <motion.div key={index} variants={fadeInUp}>
              <Link key={index} href={`/blog/${index + 1}`} passHref>
                <a>
                  <BlogList />
                </a>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
};

export default index;
