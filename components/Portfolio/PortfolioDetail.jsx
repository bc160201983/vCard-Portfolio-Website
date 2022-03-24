import Image from "next/image";
import React from "react";
import { AiOutlineGithub, AiOutlineProject } from "react-icons/ai";
import { FiLayers } from "react-icons/fi";
import { HiOutlineCalendar } from "react-icons/hi";
import ReactHtmlParser from "react-html-parser";

const PortfolioDetail = ({ portfolioData }) => {
  const { image, description, gitHubUrl, websiteUrl, title } = portfolioData;

  return (
    <div>
      <header className="header-image relative mt-[1.5rem] mb-[2.5rem]">
        <h1 className="title-portfolio absolute mb-[24px] bottom-0 left-0 z-[2] text-[2rem] font-semibold text-white">
          {title}
        </h1>
        <div className="image-wrapper h-[25rem] ml-[-30px] mr-[-30px] relative">
          <Image
            layout="fill"
            objectFit="cover"
            className="object-cover object-center h-full w-full"
            src={image}
            alt={title}
          />
        </div>
      </header>
      <div className="grid grid-cols-3 mobile-grid-1 justify-start items-center mb-10">
        <div className="details-info details-info--inline flex justify-start items-center ">
          <div className="box icon-box box--s2 mr-4 h-[48px] w-[48px] flex justify-center items-center rounded-xl">
            <AiOutlineGithub className="h-[18px] w-[18px] text-[#ffdb6e]" />
          </div>
          <div>
            <div className="port-title whitespace-nowrap text-[12px]">
              GitHub
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
            <AiOutlineProject className="h-[18px] w-[18px] text-[#ffdb6e]" />
          </div>
          <div>
            <div className="port-title whitespace-nowrap text-[12px]">
              Product
            </div>
            <div className="port-name text-[#FCFCFC] text-[14px]">
              Live View
            </div>
          </div>
        </div>
      </div>
      <div
        className="ql-editor"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default PortfolioDetail;
