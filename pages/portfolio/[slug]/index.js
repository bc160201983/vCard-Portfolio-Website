import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { GlobalContext } from "../../../components/Context";
import PageTitle from "../../../components/PageTitle";
import PortfolioDetail from "../../../components/Portfolio/PortfolioDetail.jsx";

const index = () => {
  const { handleBack } = GlobalContext();
  return (
    <div>
      <div className="title pb-1">
        <PageTitle title={"portfolio"} />
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
