import React from "react";

const Info = ({ title, img, desc }) => {
  return (
    <div>
      <div className="main-info flex justify-between rounded-[16px] mb-[30px] px-[30px] pt-[30px] pb-[20px] box-info-shadow box--s2">
        <div className="icon-info mr-4">
          <img className="w-10 h-10 max-w-full" src={img} alt="" />
        </div>
        <div className="info-details">
          <div className="text-[18px] text-[#FCFCFC] pb-2 font-[600]">
            {title}
          </div>
          <div className="font-light text-[16px]">{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default Info;
