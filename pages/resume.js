import React from "react";

import Education from "../components/Resume/Education";
import Experience from "../components/Resume/Experience";
import Skill from "../components/Resume/Skill";

const resume = () => {
  return (
    <>
      <div className="title pb-1">
        <div className="text-[32px] page-title text-white font-[600] mb-[25px]">
          Resume
          <h1 className="title-separate mt-2"></h1>
        </div>
      </div>
      <Education />
      <Experience />
      <Skill />
    </>
  );
};

export default resume;
