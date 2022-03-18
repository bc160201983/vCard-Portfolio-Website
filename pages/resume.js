import React from "react";
import PageTitle from "../components/PageTitle";

import Education from "../components/Resume/Education";
import Experience from "../components/Resume/Experience";
import Skill from "../components/Resume/Skill";

const resume = () => {
  return (
    <>
      <div className="title pb-1">
        <PageTitle title={"Resume"} />
      </div>
      <Education />
      <Experience />
      <Skill />
    </>
  );
};

export default resume;
