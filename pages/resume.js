import Image from "next/image";
import React from "react";
import { HiOutlineBookOpen } from "react-icons/hi";
import briefcase from "../public/briefcase.svg";
const resume = () => {
  return (
    <>
      <div className="title pb-1">
        <div className="text-[32px] text-white font-[600] mb-[25px]">
          Resume
          <h1 className="title-separate mt-2"></h1>
        </div>
      </div>
      <div className="title-h2 flex justify-start items-center mb-[20px]">
        <div className="icon-book icon-box box--s2 mr-4 h-[48px] w-[48px] flex justify-center items-center rounded-xl">
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
      <div className="title-h2 flex justify-start items-center mb-[20px]">
        <div className="icon-book icon-box box--s2 mr-4 h-[48px] w-[48px] flex justify-center items-center rounded-xl">
          <Image src={briefcase} className="h-[18px] w-[18px] text-[#ffdb6e]" />
        </div>
        <div className="main-title text-[24px] font-semibold text-white">
          Education
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
    </>
  );
};

export default resume;
