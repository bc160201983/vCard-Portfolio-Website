import React from "react";
import { HiOutlineBookOpen } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../../animation";
const Education = ({ education }) => {
  return (
    <div>
      <div className="title-h2 flex justify-start items-center mb-[20px]">
        <div className="icon-book box icon-box box--s2 mr-4 h-[48px] w-[48px] flex justify-center items-center rounded-xl">
          <HiOutlineBookOpen className="h-[18px] w-[18px] text-[#ffdb6e]" />
        </div>
        <div className="main-title text-[24px] font-semibold text-white">
          Education
        </div>
      </div>
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="timeline"
      >
        {education.map((edu) => {
          return (
            <motion.div
              className="timeline__item"
              key={edu.id}
              variants={fadeInUp}
            >
              <article className="">
                <h5 className="title title--h4 timeline__title">
                  {edu.institute}
                </h5>
                <span className="timeline__period">
                  {edu.from} — {edu.to}
                </span>
                <p className="timeline__description fonr-[300] text-[15px]">
                  {edu.description}
                </p>
              </article>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Education;
