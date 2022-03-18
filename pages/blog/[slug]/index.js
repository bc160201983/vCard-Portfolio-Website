import React from "react";
import BlogDetails from "../../../components/Blog/BlogDetails";

const index = () => {
  return (
    <div>
      <div className="title pb-1">
        <div className="text-[32px] text-white font-[600] mb-[25px]">
          Blog
          <h1 className="title-separate mt-2"></h1>
        </div>
      </div>
      <BlogDetails />
    </div>
  );
};

export default index;
