import Image from "next/image";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FiLayers } from "react-icons/fi";
import { HiOutlineCalendar } from "react-icons/hi";

const PortfolioDetail = () => {
  return (
    <div>
      <header className="header-image relative mt-[1.5rem] mb-[2.5rem]">
        <h1 className="title-portfolio absolute mb-[24px] bottom-0 left-0 z-[2] text-[2rem] font-semibold text-white">
          Moonboard – Admin Dashboard & <br />
          UI Kit + Charts Kit
        </h1>
        <div className="image-wrapper h-[25rem] ml-[-30px] mr-[-30px] relative">
          <Image
            layout="fill"
            objectFit="cover"
            className="object-cover object-center h-full w-full"
            src="https://art-template.ru/vcard4/assets/images/projects/project-1.jpg"
            alt=""
          />
        </div>
      </header>
      <div className="grid grid-cols-3 mobile-grid-1 justify-start items-center mb-10">
        <div className="details-info details-info--inline flex justify-start items-center ">
          <div className="box icon-box box--s2 mr-4 h-[48px] w-[48px] flex justify-center items-center rounded-xl">
            <AiOutlineUser className="h-[18px] w-[18px] text-[#ffdb6e]" />
          </div>
          <div>
            <div className="port-title whitespace-nowrap text-[12px]">
              CLIENT
            </div>
            <div className="port-name text-[#FCFCFC] text-[14px]">
              ArtTemplate
            </div>
          </div>
        </div>
        <div className="details-info details-info--inline flex justify-start items-center ">
          <div className="box icon-box box--s2 mr-4 h-[48px] w-[48px] flex justify-center items-center rounded-xl">
            <FiLayers className="h-[18px] w-[18px] text-[#ffdb6e]" />
          </div>
          <div>
            <div className="port-title whitespace-nowrap uppercase text-[12px]">
              CATEGORY
            </div>
            <div className="port-name text-[#FCFCFC] text-[14px]">
              Web Design
            </div>
          </div>
        </div>
        <div className="details-info details-info--inline flex justify-start items-center ">
          <div className="box icon-box box--s2 mr-4 h-[48px] w-[48px] flex justify-center items-center rounded-xl">
            <HiOutlineCalendar className="h-[18px] w-[18px] text-[#ffdb6e]" />
          </div>
          <div>
            <div className="port-title whitespace-nowrap text-[12px]">Date</div>
            <div className="port-name text-[#FCFCFC] text-[14px]">
              27 June, 2021
            </div>
          </div>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, arcu
        tortor, feugiat in elit. Hendrerit sit suspendisse eget cras suspendisse
        aenean. Donec nunc quis sit augue malesuada nullam sit tincidunt. Dictum
        vel egestas pellentesque ut nunc lorem ut tortor at.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, arcu
        tortor, feugiat in elit. Hendrerit sit suspendisse eget cras suspendisse
        aenean. Donec nunc quis sit augue malesuada nullam sit tincidunt. Dictum
        vel egestas pellentesque ut nunc lorem ut tortor at.
      </p>
    </div>
  );
};

export default PortfolioDetail;
