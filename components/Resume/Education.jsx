import React from "react";
import { HiOutlineBookOpen } from "react-icons/hi";
const Education = () => {
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
      <div className="timeline">
        <article className="timeline__item">
          <h5 className="title title--h4 timeline__title">
            University School of the Arts
          </h5>
          <span className="timeline__period">2007 — 2009</span>
          <p className="timeline__description fonr-[300] text-[15px]">
            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit
            atque corrupti, quos dolores et quas molestias exceptur.
          </p>
        </article>
        <article className="timeline__item">
          <h5 className="title title--h4 timeline__title">
            New York Academy of Art
          </h5>
          <span className="timeline__period">2007 — 2009</span>
          <p className="timeline__description fonr-[300] text-[15px]">
            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit
            atque corrupti, quos dolores et quas molestias exceptur.
          </p>
        </article>
        <article className="timeline__item">
          <h5 className="title title--h4 timeline__title">
            High School of Art and Design
          </h5>
          <span className="timeline__period">2003 — 2005</span>
          <p className="timeline__description fonr-[300] text-[15px]">
            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit
            atque corrupti, quos dolores et quas molestias exceptur.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Education;
