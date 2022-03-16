import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { GlobalContext } from "../../../components/Context";
import PortfolioDetail from "../../../components/Portfolio/PortfolioDetail.jsx";

const index = () => {
  const { handleBack } = GlobalContext();
  return (
    <div>
      <div className="title pb-1">
        <div className="text-[32px] text-white font-[600] mb-[25px] page-title">
          Portfolio
          <h1 className="title-separate mt-2"></h1>
        </div>
      </div>
      <div
        onClick={handleBack}
        className="btn-back flex justify-start items-center cursor-pointer"
      >
        <div className="icon-back mr-2">
          <IoMdArrowBack />
        </div>
        <div className="text-back">Back Portfolio</div>
      </div>
      <PortfolioDetail />
    </div>
  );
};

export default index;
