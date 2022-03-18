import React from "react";

const PageTitle = ({ title }) => {
  return (
    <div>
      <div className="page-title text-[32px] text-white font-[600] mb-[25px] capitalize">
        {title}
        <h1 className="title-separate mt-2"></h1>
      </div>
    </div>
  );
};

export default PageTitle;
