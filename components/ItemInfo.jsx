import React from "react";

const ItemInfo = ({ icons, title, info }) => {
  return (
    <div className="flex">
      <div className="detail-info-item flex justify-center items-center mb-7">
        <div className="box icon-box box--s2 mr-4 h-[48px] w-[48px] flex justify-center items-center rounded-xl">
          {icons}
        </div>
        <div className=" flex flex-col text-white">
          <div className="div uppercase text-[#d6d6d6] text-[12px]">
            {title}
          </div>
          <div className="text-[#FCFCFC] text-[14px] font-light">{info}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
