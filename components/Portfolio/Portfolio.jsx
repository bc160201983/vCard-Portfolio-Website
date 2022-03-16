import React from "react";
import tw from "tailwind-styled-components";
import Image from "next/image";
const PortfolioItem = tw.div``;

const Portfolio = ({ item }) => {
  return (
    <div>
      <div
        variants={item}
        className="gallary-item transition-all duration-[0.3s] ease-in-out"
      >
        <div className="image-wrap max-h-[12.75rem] h-[12.75rem] relative">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-[16px] img-main-portifolio"
            src="https://art-template.ru/vcard4/assets/images/projects/project-1.jpg"
            alt=""
          />
        </div>
        <div className="gallary-caption w-full px-2 py-4">
          <div className="title font-light text-[#FCFCFC]">MoonBoard</div>
          <div className="Category text-[#D6d6d6] font-light">Web Design</div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
