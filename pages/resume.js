import React from "react";
import PageTitle from "../components/PageTitle";

import Education from "../components/Resume/Education";
import Experience from "../components/Resume/Experience";
import Skill from "../components/Resume/Skill";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../components/firebase";

const resume = ({ education, experience }) => {
  return (
    <>
      <div className="title pb-1">
        <PageTitle title={"Resume"} />
      </div>
      <Education education={education} />
      <Experience experience={experience} />
      {/* <Skill /> */}
    </>
  );
};

export default resume;
export async function getStaticProps(context) {
  let education = [];
  let experience = [];

  const querySnapshot = await getDocs(collection(db, "education"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    education.push({ ...doc.data(), id: doc.id });
  });
  const queryExperience = await getDocs(collection(db, "experience"));
  queryExperience.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    experience.push({ ...doc.data(), id: doc.id });
  });
  return {
    props: { education, experience }, // will be passed to the page component as props
  };
}
