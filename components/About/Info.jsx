import React from "react";
import Image from "next/image";

const Info = ({ title, img, desc }) => {
  return (
    <div className="pr-5">
      <div className="info-grid flex rounded-[16px] mb-[30px] px-[30px] pt-[30px] pb-[20px] box-info-shadow box-inner box--s2 box">
        <div className="icon-info  mr-4">
          <Image
            className="info-image"
            width={60}
            height={60}
            src={img}
            alt=""
          />
        </div>
        <div className="info-details">
          <div className="info-title text-[18px] text-[#FCFCFC] pb-2 font-[600]">
            {title}
          </div>
          <div className="font-light text-[14px]">{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default Info;
