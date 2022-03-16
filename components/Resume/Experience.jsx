import React from "react";
import Image from "next/image";
import briefcase from "../../public/briefcase.svg";
const Experience = () => {
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
      <div className="timeline">
        <article className="timeline__item">
          <h5 className="title title--h4 timeline__title">Creative Director</h5>
          <span className="timeline__period">2015 — Present</span>
          <p className="timeline__description fonr-[300] text-[15px]">
            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit
            atque corrupti, quos dolores et quas molestias exceptur.
          </p>
        </article>
        <article className="timeline__item">
          <h5 className="title title--h4 timeline__title">Art Director</h5>
          <span className="timeline__period">2013 — 2015</span>
          <p className="timeline__description fonr-[300] text-[15px]">
            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit
            atque corrupti, quos dolores et quas molestias exceptur.
          </p>
        </article>
        <article className="timeline__item">
          <h5 className="title title--h4 timeline__title">Web Designer</h5>
          <span className="timeline__period">2010 — 2013</span>
          <p className="timeline__description fonr-[300] text-[15px]">
            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit
            atque corrupti, quos dolores et quas molestias exceptur.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Experience;
