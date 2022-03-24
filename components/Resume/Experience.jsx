import React from "react";
import Image from "next/image";
import briefcase from "../../public/briefcase.svg";
import { fadeInUp, stagger } from "../../animation";
import { motion } from "framer-motion";
const Experience = ({ experience }) => {
  return (
    <div>
      <div className="title-h2 flex justify-start items-center mb-[20px]">
        <div className="icon-book box icon-box box--s2 mr-4 h-[48px] w-[48px] flex justify-center items-center rounded-xl">
          <Image
            src={briefcase}
            className="h-[18px] w-[18px] text-[#ffdb6e]"
            alt="icon"
          />
        </div>
        <div className="main-title text-[24px] font-semibold text-white">
          Experience
        </div>
      </div>
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="timeline"
      >
        {experience.map((ex) => {
          return (
            <motion.div key={ex.id} variants={fadeInUp}>
              <article className="timeline__item">
                <h5 className="title title--h4 timeline__title">
                  {ex.company}
                </h5>
                <span className="timeline__period">
                  {ex.Exfrom} — {ex.Exto}
                </span>
                <p className="timeline__description fonr-[300] text-[15px]">
                  {ex.Exdescription}
                </p>
              </article>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Experience;
